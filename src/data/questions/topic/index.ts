import { Question } from "~/data/questions/question";
import { computerArchitectureQuestions } from "~/data/questions/topic/computer-architecture";

const questionCategories: Record<Topic, Question[]> = {
  computerArchitecture: computerArchitectureQuestions,
  operatingSystems: [],
};

export type Topic = "computerArchitecture" | "operatingSystems";

export function useQuestionTopic(category?: string | string[]): Question[] {
  if (Object.keys(questionCategories).includes(category as string)) {
    return questionCategories[category as Topic];
  }
  return questionCategories.computerArchitecture;
}
