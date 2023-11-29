import { Question } from "~/data/questions/question";
import { Translation } from "~/i18n";

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

export function useQuestionTopic(translation: Translation, category: string): Question[] {
  if (!Object.keys(translation.topics).includes(category as Topic)) {
    return translation.topics.computerArchitecture.questions;
  }
  return translation.topics[category as Topic].questions;
}

export function useQuestionTopicColor(type: keyof TopicColors, category: unknown): string {
  if (!Object.keys(topicColors).includes(category as Topic)) {
    return topicColors.computerArchitecture[type];
  }
  return topicColors[category as Topic][type];
}
