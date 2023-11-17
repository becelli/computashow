import { Translation } from "~/i18n";

export const en: Translation = {
  gameName: "ComputaShow",
  home: {
    and: "and",
    welcome: "Welcome to ComputaShow!",
    welcomeMessage: "ComputaShow is a quiz game about Computer Architecture and Operating Systems.",
    singlePlayer: "Play",
    projectDevelopedBy: "This project was developed by ",
    forTheDisciplineOfFPGA: " for the FPGA course.",
  },
  inGame: {
    loading: "Loading...",
    gameState: {
      over: "Incorrect answer!",
      won: "You won!",
      playing: "Time's up!",
    },
    actions: {
      stop: "Stop",
      hit: "Hit",
      miss: "Miss",
      skip: "Skip",
    },
    questionLabel: "Question #",
    gameOver: {
      actions: {
        backToMainMenu: "Back to main menu",
      },
    },
  },
  topics: {
    computerArchitecture: "Computer Architecture",
    operatingSystems: "Operating Systems",
  },
};
