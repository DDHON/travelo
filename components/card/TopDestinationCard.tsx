import Image from "next/image";
import React from "react";

interface Props {
  tag: string;
  img: string;
  title: string;
  price: string;
  rating: string;
}
const TopDestinationCard = ({ tag, img, title, price, rating }: Props) => {
  return (
    <div className="background-light-dark400 flex flex-col  items-start justify-center rounded-[30px] shadow-card-white dark:shadow-card-dark ">
      <div className="relative ">
        <p className="absolute z-50 w-[145px] rounded-br-[30px] rounded-tl-[30px] bg-primary-100 p-3 px-[30px] text-center text-[18px] font-medium text-white">
          {tag}
        </p>

        <Image
          src={img}
          alt={title}
          width={350}
          height={330}
          className="rounded-t-[30px] object-cover"
        />
      </div>
      <div className="flex flex-col px-[30px]">
        <p className="text-dark100_light mt-[30px] max-w-[195px] text-wrap text-start text-[24px] font-bold">
          {title}
        </p>
        <p className="my-[20px] max-w-[195px] text-wrap text-start text-[24px] font-bold text-primary-500">
          ${price}
        </p>
        <p className="my-[20px] flex max-w-[195px] gap-2 text-wrap text-start text-[24px] font-bold text-[#FACD49]">
          {rating}
          <Image
            src="/assets/icons/star.svg"
            alt="star"
            width={20}
            height={20}
          />
        </p>
      </div>
    </div>
  );
};

export default TopDestinationCard;
