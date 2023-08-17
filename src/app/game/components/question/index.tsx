import { Fragment } from "react";
import { IQuestion } from "~/data/questions-per-level/types";

export type QuestionProps = {
  beginCounter: number;
  currentLevel: number;
  currentQuestion: IQuestion | null;
};

export function Question({ beginCounter, currentLevel, currentQuestion }: QuestionProps) {
  if (beginCounter !== 0) {
    return <></>;
  }

  return (
    // <Fragment>
    //   <CurrentQuestion beginCounter={beginCounter} currentLevel={currentLevel} />
    //   <div className="p-4 my-2 rounded-lg bg-gradient-to-bl from-amber-800 via-amber-600 to-amber-800" style={{ width: '1000px' }}>
    //     <p className="m-0 text-lg select-none">{currentQuestion && currentQuestion.question}</p>
    //   </div>
    // </Fragment>

    <Fragment>
      <CurrentQuestion beginCounter={beginCounter} currentLevel={currentLevel} />
      <div className="p-4 my-2 rounded-lg bg-gradient-to-bl from-amber-800 via-amber-600 to-amber-800">
        <p className="m-0 text-lg select-none">{currentQuestion && currentQuestion.question}</p>
      </div>
    </Fragment>
  );
}

type CurrentQuestionParams = {
  beginCounter: number;
  currentLevel: number;
};
function CurrentQuestion({ beginCounter, currentLevel }: CurrentQuestionParams) {
  if (beginCounter !== 0) {
    return <></>;
  }
  return (
    <div className="cursor-default">
      <p className="mt-1 text-3xl text-light">Pergunta número {currentLevel}</p>
    </div>
  );
}
