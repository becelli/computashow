import { Fragment } from "react";

import { IQuestion } from "~/data/questions-per-level/types";
import { useTranslation } from "~/i18n/hooks/use-translation";

export interface QuestionProps {
  currentLevel: number;
  currentQuestion: IQuestion;
}

export function Question({ currentLevel, currentQuestion }: QuestionProps) {
  const translation = useTranslation();
  return (
    <Fragment>
      <div className="cursor-default">
        {/* <p className="mt-1 text-3xl text-light">Pergunta #{currentLevel}</p> */}
        <p className="mt-1 text-3xl text-light">{`${translation.game.questionLabel}${currentLevel}`}</p>
      </div>
      <div className="p-4 my-2 rounded-lg bg-gradient-to-bl from-amber-800 via-amber-600 to-amber-800">
        <p className="m-0 text-lg select-none">{currentQuestion.question}</p>
      </div>
    </Fragment>
  );
}
