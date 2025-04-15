"use client";
import CloseIcon from "@/../public/icons/close.svg";
import MenuIcon from "@/../public/icons/menu.svg";
import { useContext, useEffect, useRef, useState } from "react";

// import { useTheme } from "next-themes";
import { ActionsContext } from "@/context/ActionsContext";
import { Link } from "react-scroll";
import Image from "next/image";
import { menuLinks } from "@/resources/menu";

export const Menu = () => {
  const { visibleSectionIndex } = useContext(ActionsContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const menuRef = useRef<HTMLDivElement>(null);
  // const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => setActiveItem(visibleSectionIndex), 600);
  }, [visibleSectionIndex]);

  useEffect(() => {
    setActiveItem(visibleSectionIndex);
    const handleResize = () => {
      setActiveItem(visibleSectionIndex);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [visibleSectionIndex]);

  const setActiveItem = (index: number) => {
    const ul = menuRef.current?.querySelector("ul");
    if (!ul) return;
  
    const menuItems = ul.querySelectorAll("li");
    if (!menuItems[index]) return;
  
    const menuItem = menuItems[index];
    const { left, width } = menuItem.getBoundingClientRect();
    const parentLeft = ul.getBoundingClientRect().left;
  
    setUnderlineStyle({ left: left - parentLeft, width });
  };
  

  const updateUnderline = (index: number) => {
    setActiveItem(index);
  };

  const onMouseOut = () => {
    setActiveItem(visibleSectionIndex);
  };

  return (
    <nav className="menu w-full" ref={menuRef}>
      <button
        className="h-[30.5px] md:hidden"
        type="button"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <Image
          src={openMenu ? CloseIcon : MenuIcon}
          alt="menu"
          width={30}
          height={30}
        />
      </button>
      <ul
        className={` bg-black dark:bg-elevated transition-all absolute w-full flex flex-col items-center left-0  
        ${
          openMenu
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        } 
        md:relative md:visible md:opacity-100 md:flex-row md:translate-0 md:w-full md:justify-between md:transition-none`}
      >
        {menuLinks.map(({ id, to, label }) => (
          <li
            key={id}
            className="w-full text-white px-5 py-3 md:px-0 md:py-0 md:w-auto animate__animated animate__backInDown"
          >
            <Link
              to={to}
              spy={true}
              smooth={true}
              duration={100}
              className="cursor-pointer"
              onMouseEnter={() => updateUnderline(id)}
              onMouseOut={onMouseOut}
            >
              {label}
            </Link>
          </li>
        ))}
        <div
          className={"animation hidden md:block"}
          style={underlineStyle}
        ></div>
      </ul>
    </nav>
  );
};
