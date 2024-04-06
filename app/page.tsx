import HeroSection from "@/components/shared/HeroSection";
import Navbar from "@/components/shared/Navbar";
import Sponsor from "@/components/shared/Sponsor";

import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Sponsor />
    </>
  );
};

export default page;
