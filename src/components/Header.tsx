import { Menu } from "./Menu";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-center  bg-black dark:bg-elevated dark:text-white fixed z-1000">
      <div className="w-full uppercase max-w-[1440px] flex items-center justify-between px-[20px] md:px-[80px] lg:px-[120px]">
        <Link href={'https://landing-page-opal-one-94.vercel.app/'} className="flex items-center w-12 h-12 animate__animated animate__backInDown">
         <span className="logo">MR.</span>
        </Link>
        <div className="lg:w-[592px] h-full flex md:w-[480px] items-center justify-end ">
          <Menu />
        </div>
      </div>
    </header>
  );
};
