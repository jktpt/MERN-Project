import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";

const About = () => {
  const HomePage = () => {
    window.location = "/"
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">CE322 PROJECT</Typography>
           
            <span>
             โปรเจ็ค MERN เป็นโปรเจ็คการทำ OOP ด้วยการนำมาทำเว็บไซต์ผ่านเฟรมเวิร์คต่างๆโดยมีชื่อเต็มดังนี้
            </span>
            <span>M = MongoDB</span>
            <span>E = ExpressJS</span>
            <span>R = ReactJS</span>
            <span>N = NodeJS</span>
            <Button onClick={HomePage} color="primary">
              Get back to Home Page
            </Button>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Present To</Typography>
            <span>AJ. Thidarat Thawesook</span>
            <span>AJ. Todsapon Banklongsi</span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
