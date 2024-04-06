import { Sponsorship, SponsorshipDark } from "@/constant";
import Image from "next/image";
import React from "react";

const Sponsor = () => {
  return (
    <section className="my-[100px]">
      <div className="flex flex-wrap items-center justify-center gap-[30px] sm:gap-[80px]">
        {Sponsorship.map((item) => (
          <Image
            key={item.img}
            src={item.img}
            alt={item.img}
            width={180}
            height={32}
            className="h-[20px] max-w-[140px]  object-contain dark:hidden sm:h-[32px] sm:max-w-[211px]"
          />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[30px] sm:gap-[80px]">
        {SponsorshipDark.map((item) => (
          <Image
            key={item.img}
            src={item.img}
            alt={item.img}
            width={180}
            height={32}
            className="hidden h-[20px] max-w-[140px] object-contain dark:block  sm:h-[32px] sm:max-w-[211px]"
          />
        ))}
      </div>
      <div className="absolute right-[-269px] top-[1000px] z-0 size-[500px] rounded-full bg-[#9747FF] blur-[500px] sm:top-[700px]" />
    </section>
  );
};

export default Sponsor;
