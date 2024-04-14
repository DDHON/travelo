"use client";
import React from "react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

const Subscribe = () => {
  return (
    <section className="mt-[100px]">
      <div className="flex justify-center rounded-[30px] bg-[#F4F4F4] px-[30px] py-[82px] dark:bg-dark-400 sm:px-[168px] sm:py-[140px] ">
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <h3 className="text-center text-[18px] font-bold tracking-[0.30em] text-primary-100 sm:text-[24px] ">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <h1 className="sm:h2-bold text-dark100_light text-wrap text-center text-[24px] font-bold sm:text-[44px]">
              Prepare yourself and let’s explore the beautiful of the world
            </h1>
          </div>
          <div className="relative mt-[70px] w-full  max-w-[920px] ">
            <div className="background-light-dark300 relative flex h-[100px] w-full  items-center rounded-[30px] px-[30px] py-[10px] ">
              <Image
                src="/assets/icons/email.svg"
                height={26}
                width={30}
                alt="email"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="background-light-dark300 no-focus w-full grow border-none text-[24px] font-medium text-secondary"
              />
              <Button
                type="submit"
                className="hidden h-[80px] rounded-[20px] bg-primary-500 px-[36px] py-[25px] text-[18px] font-bold text-white sm:block"
              >
                Subscribe
              </Button>
            </div>
            <Button
              type="submit"
              className="mt-[20px] block h-[80px] w-full items-center justify-center rounded-[20px] bg-primary-500 px-[36px] py-[25px] text-[18px] font-bold text-white sm:hidden"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
