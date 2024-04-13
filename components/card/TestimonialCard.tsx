import Image from "next/image";
import React from "react";
import Star from "../Star";

interface Props {
  img: string;
  name: string;
  proffesion: string;
  rating: number;
  message: string;
}
const TestimonialCard = ({ img, name, proffesion, rating, message }: Props) => {
  return (
    <div className="background-light-dark300 flex w-full  items-center justify-center rounded-[30px] py-[50px] shadow-card-white dark:shadow-card-dark ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex size-[100px] items-center justify-center rounded-full bg-[#DAD0FB] ">
          <Image src={img} height={80} width={80} alt="avatar image" />
        </div>
        <h3 className="h3-bold mt-[50px]">{name}</h3>
        <p className="mt-[10px] text-[18px] font-medium text-secondary">
          {proffesion}
        </p>
        <div className="mt-[20px]">
          <Star rating={rating} />
        </div>
        <p className="mt-[20px] max-w-[325px] text-wrap text-center text-[18px] font-medium leading-[30px] text-secondary sm:max-w-[656px] sm:text-[24px]">
          {message}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
