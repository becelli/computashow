import { computerArchitectureQuestions } from "~/data/questions/categories/computer-architecture";
import { QuestionDifficulty } from "~/data/questions/question-difficulty";

export type SupportedCategories = "computerArchitecture";

export interface IQuestion {
  question: string;
  options: string[];
  difficulty: QuestionDifficulty;
  response: number;
}
export type QuestionCategory = typeof computerArchitectureQuestions;

export const questionCategories: Record<SupportedCategories, QuestionCategory> = {
  computerArchitecture: computerArchitectureQuestions,
};
