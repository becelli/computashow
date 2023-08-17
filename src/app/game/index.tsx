import Image from "next/image";
import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { rewardPerLevel } from "~/data/rewards-per-level";
import { IQuestion } from "~/data/questions-per-level/types";
import { Answers } from "~/app/game/components/answer";
import { GameOverModal } from "~/app/game/components/game-over-modal";
import { Question } from "~/app/game/components/question";
import { GameState } from "~/app/game/entities/game-state";
import { useTranslation } from "~/i18n/hooks/use-translation";

export interface GameProps {
  currentQuestion: IQuestion;
  currentLevel: number;
  timeToBeginGameLeft: number;
  timeToAnswerLeft: number;
  gameState: GameState;
  answerCorrectness: boolean;
  questionSkipsAvailable: number;
  answerQuestion: (answer: number) => void;
  skipQuestion: () => void;
  leave: () => void;
}

export default function Game({
  currentQuestion,
  currentLevel,
  timeToBeginGameLeft,
  timeToAnswerLeft,
  gameState,
  answerCorrectness,
  questionSkipsAvailable,
  answerQuestion,
  skipQuestion,
  leave,
}: GameProps): React.ReactElement {
  const translation = useTranslation();

  function getGameOverTitle(): string {
    switch (gameState) {
      case GameState.over:
        return translation.game.gameState.over;
      case GameState.won:
        return translation.game.gameState.won;
      case GameState.playing: // if "playing", the time has exceeded the limit
        return translation.game.gameState.playing;
    }
  }

  if (timeToBeginGameLeft > 0) {
    return <Countdown timer={timeToBeginGameLeft} />;
  }

  return (
    <section className="flex flex-col h-screen bg-gradient-to-tl from-black to-black via-blue-900">
      <GameOverModal
        title={getGameOverTitle()}
        currentLevel={currentLevel}
        setGameStarted={leave}
        currentQuestion={currentQuestion}
        gameState={gameState}
        setShowModal={() => leave()}
        timeToAnswer={timeToAnswerLeft}
      />

      <Countdown timer={timeToAnswerLeft} />
      <div className="container h-full max-w-lg p-2 mx-auto sm:p-0">
        <div className="flex flex-col items-center h-full mx-auto text-center">
          <Image src="/logo.png" alt="Show do Milhão" width={240} height={240} className="m-auto" />
          <Question beginCounter={timeToBeginGameLeft} currentQuestion={currentQuestion} currentLevel={currentLevel} />

          {timeToBeginGameLeft === 0 && currentQuestion && (
            <Answers
              answerQuestion={answerQuestion}
              currentQuestion={currentQuestion}
              correctAnswer={answerCorrectness}
              currentLevel={currentLevel}
              passQuestion={skipQuestion}
              passQuestionAvailable={questionSkipsAvailable}
              rewardPerLevel={rewardPerLevel}
              setGameStarted={leave}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function Countdown({ timer }: { timer: number | string }) {
  return (
    <div className="absolute top-4 right-4">
      <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-gradient-to-bl from-blue-900 via-blue-700 to-blue-900">{timer}</div>
    </div>
  );
}
