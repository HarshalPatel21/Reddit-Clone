
// components/LoggedInFeed.tsx
import CustomFeed from "@/components/CustomFeed";
import GeneralFeed from "@/components/GeneralFeed";
import { Button, Container, Grid, Paper, Typography, Box } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";
import Link from "next/link";

const LoggedInFeed = () => {
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
          <CustomFeed />
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3}>
            <Box sx={{ bgcolor: "emerald", paddingX: 3, paddingY: 2 }}>
              <Typography
                variant="h6"
                component="p"
                style={{ display: "flex", alignItems: "center" }}
              >
                <HomeIcon fontSize="small" /> Home
              </Typography>
            </Box>

            <Box sx={{ paddingX: 3, paddingY: 2 }}>
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
  );
};

export default LoggedInFeed;
