import React from "react";
import Common from "./Common";
import web from "../src/images/h2.png";

const About = () => {
  return (
    <Common
      name="Welcome to about page"
      btname=" contact now"
      visit="/contact"
      imgsrc={web}
    />
  );
};
export default About;
