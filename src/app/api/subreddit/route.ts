import { getAuthSession } from "@/lib/auth"
import { db } from "@/lib/db"
import { Subredditvalidator } from "@/lib/validators/subreddit"
import { z } from "zod"

export async function POST(req: Request) {
    try {
        const session = await getAuthSession()
        console.log("1");
        if (!session?.user) {
            return new Response('Unauthorized', { status: 401 })
        }
        console.log("2");
        const body = await req.json()
        console.log("2.1");
        const { name } = Subredditvalidator.parse(body)
        console.log("2.2");
        const subredditexists = await db.subreddit.findFirst({
            where: {
                name,
            },

        })
        console.log("3");
        if (subredditexists) {
            return new Response('Subreddit already Exists', { status: 409 })
        }
        const subreddit = await db.subreddit.create({
            data: {
                name,
                creatorId: session.user.id,
            }
        })
        console.log("4");
        await db.subscription.create({
            data: {
                userId: session.user.id,
                subredditId: subreddit.id,
            }
        })
        console.log("5");
        return new Response(subreddit.name)
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(error.message, { status: 422 })
        }
        console.log("Error :: ", error);

        return new Response('Could not create subreddit', { status: 500 })

    }
}