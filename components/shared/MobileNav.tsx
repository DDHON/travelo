import { navbar } from "@/constant";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

const NavContent = () => (
  <div className="flex  items-center justify-center gap-[70px] max-md:hidden ">
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
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="menu"
          className="sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light-dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/navBrand.png"
            width={23}
            height={23}
            alt="navbrand"
          />
          <p className="h2-bold  text-dark100_light font-Plus_Jakarta_Sans">
            Travelo
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href="/sign-in">
                <Button className="text-dark100_light rounded-2xl bg-transparent px-[41px] py-[16px] font-semibold hover:bg-primary-500 hover:text-light-900">
                  <Link href="">Login</Link>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Button className="text-dark100_light rounded-2xl bg-transparent px-[41px] py-[16px] font-semibold hover:bg-primary-500 hover:text-light-900">
                <Link href="">Login</Link>
              </Button>
              <Button className="rounded-2xl bg-primary-500 px-[41px]  py-[16px] font-semibold text-light-900 hover:bg-primary-100">
                <Link href="">Sign Up</Link>
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
