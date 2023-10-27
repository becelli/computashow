import { useRouter } from "next/router";

import { useQuestionTopicColor } from "~/data/questions/topic";

interface QuestionAnswerProps {
  option: string;
  number: number;
  answerQuestion: (answer: number) => void;
  correctAnswer: boolean;
  response: number;
}

export function Answer({ option, number, answerQuestion, correctAnswer, response }: QuestionAnswerProps) {
  const bgColor = useQuestionTopicColor("hoverBg", useRouter().query.topic);

  function getBackgroundColor(number: number, correctAnswer: boolean) {
    if (correctAnswer && number === response) {
      return "bg-green";
    }
    return `bg-surface1 text-text hover:text-surface0 shadow-sm ${bgColor}`;
  }

  function onClick() {
    answerQuestion(number + 1);
  }
  2;

  return (
    <button
      onClick={onClick}
      className={`md:min-h-[128px] w-full p-3 m-2 mx-auto text-lg rounded-sm duration-150 hover:scale-105 ${getBackgroundColor(number + 1, correctAnswer)}`}
    >
      {option}
    </button>
  );
}
