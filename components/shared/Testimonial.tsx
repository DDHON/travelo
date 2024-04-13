import React from "react";
import TestimonialCard from "../card/TestimonialCard";
import Image from "next/image";

const Testimonial = () => {
  return (
    <>
      <div className="mb-[30px] flex w-full flex-col items-center justify-center">
        <div className="">
          <h3 className="text-center text-[24px] font-bold tracking-[0.30em] text-primary-100 ">
            Testimonials
          </h3>
          <h1 className="h2-bold text-dark100_light text-center ">
            Trust our clients
          </h1>
        </div>
      </div>
      <div>
        <div className="relative mb-[40px] ml-[-40px] flex w-full max-sm:hidden ">
          <Image
            src="/assets/images/background3.png"
            alt="background testimonials"
            width={162}
            height={152}
            className="absolute "
          />
        </div>
        <TestimonialCard
          img="/assets/images/avatar.png"
          name="Irfan Rahmat"
          proffesion="Travel Enthusiast"
          rating={4}
          message="I love Travelo, this is the best place to buy ticket and help you find your dream holiday."
        />
      </div>
    </>
  );
};

export default Testimonial;
