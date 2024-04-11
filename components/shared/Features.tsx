import { Feature } from "@/constant";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="my-[100px] ">
      <div className="flex w-full justify-end max-sm:justify-start">
        <Image
          src="/assets/images/background2.png"
          alt="traveler"
          height={272}
          width={356}
          className=" absolute z-50  object-contain max-md:mr-[50px] max-md:mt-[50px] max-sm:left-[-130px] max-sm:mt-[150px] lg:mt-0"
        />
      </div>
      <div className="flex flex-col-reverse items-center justify-center gap-[80px] md:flex-row lg:items-center lg:justify-between  lg:gap-0 ">
        <div className="w-full flex-col items-center justify-center sm:items-start lg:max-w-[475px]">
          <div className="">
            <h3 className="text-center text-[24px] font-bold tracking-[0.30em] text-primary-100 md:text-left">
              KEY FEATURES
            </h3>
            <h1 className="h2-bold text-dark100_light text-center md:text-left ">
              We offer best services
            </h1>
            <p className="mb-[55px] mt-[30px] text-center text-[18px] font-medium text-secondary md:text-left">
              Hay! Travelo there to help you find your dream holiday. Easy you
              just find where you want to go and buy the ticket.
            </p>
          </div>
          <div className="flex  flex-col items-center justify-center lg:items-start lg:justify-start ">
            {Feature.map((item) => (
              <div
                className="flex max-w-[475px] flex-row rounded-[30px] py-[30px] pl-[30px] pr-0 hover:shadow-card-white dark:hover:shadow-card-dark md:pr-7"
                key={item.title}
              >
                <div
                  className={`mr-[30px] flex size-[100px] items-center justify-center rounded-[30px]`}
                  style={{ backgroundColor: item.bg }}
                >
                  <Image src={item.img} alt="feature" width={43} height={43} />
                </div>
                <div className=" flex  flex-col items-start justify-center">
                  <h2 className="text-dark100_light text-wrap text-start text-[24px] font-bold">
                    {item.title}
                  </h2>
                  <p className="text-wrap text-start text-[18px] font-medium text-secondary">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex">
          <Image
            src="/assets/images/servicesImage.png"
            alt="traveler"
            height={663}
            width={475}
            className=" z-50 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
