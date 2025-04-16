"use client";
import { ActionsContext } from "@/context/ActionsContext";
import { Menu } from "./Menu";
import Link from "next/link";
import { useContext } from "react";

export const Header = () => {
  const { onStars } = useContext(ActionsContext);
  return (
    <header
      className={`${
        onStars ? "bg-black md:bg-transparent" : "bg-black"
      } w-full h-20 flex items-center justify-center  dark:bg-elevated dark:text-white fixed z-1000`}
    >
      <div className="w-full uppercase max-w-[1440px] flex items-center justify-between px-[20px] md:px-[80px] lg:px-[120px]">
        <Link
          href={"https://landing-page-opal-one-94.vercel.app/"}
          className="flex items-center w-12 h-12 animate__animated animate__backInDown"
        >
          <span className="logo">MR.</span>
        </Link>
        <div className="lg:w-[592px] h-full flex md:w-[480px] items-center justify-end ">
          <Menu />
        </div>
      </div>
    </header>
  );
};
