import { StatsPoins } from "@/constant";
import Image from "next/image";
import React from "react";

const TravelPoint = () => {
  return (
    <section className="my-[100px] px-0 ">
      <div className="flex flex-col items-center justify-center gap-[80px] md:flex-row lg:items-center lg:justify-between  lg:gap-0 ">
        <div className="relative">
          <Image
            src="/assets/images/travelerDesktop.png"
            alt="traveler"
            height={722}
            width={720}
            className="relative z-50 hidden object-cover lg:block"
          />
          <Image
            src="/assets/images/travelerMobile.png"
            alt="traveler"
            height={722}
            width={720}
            className="relative z-50 hidden object-cover max-md:block"
          />
        </div>
        <div className="w-full flex-col items-center justify-center sm:items-start lg:max-w-[475px]">
          <div className="">
            <h3 className="text-center text-[24px] font-bold tracking-[0.30em] text-primary-100 md:text-left">
              Travel Point
            </h3>
            <h1 className="h2-bold text-dark100_light text-center md:text-left ">
              We help you find your dream destination
            </h1>
            <p className="mb-[55px] mt-[30px] text-center text-[18px] font-medium text-secondary md:text-left">
              Hay! Travelo there to help you find your dream holiday. Easy you
              just find where you want to go and buy the ticket.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-[35px]   max-sm:grid-cols-2 lg:grid-cols-2">
            {StatsPoins.map((item) => (
              <div
                className="rounded-[30px] border border-secondary/20  py-[35px] "
                key={item.title}
              >
                <h2 className="mb-[20px] text-center text-[36px] font-bold text-primary-500">
                  {item.count}
                </h2>
                <p className="text-center text-[18px] font-medium text-secondary">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelPoint;
