import React, { Fragment } from "react";

import { Answer } from "~/app/game/components/answers/answer";
import { GameActions } from "~/app/game/components/answers/game-actions";
import { SkipQuestion } from "~/app/game/components/answers/skip-question";
import { IQuestion } from "~/data/questions-per-level/types";
import { RewardPerLevel } from "~/data/rewards-per-level";
import { StopButton } from "./game-actions/stop-button";

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

export function Answers({ currentQuestion, answerQuestion, correctAnswer }: AnswerProps) {
  return (
    <div className="">
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
    </div>
  );
}
