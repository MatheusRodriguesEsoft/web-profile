import LangEnum from "@/enum/lang-enum";
import enUS from "./i18n/enUS";
import esES from "./i18n/esES";
import ptBr from "./i18n/ptBR";

export interface LabelLang {
  value: string;
  label: string;
}

export const labelLangs: LabelLang[] = [
  { value: "en-US", label: "EN" },
  { value: "es-ES", label: "ES" },
  { value: "pt-BR", label: "PT" },
];

const languages = {
  [LangEnum.EN_US]: enUS.menu,
  [LangEnum.ES_ES]: esES.menu,
  [LangEnum.PT_BR]: ptBr.menu,
};

export const defineLanguage = (lang: LangEnum, labelKey: string): string => {
  const translation = languages[lang][labelKey as keyof typeof enUS.menu];
  return translation || labelKey;
};
