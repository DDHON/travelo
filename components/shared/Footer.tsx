import { FooterLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-[160px]">
      <div className="flex w-full flex-col items-start justify-start md:flex-row md:justify-items-center">
        <div className="flex w-full flex-col ">
          <div className="flex items-center gap-[14px] ">
            <Image
              src="/assets/images/navBrand.png"
              width={40}
              height={40}
              alt="navbrand"
            />
            <p className="text-dark100_light text-[24px] font-bold leading-[30.24px] ">
              Travelo
            </p>
          </div>

          <p className="mb-[40px] mt-[60px] text-wrap text-left text-[24px] font-medium text-secondary lg:max-w-[368px]">
            Travelo is Southeast Asia’s travel and lifestyle app, we provide you
            with access to discover and purchase different type of travel needs.
          </p>
          <h3 className="text-dark100_light h3-bold">Download App</h3>
          <div className="mb-[60px] mt-[20px] flex gap-[15px]">
            <Image
              src="/assets/images/appstore.png"
              width={155}
              height={44}
              alt="appstore"
            />
            <Image
              src="/assets/images/gplay.png"
              width={155}
              height={44}
              alt="appstore"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-between gap-[70px] sm:flex-row">
          {FooterLinks.map((item, index) => (
            <div key={index}>
              <h3 className="h3-bold text-dark100_light mb-[60px]">
                {item.category}
              </h3>
              <ul>
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-[30px]">
                    <Link href="/">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
