import HeroSection from "@/components/shared/HeroSection";
import Navbar from "@/components/shared/Navbar";
import Services from "@/components/shared/Services";
import Sponsor from "@/components/shared/Sponsor";
import TopDestination from "@/components/shared/TopDestination";

import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Sponsor />
      <Services />
      <TopDestination />
    </>
  );
};

export default page;
