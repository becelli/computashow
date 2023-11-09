import { Translation } from "~/i18n";

export const es: Translation = {
  gameName: "ComputaShow",
  home: {
    and: "y",
    welcome: "¡Bienvenidos a ComputaShow!",
    welcomeMessage: "ComputaShow es un juego de preguntas y respuestas sobre temas de Arquitectura de Computadoras y Sistemas Operativos.",
    singlePlayer: "Jugar",
    projectDevelopedBy: "Este proyecto fue desarrollado por ",
    forTheDisciplineOfFPGA: " para la disciplina de FPGA.",
  },
  inGame: {
    loading: "Cargando...",
    gameState: {
      over: "¡Respuesta incorrecta!",
      won: "¡Has ganado!",
      playing: "¡Se acabó el tiempo!",
    },
    actions: {
      stop: "Parar",
      hit: "Acertar",
      miss: "Fallar",
      skip: "Saltar",
    },
    questionLabel: "Pregunta #",
    gameOver: {
      actions: {
        tryAgain: "Reintentar",
        backToMainMenu: "Volver al inicio",
      },
    },
  },
  topics: {
    computerArchitecture: "Arquitectura de Ordenadores",
    operatingSystems: "Sistemas Operativos",
  },
};
