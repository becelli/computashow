import { Question } from "~/data/questions/question";
import { computerArchitectureQuestions } from "~/data/questions/topic/computer-architecture";
import { operatingSystemsQuestions } from "~/data/questions/topic/operating-systems";

const questionCategories: Record<Topic, Question[]> = {
  computerArchitecture: computerArchitectureQuestions,
  operatingSystems: operatingSystemsQuestions,
};

interface TopicColors {
  font: string;
  bg: string;
  hoverBg: string;
}

const topicColors: Record<Topic, TopicColors> = {
  computerArchitecture: {
    font: "text-blue",
    bg: "bg-blue",
    hoverBg: "hover:bg-blue",
  },
  operatingSystems: {
    font: "text-mauve",
    bg: "bg-mauve",
    hoverBg: "hover:bg-mauve",
  },
};

export enum Topic {
  computerArchitecture = "computerArchitecture",
  operatingSystems = "operatingSystems",
}

export function useQuestionTopic(category?: string | string[]): Question[] {
  if (Object.keys(questionCategories).includes(category as string)) {
    return questionCategories[category as Topic];
  }
  return questionCategories.computerArchitecture;
}

export function useQuestionTopicColor(type: keyof TopicColors, category?: string | string[]): string {
  if (Object.keys(questionCategories).includes(category as string)) {
    return topicColors[category as Topic][type];
  }
  return topicColors.computerArchitecture[type];
}
