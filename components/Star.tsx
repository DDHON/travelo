import Image from "next/image";
import React from "react";
interface Props {
  rating: number;
}
const Star = ({ rating }: Props) => {
  const sanitizedRating = Math.max(0, Math.min(rating, 5));

  // Membuat array berisi 5 bintang
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < sanitizedRating) {
      return (
        <Image
          key={index}
          src="/assets/icons/fillStar.svg"
          width={20}
          height={20}
          alt="Filled star"
        />
      );
    } else {
      return (
        <Image
          key={index}
          src="/assets/icons/emptyStar.svg"
          width={20}
          height={20}
          alt="Empty star"
        />
      );
    }
  });

  return <div className="flex flex-row gap-[20px]">{stars}</div>;
};

export default Star;
