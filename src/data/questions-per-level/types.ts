import { QuestionDifficulty } from "~/data/questions-per-level/question-difficulty";

export interface IQuestion {
  question: string;
  options: string[];
  difficulty: QuestionDifficulty;
  response: number;
}
