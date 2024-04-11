import { ServicesCard } from "@/constant";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="relative">
      <h3 className="text-center text-[24px] font-bold tracking-[0.30em] text-primary-100 md:text-left">
        Services
      </h3>
      <h1 className="h2-bold text-dark100_light text-center md:text-left ">
        Why book using Travelo
      </h1>
      <div className="mb-[100px] mt-[70px] flex w-full flex-col items-center justify-center gap-[30px] sm:flex-row md:min-w-[280px] md:gap-[100px]">
        {ServicesCard.map((item) => (
          <div
            className="flex w-full flex-col  items-center justify-center rounded-[30px] bg-transparent px-[48px] py-[78px] hover:shadow-card-white dark:hover:shadow-card-dark "
            key={item.title}
          >
            <div className="flex size-[70px] items-center justify-center rounded-full bg-secondary">
              <Image
                src={item.img}
                width={45}
                height={70}
                alt={item.title}
                className="items-center justify-center object-contain"
              />
            </div>
            <p className="text-dark100_light mb-[30px] mt-[60px] text-center text-[28px] font-semibold">
              {item.title}
            </p>
            <p className="text-center text-[18px] font-medium text-secondary">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
