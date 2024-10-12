import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { z } from "zod";

export async function GET(req: Request) {
  const url = new URL(req.url);
  // console.log(url);

  const session = await getAuthSession();

  let followedCommunitiesIds: string[] = [];

  if (session) {
    const followedCommunities = await db.subscription.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        subreddit: true,
      },
    });

    followedCommunitiesIds = followedCommunities.map(
      ({ subreddit }) => subreddit.id
    );
  }
  try {
    const { subredditName, limit, page } = z
      .object({
        limit: z.string(),
        page: z.string(),
        subredditName: z.string().nullish().optional(),
      })
      .parse({
        subredditName: url.searchParams.get("subredditName"),
        limit: url.searchParams.get("limit"),
        page: url.searchParams.get("page"),
      });
    // console.log("1")
    let whereClause = {};

    if (subredditName) {
      // console.log("2")
      whereClause = {
        subreddit: {
          name: subredditName,
        },
      };
    } else if (session) {
      // console.log("3")
      whereClause = {
        subreddit: {
          id: {
            in: followedCommunitiesIds,
          },
        },
      };
    }
    // console.log("4")
    const posts = await db.post.findMany({
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
      orderBy: {
        createdAt: "desc",
      },
      include: {
        subreddit: true,
        votes: true,
        author: true,
        comments: true,
      },
      where: whereClause,
    });
    // console.log("5")
    // console.log(posts);

    return new Response(JSON.stringify(posts));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid request data passed", { status: 422 });
    }
    console.error("Error :: ", error);


    return new Response("Could not fetch post (T-T)", { status: 500 });

  }
}
