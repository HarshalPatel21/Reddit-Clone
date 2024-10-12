"use client";

import React, { useState, useEffect } from "react";
import "../styles/RedditCloneFile.css";
// import ArrowButtons from "./ArrowButtons";
import backgroundImage1 from "../res/color-wheel-black-and-white.png";
import backgroundImage2 from "../res/black-and-white-shaking-hands.png";

const LoggedOutHomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to BReddit ",
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

  // Automatic slide transition using useEffect and setInterval
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Switch slide every 5 seconds

    return () => {
      clearInterval(slideInterval); // Cleanup interval on component unmount
    };
  }, []);

  return (
    <div className="layout-container">
      <div className="slider-container">
        <div className="slide">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].content}</p>
        </div>
        <div className="slide-controls">
          {/* <ArrowButtons prevSlide={prevSlide} nextSlide={nextSlide} /> */}
        </div>
      </div>
      <div className="flex-container">
        <div
          className="flex-box"
          style={{
            backgroundImage: `url(${backgroundImage1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {" "}
          Build a Community
        </div>
        <div
          className="flex-box"
          style={{
            backgroundImage: `url(${backgroundImage2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="flex-box"
          style={{
            backgroundImage: `url('https://www.salesprogress.com/hs-fs/hub/53724/file-1853575215-jpg/images/employee_connection.jpg')`, // Background image here
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex-box"></div>
        <div className="flex-box"></div>
      </div>
    </div>
  );
};

export default LoggedOutHomePage;
