"use client";
import { ActionsContext } from "@/context/ActionsContext";
import { useContext, useLayoutEffect, useState } from "react";
import { socialMediaLinks } from "@/resources/data";
import Link from "next/link";
import StarsCanvas from "./StarsCanvas";
import { AboutDescription } from "./AboutDescription";

export const HomeSection = () => {
  const { sectionRefs, onStars, lang } = useContext(ActionsContext);
  const [startTyping, setStartTyping] = useState(false);

  useLayoutEffect(() => {
    setTimeout(() => {
      setStartTyping(true);
    }, 1000);
  }, []);

  return (
    <section
      className="home home_content w-screen h-auto flex items-center justify-center flex-col"
      ref={sectionRefs[0]}
      id={"home"}
    >
      <div className="w-screen h-screen max-w-[1440px] px-[20px] md:px-[80px] lg:px-[120px] flex flex-col justify-center">
        <span className="span text-[14pt] font-thin text-white text-justify">
          Hey, I`m
        </span>
        <h1 className="name flex text-[30pt] lg:text-[50pt] font-black  my-5 leading-10 lg:leading-20">
          Matheus Rodrigues
        </h1>
        <div className="text-[16pt] font-thin text-justify text-white mb-8">
          {startTyping && (
           <AboutDescription lang={lang} />

          )}
        </div>
        <div className="flex gap-4">
          {socialMediaLinks.map((socialMediaLink, idx) => {
            const Icon = socialMediaLink.icon;
            return (
              <Link
                key={idx}
                href={socialMediaLink.href}
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 text-white rounded-full border-2 border-solid flex items-center justify-center hover:bg-(--color-default) cursor-pointer duration-300 ease-in-out"
                style={{ borderColor: "var(--color-default)" }}
              >
                <Icon className="text-xl" />
              </Link>
            );
          })}
        </div>
      </div>
      {onStars ? <StarsCanvas /> : ""}
    </section>
  );
};
