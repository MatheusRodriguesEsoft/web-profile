/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import CloseIcon from "@/../public/icons/close.svg";
import MenuIcon from "@/../public/icons/menu.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { ActionsContext } from "@/context/ActionsContext";
import { Link } from "react-scroll";
import Image from "next/image";
import { menuLinks } from "@/resources/menu";
import LangEnum from "@/enum/lang-enum";
import { defineLanguage, labelLangs } from "@/resources/lang";

export const Menu = () => {
  const { visibleSectionIndex, onStars, lang, setOnStars, setLang } =
    useContext(ActionsContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const menuRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setActiveItem(visibleSectionIndex);
  }, [lang]);

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

  const getLabelByValue = (value: string) => {
    const foundLabel = labelLangs.find((lang) => lang.value === value);
    return foundLabel ? foundLabel.label : "N/A";
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
        className={`bg-black md:bg-transparent transition-all absolute w-full flex flex-col items-center left-0  
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
              {defineLanguage(lang, label)}

            </Link>
          </li>
        ))}

        <div
          onMouseEnter={() => setShowButtons(true)}
          className="absolute md:relative right-30 top-[-30] md:top-0 md:right-1 flex items-center justify-center animate__animated animate__backInDown"
          onClick={() => setShowButtons(!showButtons)}
        >
          <div>
            <span className="hover: cursor-pointer">
              {getLabelByValue(lang)}
            </span>
          </div>
          {showButtons && (
            <div
              className="absolute w-16 h-20 flex flex-col top-8 duration-300 ease-in-out"
              onMouseOver={() => setShowButtons(true)}
              onMouseOut={() => setShowButtons(false)}
            >
              <button
                className={`font-thin mb-[.8rem] hover:cursor-pointer hover:text-(--clr-default) ${
                  lang === LangEnum.EN_US ? "hidden" : ""
                }`}
                onClick={() => setLang(LangEnum.EN_US)}
              >
                {getLabelByValue(LangEnum.EN_US)}
              </button>
              <button
                className={`font-thin mb-[.8rem] hover:cursor-pointer  hover:text-(--clr-default) ${
                  lang === LangEnum.ES_ES ? "hidden" : ""
                }`}
                onClick={() => setLang(LangEnum.ES_ES)}
              >
                {getLabelByValue(LangEnum.ES_ES)}
              </button>
              <button
                className={`font-thin mb-[.8rem] hover:cursor-pointer  hover:text-(--clr-default) ${
                  lang === LangEnum.PT_BR ? "hidden" : ""
                }`}
                onClick={() => setLang(LangEnum.PT_BR)}
              >
                {getLabelByValue(LangEnum.PT_BR)}
              </button>
            </div>
          )}
        </div>
        <div
          className={
            "animation hidden md:block animate__animated animate__backInDown"
          }
          style={underlineStyle}
        ></div>
        <button
          className="absolute right-15 top-[-38] md:relative md:top-0 md:right-1 w-8 h-8 transition-all duration-500 hover:scale-105 cursor-pointer animate__animated animate__backInDown"
          onClick={() => setOnStars(!onStars)}
        >
          <img
            src={onStars ? "/icons/on-stars.svg" : "icons/off-stars.svg"}
            alt="stars"
          />
        </button>
      </ul>
    </nav>
  );
};
