import { Box, extendTheme } from "@chakra-ui/react";
import React, { useState, WheelEvent, useEffect } from "react";
import { NextPage } from "next";

import AboutMePage from "../components/pages/AboutPage";
import Header from "../components/globals/Header";
import HomePage from "../components/pages/HomePage";
import ProjectsPage from "../components/pages/ProjectsPage";
import ResumePage from "../components/pages/ResumePage";
import ContactPage from "../components/pages/ContactPage";

const Home: NextPage = () => {
  return (
    <Box bgColor="brand.white">
      <Header />
      <Box className="section-container" >
        <HomePage />
      </Box>
      <Box className="section-container">
        <AboutMePage />
      </Box>
      <Box className="section-container">
        <ResumePage />
      </Box>
      <Box className="section-container">
        <ProjectsPage />
      </Box>
      <Box className="section-container">
        <ContactPage />
      </Box>
    </Box>
  );
};

export default Home;
