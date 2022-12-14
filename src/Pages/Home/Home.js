import React from "react";
import Community from "../../Components/Home/Community";
import FbPlus from "../../Components/Home/FbPlus";
import Features from "../../Components/Home/Features";
import FeelFree from "../../Components/Home/FeelFree";
import NotSure from "../../Components/Home/NotSure";
import Footer from "../../Components/Home/Footer";

const Home = () => {
  return (
    <div>
      <FeelFree />
      <FbPlus />
      <Features />
      <Community />
      <NotSure />
      <Footer />
    </div>
  );
};

export default Home;
