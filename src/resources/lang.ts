import LangEnum from "@/enum/lang-enum";
import enUS from "./i18n/enUS";
import esES from "./i18n/esES";
import ptBr from "./i18n/ptBR";

export interface LabelLang {
  value: string;
  label: string;
}

export interface Translations {
  menu: { home: string; skills: string; works: string; contact: string };
  about: { greeting: string; description: string };
  workCard: { seeProject: string; repository: string; skills: string };
  contacts: {
    title: string;
    subtitle: string;
    whatsapp: string;
    email: string;
    github: string;
    linkedin: string;
    form: {
      title: string;
      name: string;
      email: string;
      message: string;
      placeholderName: string;
      placeholderEmail: string;
      placeholderMessage: string;
      send: string;
      sending: string;
    };
    footer: string;
    success: string;
    error: string;
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
