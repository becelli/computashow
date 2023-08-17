import { pt } from "~/i18n/pt";
import { en } from "~/i18n/en";
import { es } from "~/i18n/es";
import { GameState } from "~/app/game/entities/game-state";

export type SupportedLanguages = "pt" | "en" | "es";

export type Translation = {
  gameName: string;
  home: {
    welcomeMessage: string;
    projectDevelopedBy: string;
    singlePlayer: string;
    forTheDisciplineOfFPGA: string;
  };
  game: {
    loading: string;
    gameState: Record<GameState, string>;
    actions: {
      stop: string;
      hit: string;
      miss: string;
    }
  };
  
};

export const translations: Record<SupportedLanguages, Translation> = {
  pt,
  es,
  en,
};