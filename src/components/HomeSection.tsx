"use client";
import { ActionsContext } from "@/context/ActionsContext";
import { Typewriter } from "react-simple-typewriter";
import { useContext, useLayoutEffect, useState } from "react";
import { socialMediaLinks } from "@/resources/data";
import Link from "next/link";
import StarsCanvas from "./StarsCanvas";

export const HomeSection = () => {
  const { sectionRefs, onStars } = useContext(ActionsContext);
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
        <span className="span text-[14pt] font-thin text-justify">
          Hey, I`m
        </span>
        <h1 className="name flex text-[30pt] lg:text-[50pt] font-black z-2  my-5 leading-10 lg:leading-20">
          Matheus Rodrigues
        </h1>
        <div className="text-[16pt] font-thin text-justify mb-8">
          {startTyping && (
            <Typewriter
              words={[
                "I'm a software engineer based in Formosa, Brazil, I enjoy creating things that live on the internet, whether that's websites, apps or anything in between. I've been freelancing for four years while studying at university and have managed to gain a fair amount of experience and valuable knowledge from all sorts of fields throughout my projects/work.",
              ]}
              loop={false}
              cursor
              typeSpeed={25}
              deleteSpeed={999999}
              delaySpeed={1000}
            />
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
                className="w-14 h-14 rounded-full border-2 border-solid flex items-center justify-center hover:bg-(--color-default) duration-300 ease-in-out"
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
