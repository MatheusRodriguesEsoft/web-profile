import LangEnum from "@/enum/lang-enum";
import { getTranslation } from "@/resources/lang";
import { Work } from "@/resources/works";
import Image from "next/image";
import Link from "next/link";

interface CardWorkProps {
  work: Work;
  lang: LangEnum;
}

export const CardWork = ({ work, lang }: CardWorkProps) => {
  const translation = getTranslation(lang);
  return (
    <div className="bg-neutral-950/60 w-full max-w-[400px] h-auto rounded overflow-hidden shadow-md transition-transform hover:scale-102 duration-300 ease-in-out">
      <div className="relative h-48 w-full rounded-t-sm">
        <Image
          src={work.img}
          alt={work.name}
          fill
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg text-white font-bold mb-2">{work.name}</h3>
        <div className="flex gap-4 mb-3">
          <Link
            aria-disabled
            href={work.page}
            className="bg-(--color-default) hover:bg-(--color-default-hover) text-white px-3 py-1 rounded text-sm duration-300 ease-in-out"
            target="_blank"
          >
            {translation.workCard.seeProject}
          </Link>
          <Link
            href={work.repo}
            className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-1 rounded text-sm duration-300 ease-in-out"
            target="_blank"
          >
            {translation.workCard.repository}
          </Link>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-300 mb-2">
            {translation.workCard.skills}:
          </p>
          <ul className="flex flex-wrap gap-2">
            {work.skills.map((skill) => (
              <li key={skill.id} className="group">
                {skill.Icon &&
                  skill.Icon(
                    "w-6 h-6 sm:w-7 sm:h-7 fill-white group-hover:fill-[#5c10f4]"
                  )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
