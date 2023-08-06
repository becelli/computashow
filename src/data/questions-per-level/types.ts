import { QuestionDifficulty } from "~/data/questions-per-level/question-difficulty";

export interface Question {
  question: string;
  options: string[];
  difficulty: QuestionDifficulty;
  response: number;
};
