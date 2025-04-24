import React from "react";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import BestSeller from "../components/BestSeller";
import PolicyComponent from "../components/PolicyComponent";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSeller />
      <PolicyComponent />
    </div>
  );
};

export default HomePage;
