import React from "react";
import Community from "../../Components/Home/Community";
import FbPlus from "../../Components/Home/FbPlus";
import Features from "../../Components/Home/Features";
import FeelFree from "../../Components/Home/FeelFree";
import NotSure from "../../Components/Home/NotSure";

const Home = () => {
  return (
    <div>
      <FeelFree />
      <FbPlus />
      <Features />
      <Community />
      <NotSure />
      
    </div>
  );
};

export default Home;
