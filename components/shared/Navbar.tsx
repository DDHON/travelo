"use client";
import { navbar } from "@/constant";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import Themes from "./Themes";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
const NavContent = () => {
  return (
    <div className="flex flex-col gap-6 pt-16 ">
      {navbar.map((item) => (
        <SheetClose asChild key={item.route}>
          <Link
            key={item.label}
            href={item.route}
            className="  text-[14px] font-semibold hover:text-primary-500"
          >
            {item.label}
          </Link>
        </SheetClose>
      ))}
    </div>
  );
};
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="menu"
          className="order-2 sm:order-1 md:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light-dark200 border-none "
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/navBrand.png"
            width={23}
            height={23}
            alt="travelo"
          />
          <p className="text-dark100_light text-[24px] font-bold">Travelo</p>
        </Link>
        <div className="flex h-full flex-col justify-between">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href="">
                <Button className="text-dark100_light min-h-[41px] w-full rounded-2xl bg-transparent text-center font-semibold hover:bg-primary-500  hover:text-light-900">
                  Login
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="">
                <Button className="min-h-[41px] w-full  rounded-2xl bg-primary-500 text-center font-semibold text-light-900 hover:bg-primary-100">
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="relative z-50 flex w-full flex-row items-center justify-between  py-[40px]">
        <div className="order-1 flex items-center gap-[14px] sm:order-2">
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
        {/* <MobileNav /> */}

        <div className="order-2  flex gap-[70px] max-md:hidden ">
          {navbar.map((item) => (
            <Link
              key={item.label}
              href={item.route}
              className="  text-[14px] font-semibold hover:text-primary-500"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="absolute left-[-250px] top-[-356px] z-0 size-[500px] rounded-full bg-[#ff26dc] blur-[500px]" />
        <div className="order-3 flex flex-row justify-end gap-[10px] max-sm:hidden">
          <Themes />
          <Link href="">
            <Button className="text-dark100_light rounded-[30px] bg-transparent px-[34px] py-[16px] font-semibold hover:bg-primary-500 hover:text-light-900">
              Login
            </Button>
          </Link>
          <Link href="">
            <Button className="rounded-[30px] bg-primary-500 px-[34px]  py-[16px] font-semibold text-light-900 hover:bg-primary-100">
              Sign Up
            </Button>
          </Link>
        </div>
        <MobileNav />
      </nav>
    </>
  );
};

export default Navbar;
