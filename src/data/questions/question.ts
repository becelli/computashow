import { QuestionDifficulty } from "~/data/questions/question-difficulty";

export interface Question {
  question: string;
  options: string[];
  difficulty: QuestionDifficulty;
  response: number;
}
