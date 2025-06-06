"use client";
import LangEnum from "@/enum/lang-enum";
import {
  createContext,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

interface ActionsContextData {
  sectionRefs: RefObject<HTMLElement | null>[];
  onStars: boolean;
  lang: LangEnum;
  setLang: Dispatch<SetStateAction<LangEnum>>;
  setOnStars: Dispatch<SetStateAction<boolean>>;
  visibleSectionIndex: number;
  scrollY: number;
}

interface ActionsProviderProps {
  children: ReactNode;
}

export const ActionsContext = createContext({} as ActionsContextData);

export function ActionsProvider({ children }: ActionsProviderProps) {
  const [visibleSectionIndex, setVisibleSectionIndex] = useState(0);
  const [lang, setLang] = useState<LangEnum>(LangEnum.PT_BR);
  const [onStars, setOnStars] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const sections = ["home", "skills", "works", "contacts"];
  const sectionRefs = [
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const index = sections.indexOf(entry.target.id);
          if (index !== -1) {
            setVisibleSectionIndex(index);
          }
        }
      }
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ActionsContext.Provider
      value={{
        sectionRefs,
        lang,
        visibleSectionIndex,
        scrollY,
        onStars,
        setOnStars,
        setLang,
      }}
    >
      {children}
    </ActionsContext.Provider>
  );
}
