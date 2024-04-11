import React from "react";

import { Destination } from "@/constant";
import Image from "next/image";
const TopDestination = () => {
  return (
    <section className="">
      <div className="flex w-full flex-col items-center justify-center sm:items-start ">
        <div className="">
          <h3 className="text-center text-[24px] font-bold tracking-[0.30em] text-primary-100 md:text-left">
            Services
          </h3>
          <h1 className="h2-bold text-dark100_light text-center md:text-left ">
            Why book using Travelo
          </h1>
        </div>
      </div>
      <div className="mt-[100px] flex w-full flex-col items-start justify-center gap-[30px] sm:flex-row">
        {Destination.map((item) => (
          <div
            className="flex flex-col items-start  justify-center rounded-t-[30px] bg-transparent shadow-card-white dark:shadow-card-dark "
            key={item.tag}
          >
            <div className="relative">
              <p className="absolute z-50 w-[145px] rounded-br-[30px] rounded-tl-[30px] bg-primary-100 p-3 px-[30px] text-center text-[18px] font-medium text-white">
                {item.tag}
              </p>
              <Image
                src={item.img}
                width={350}
                height={330}
                alt={item.title}
                className="relative size-full items-center justify-center rounded-t-[30px] object-cover"
              />
            </div>
            <div className="flex flex-col px-[30px]">
              <p className="text-dark100_light mt-[30px] max-w-[195px] text-wrap text-start text-[24px] font-bold">
                {item.title}
              </p>
              <p className="my-[20px] max-w-[195px] text-wrap text-start text-[24px] font-bold text-primary-500">
                ${item.price}
              </p>
              <p className="my-[20px] flex max-w-[195px] gap-2 text-wrap text-start text-[24px] font-bold text-[#FACD49]">
                {item.star}
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDestination;
