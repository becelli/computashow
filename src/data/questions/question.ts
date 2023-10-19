import { QuestionDifficulty } from "~/data/questions/question-difficulty";

export interface Question {
  predicate: string;
  answers: string[];
  difficulty: QuestionDifficulty;
  correctResponse: number;
}
