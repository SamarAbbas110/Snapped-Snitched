import React from "react";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import BestSeller from "../components/BestSeller";
import PolicyComponent from "../components/PolicyComponent";
import Newsletter from "../components/Newsletter";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSeller />
      <PolicyComponent />
      <Newsletter />
    </div>
  );
};

export default HomePage;
