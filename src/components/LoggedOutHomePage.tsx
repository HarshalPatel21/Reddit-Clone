"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Grid, Button } from "@mui/material";
// import ArrowButtons from "./ArrowButtons";
import backgroundImage1 from "./color-wheel-black-and-white.png";
import backgroundImage2 from "./person.png";

const LoggedOutHomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to BReddit",
      content:
        "A social platform where users can share content, vote, and comment.",
    },
    {
      title: "Features Overview",
      content:
        "Key features include user authentication, subreddits, voting system, and real-time comments.",
    },
    {
      title: "How It Works",
      content:
        "Users can create posts, comment on threads, and upvote/downvote content, with posts organized into different subreddits.",
    },
    {
      title: "Technology Stack",
      content:
        "This project is built with React for the frontend, Node.js with Express for the backend, and MongoDB for the database.",
    },
    {
      title: "Upcoming Features",
      content:
        "We're working on adding private messaging, notifications, and better moderation tools.",
    },
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  // Automatic slide transition
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" fontWeight="bold" align="center">
        Welcome to BReddit
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              textAlign: "center",
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="h5">{slides[currentSlide].title}</Typography>
            <Typography paragraph>{slides[currentSlide].content}</Typography>
          </Paper>

          {/* Slide Controls */}
          <Box display="flex" justifyContent="space-between" mt={2}>
            {/* <ArrowButtons prevSlide={prevSlide} nextSlide={nextSlide} /> */}
          </Box>
        </Grid>

        {/* Flex container for additional boxes */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                elevation={3}
                sx={{
                  backgroundImage: `url(${backgroundImage1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 250,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6">Build a Community</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper
                elevation={3}
                sx={{
                  backgroundImage: `url(${backgroundImage2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 250,
                  borderRadius: 2,
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Paper
                elevation={3}
                sx={{
                  backgroundImage:
                    "url(https://www.salesprogress.com/hs-fs/hub/53724/file-1853575215-jpg/images/employee_connection.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 250,
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoggedOutHomePage;
