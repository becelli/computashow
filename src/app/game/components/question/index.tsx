import { useRouter } from "next/router";
import { Fragment } from "react";

import { Question } from "~/data/questions/question";
import { useQuestionTopicColor } from "~/data/questions/topic";
import { useTranslation } from "~/i18n/hooks/use-translation";

export interface QuestionProps {
  currentLevel: number;
  currentQuestion: Question;
}

export function Question({ currentLevel, currentQuestion }: QuestionProps) {
  const translation = useTranslation();
  const bgColor = useQuestionTopicColor("bg", useRouter().query.topic);
  return (
    <Fragment>
      <div className="cursor-default">
        <p className="mt-1 text-3xl text-light text-text">{`${translation.inGame.questionLabel}${currentLevel + 1}`}</p>
      </div>
      <div className={`p-4 my-2 ${bgColor} rounded-sm`}>
        <p className="m-0 text-lg select-none">{currentQuestion.predicate}</p>
      </div>
    </Fragment>
  );
}
