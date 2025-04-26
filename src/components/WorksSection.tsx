"use client";
import { ActionsContext } from "@/context/ActionsContext";
import { works } from "@/resources/works";
import { useContext } from "react";
import { CardWork } from "./CardWork";

export const WorksSection = () => {
  const { sectionRefs } = useContext(ActionsContext);
  return (
    <section
      className="works works_content w-full flex h-auto items-center justify-center py-16"
      ref={sectionRefs[2]}
      id={"works"}
    >
      <div className="w-full max-w-[1440px] px-[20px] md:px-[80px] lg:px-[120px] pt-16">
        <div className="w-full h-auto flex items-center justify-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {works.map((work) => (
              <CardWork key={work.id} work={work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};