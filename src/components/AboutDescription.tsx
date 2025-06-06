/* eslint-disable react-hooks/exhaustive-deps */
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";

import LangEnum from "@/enum/lang-enum";
import { getTranslation } from "@/resources/lang";

export const AboutDescription = ({ lang }: { lang: LangEnum }) => {
  const [hasTyped, setHasTyped] = useState(false);
  const [showText, setShowText] = useState("");
 const translation = getTranslation(lang);
  // Executa efeito de digitação apenas uma vez
  useEffect(() => {
    if (hasTyped) {
      setShowText(translation.about.description);
    }
  }, [hasTyped, lang]);

  return (
    <div className="text-[16pt] font-thin text-justify text-white mb-8">
      {!hasTyped ? (
        <Typewriter
          words={[translation.about.description]}
          loop={1}
          cursor
          typeSpeed={25}
          delaySpeed={1000}
          onLoopDone={() => {
            setHasTyped(true);
            setShowText(translation.about.description);
          }}
        />
      ) : (
        <>{showText}</>
      )}
    </div>
  );
};
