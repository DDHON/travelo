import React from "react";

import Image from "next/image";
import TestimonialCard from "../card/TestimonialCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
            className="absolute z-50"
          />
        </div>
        <Carousel className="rounded-[30px] shadow-card-white">
          <CarouselContent className="">
            <CarouselItem className="">
              <TestimonialCard
                img="/assets/images/avatar.png"
                name="Muhammad Ramadhoni"
                proffesion="Programmer"
                rating={5}
                message="I love Travelo, this is the best place to buy ticket and help you find your dream holiday."
              />
            </CarouselItem>
            <CarouselItem className="">
              <TestimonialCard
                img="/assets/images/avatar.png"
                name="Irfan Rahmat"
                proffesion="Web Designer"
                rating={4}
                message="I love Travelo, this is the best place to buy ticket and help you find your dream holiday."
              />
            </CarouselItem>
            <CarouselItem className="">
              <TestimonialCard
                img="/assets/images/avatar.png"
                name="Joe"
                proffesion="Travel Enthusiast"
                rating={4}
                message="I love Travelo, this is the best place to buy ticket and help you find your dream holiday."
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Testimonial;
