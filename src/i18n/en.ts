import { Translation } from "~/i18n";

export const en: Translation = {
  gameName: "ComputaShow",
  home: {
    and: "and",
    welcome: "Welcome to ComputaShow!",
    welcomeMessage: "You know what it is? It's a quiz game about Computer Architecture and Operating Systems.",
    singlePlayer: "Let's Play",
    projectDevelopedBy: "This project was developed by",
    forTheDisciplineOfFPGA: " for the FPGA course.",
  },
  inGame: {
    loading: "Loading, hold on...",
    gameState: {
      over: "Oops, wrong answer!",
      won: "Nailed it! Well done!",
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
      message: "You scored {points} points! Wow, take a seat!",
      actions: {
        backToMainMenu: "Back to start",
      },
    },
    gameWon: {
      message: "Congratulations!!! You scored {points} points!",
    },
  },
  topics: {
    computerArchitecture: "Computer Architecture",
    operatingSystems: "Operating Systems",
  },
};
