import React from "react";
import web from "../src/images/h3.jpg";

import Common from "./Common";

export const Home = () => {
  return (
    <Common
      name="Grow your bussiness with"
      visit="/service"
      btname="Get started"
      imgsrc={web}
    />
  );
};
export default Home;
