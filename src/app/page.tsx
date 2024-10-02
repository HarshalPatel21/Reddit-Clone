import CustomFeed from "@/components/CustomFeed";
import GeneralFeed from "@/components/GeneralFeed";
// import { buttonVariants } from "@/components/ui/Button";
import { getAuthSession } from "@/lib/auth";
// import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { Button, Container, Grid, Paper, Typography, Box } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          Your Feed
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {/* @ts-expect-error server component*/}
          {session ? <CustomFeed /> : <GeneralFeed />}
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3}>
            <Box
              // bgcolor="emerald"
              // px={3}
              // py={2}
              sx={{ bgcolor: "emerald", paddingX: 3, paddingY: 2 }}
            >
              <Typography
                variant="h6"
                component="p"
                // display= "flex"
                // alignItems= "center"
                style={{ display: "flex", alignItems: "center" }}
              >
                <HomeIcon fontSize="small" /> Home
              </Typography>
            </Box>

            <Box
              // px={3}
              // py={2}
              sx={{ paddingX: 3, paddingY: 2 }}
            >
              <Typography color="textSecondary" paragraph>
                Your personal favorite Breddit homepage. Come here to check with
                your favorite communities.
              </Typography>

              {/* Button to create a new community */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                href="/r/create"
              >
                Create Community
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    //-----------
    // <>
    //   <h1 className="font-bold text-3xl md:text-4xl"> Your Feed</h1>
    //   <div className="grid grid-cols1 md grid cols-3 gap-y-4 md:gap-x-4 py-6">
    //     {/* @ts-expect-error server component*/}

    //     {session ? <CustomFeed /> : <GeneralFeed />}

    //     <div className="overflow-hidden h-fit rounded lg border border-gray-200 order-first md:order-last">
    //       <div className="bg-emerald-100 px-6 py-4">
    //         <p className="font-semibold py-3 flex items-center gap-1.5">
    //           <HomeIcon className="w-4 h-4">Home</HomeIcon>
    //         </p>
    //       </div>
    //       <div className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
    //         <div className="flex justify-between gap-x-4 py-3">
    //           <p className="text-zinc-500">
    //             Your personal favourite Breddit homepage. Come here to check
    //             with your favorite communities.
    //           </p>
    //         </div>
    //         <Link
    //           className={buttonVariants({
    //             className: "w-full mt-4 mb-6",
    //           })}
    //           href="/r/create"
    //         >
    //           Create Community
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
