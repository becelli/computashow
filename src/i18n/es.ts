import { Translation } from "~/i18n";

export const es: Translation = {
  gameName: "ComputaShow",
  home: {
    and: "y",
    welcome: "¡Bienvenido a ComputaShow!",
    welcomeMessage: "¿Sabés de qué se trata? Es un juego de preguntas y respuestas sobre Arquitectura de Ordenadores y Sistemas Operativos.",
    singlePlayer: "Vamos a jugar",
    projectDevelopedBy: "Este proyecto fue desarrollado por",
    forTheDisciplineOfFPGA: " para la asignatura de FPGA.",
  },
  inGame: {
    loading: "Cargando, esperá un poco...",
    gameState: {
      over: "¡Uh, respuesta incorrecta!",
      won: "¡Lo lograste! ¡Bien hecho!",
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
      message: "¡Hiciste {points} puntos! ¡Increíble, tomate un descanso!",
      actions: {
        backToMainMenu: "Volver al inicio",
      },
    },
    gameWon: {
      message: "¡Felicitaciones!!! Hiciste {points} puntos!",
    },
  },
  topics: {
    computerArchitecture: {
      name: "Arquitectura de Ordenadores",
      questions: [],
    },
    operatingSystems: {
      name: "Sistemas Operativos",
      questions: [],
    },
  },
};
