import { Fragment } from "react";

import { Question } from "~/data/questions/question";
import { useTranslation } from "~/i18n/hooks/use-translation";

export interface QuestionProps {
  currentLevel: number;
  currentQuestion: Question;
}

export function Question({ currentLevel, currentQuestion }: QuestionProps) {
  const translation = useTranslation();
  return (
    <Fragment>
      <div className="cursor-default">
        <p className="mt-1 text-3xl text-light">{`${translation.game.questionLabel}${currentLevel + 1}`}</p>
      </div>
      <div className="p-4 my-2 bg-gray-100 border-2 border-gray-300 rounded-lg bg-gradient-to-bl">
        <p className="m-0 text-lg select-none">{currentQuestion.predicate}</p>
      </div>
    </Fragment>
  );
}
