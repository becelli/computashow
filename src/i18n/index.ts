import { pt } from "~/i18n/pt";

export type SupportedLanguages = "pt" | "en" | "es";

export type Translation = {
  gameName: string;
  home: {
    welcomeMessage: string;
    projectDevelopedBy: string;
    startButton: string;
    forTheDisciplineOfFPGA: string;
  };
  game: {
    loading: string;
  };
};

export const translations: Record<SupportedLanguages, Translation> = {
  pt,
  en: pt,
  es: pt,
};
