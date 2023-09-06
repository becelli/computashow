import { en } from "~/i18n/en";
import { es } from "~/i18n/es";
import { pt } from "~/i18n/pt";

export type SupportedLanguages = "pt" | "en" | "es";

// export interface Translation {
//   gameName: string;
//   home: {
//     welcomeMessage: string;
//     projectDevelopedBy: string;
//     singlePlayer: string;
//     forTheDisciplineOfFPGA: string;
//   };
//   game: {
//     loading: string;
//     gameState: Record<GameState, string>;
//     questionLabel: string;
//     actions: {
//       stop: string;
//       hit: string;
//       miss: string;
//     };
//   };
// }

export type Translation = typeof pt;

export const translations: Record<SupportedLanguages, typeof pt> = {
  pt,
  es: pt,
  en: pt,
};
