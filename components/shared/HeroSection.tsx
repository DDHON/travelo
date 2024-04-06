import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative mt-[140px] w-full">
      <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
        <div className="flex max-w-[530px] flex-col items-center text-center md:items-start md:text-start">
          <div className="my-10 flex max-w-[220px] flex-row gap-3 rounded-[30px] bg-white px-6 py-4  shadow-white-shadow md:my-0">
            <p className="text-[14px] font-semibold text-primary-100 ">
              Explore the world!
            </p>
            <Image
              src="/assets/icons/compas.svg"
              width={20}
              height={20}
              alt="compas"
              className="object-cover"
            />
          </div>
          <h1 className="sm:h1-bold h2-bold text-wrap text-center md:text-start ">
            From Southeast Asia{" "}
            <span className="text-primary-100">to the World</span>
          </h1>
          <p className="text-wrap text-[18px] text-secondary">
            Stay updated with travel tips, recommendations, and latest promos.
          </p>
          <div className="flex flex-row gap-5">
            <Link href="/" className="mt-[36px]">
              <Button className=" max-h-[50px] w-[145px] rounded-[30px] bg-primary-500 px-[32px] py-[16px] font-bold text-white shadow-white-shadow sm:w-full ">
                Get Started
              </Button>
            </Link>
            <Link href="/" className="mt-[36px]">
              <Button className="text-dark100_light max-h-[50px] w-[145px] gap-[10px] rounded-[30px] border border-primary-500 bg-transparent px-[32px] py-[16px] font-bold sm:w-full">
                Watch Demo
                <Image
                  src="/assets/icons/demo.svg"
                  width={20}
                  height={20}
                  alt="demo"
                />
              </Button>
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src="/assets/images/heroSection2x.png"
            alt="banner"
            width={719}
            height={672}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
