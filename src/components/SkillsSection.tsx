"use client";
import { ActionsContext } from "@/context/ActionsContext";
import { iconsSkills } from "@/resources/icons-skill";
import { useContext } from "react";
import Link from "next/link";

export const SkillsSection = () => {
  const { sectionRefs } = useContext(ActionsContext);

  return (
    <section
      className="section skills skills_content h-auto sm:h-screen"
      ref={sectionRefs[1]}
      id={"skills"}  
    >
      <div className="w-screen sm:h-screen max-w-[1440px] px-[20px] md:px-[80px] lg:px-[120px] flex items-center justify-center flex-col ">
        <div className="w-full my-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4 sm:gap-6 md:gap-8">
            {iconsSkills.map((icon) => (
              <Link
                className="group"
                key={icon.id}
                href={icon.url as string}
                target="_blank"
              >
                <div className="py-2 flex flex-col items-center justify-center text-center skill_item transition-all duration-500 hover:scale-105">
                  {icon.Icon &&
                    icon.Icon(
                      "w-10 sm:w-12 md:w-14 lg:w-16 fill-white group-hover:fill-[#5c10f4]"
                    )}
                  <span className="transition-all duration-500 text-sm sm:text-base text-white group-hover:text-[#5c10f4]">
                    {icon.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
