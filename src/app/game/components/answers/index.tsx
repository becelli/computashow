import React, { Fragment } from "react";

import { Answer } from "~/app/game/components/answers/answer";
import { GameActions } from "~/app/game/components/answers/game-actions";
import { SkipQuestion } from "~/app/game/components/answers/skip-question";
import { IQuestion } from "~/data/questions-per-level/types";
import { RewardPerLevel } from "~/data/rewards-per-level";

export interface AnswerProps {
  currentLevel: number;
  rewardPerLevel: readonly RewardPerLevel[];
  setGameStarted: (gameStarted: boolean) => void;
  currentQuestion: IQuestion;
  answerQuestion: (answer: number) => void;
  passQuestion: () => void;
  passQuestionAvailable: number;
  correctAnswer: boolean;
}

export function Answers({
  currentLevel,
  rewardPerLevel,
  setGameStarted,
  currentQuestion,
  answerQuestion,
  passQuestion,
  passQuestionAvailable,
  correctAnswer,
}: AnswerProps) {
  function stopGame() {
    setGameStarted(false);
  }

  return (
    <Fragment>
      <div className="grid w-full md:gap-4 md:grid-cols-2">
        {currentQuestion.options.map((option: string, number: number) => (
          <Answer
            key={number}
            option={option}
            number={number}
            answerQuestion={answerQuestion}
            correctAnswer={correctAnswer}
            response={currentQuestion.response}
          />
        ))}
      </div>

      <SkipQuestion passQuestion={passQuestion} passQuestionAvailable={passQuestionAvailable} />
      <GameActions currentLevel={currentLevel} stopGame={stopGame} rewardPerLevel={rewardPerLevel} />
    </Fragment>
  );
}
