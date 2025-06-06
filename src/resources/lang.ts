import LangEnum from "@/enum/lang-enum";
import enUS from "./i18n/enUS";
import esES from "./i18n/esES";
import ptBr from "./i18n/ptBR";

export interface LabelLang {
  value: string;
  label: string;
}

export interface Translations {
  menu: {
    home: string;
    skills: string;
    works: string;
    contact: string;
  };
  about: {
    description: string;
  };
}

export const labelLangs: LabelLang[] = [
  { value: "en-US", label: "EN" },
  { value: "es-ES", label: "ES" },
  { value: "pt-BR", label: "PT" },
];

const languages: Record<LangEnum, Translations> = {
  [LangEnum.EN_US]: enUS,
  [LangEnum.ES_ES]: esES,
  [LangEnum.PT_BR]: ptBr,
};

export type MenuKey = keyof Translations["menu"];

export const defineLanguage = (lang: LangEnum, labelKey: MenuKey): string => {
  return languages[lang].menu[labelKey];
};

export const getTranslation = (lang: LangEnum): Translations => {
  return languages[lang];
};
