import { Question } from "~/data/questions/question";
import { QuestionDifficulty } from "~/data/questions/question-difficulty";

export const operatingSystemsQuestions: Question[] = [
  {
    predicate: "O que é são os drivers de dispositivos?",
    answers: ["Motoristas de ônibus", "Programas que permitem o funcionamento de um dispositivo", "Módulos de memória", "Interfaces de rede"],
    difficulty: QuestionDifficulty.easy,
    correctResponse: 1,
  },
];
