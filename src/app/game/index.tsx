import Image from "next/image";
import React, { Fragment } from "react";

import { Answers } from "~/app/game/components/answers";
import { Countdown } from "~/app/game/components/countdown";
import { GameOverModal } from "~/app/game/components/game-over-modal";
import { Question } from "~/app/game/components/question";
import { GameState } from "~/app/game/entities/game-state";
import { IQuestion } from "~/data/questions-per-level/types";
import { rewardPerLevel } from "~/data/rewards-per-level";

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
  function PlayingGame(): React.ReactElement {
    return (
      <Fragment>
        {gameState !== GameState.playing && <GameOverModal currentLevel={currentLevel} restartGame={leave} gameState={gameState} />}

        <Countdown timer={timeToAnswerLeft} />
        <div className="container w-full h-full p-2 mx-auto sm:p-0">
          <div className="flex flex-col items-center h-full mx-auto text-center ">
            <Image src="/logo.png" alt="Show do Milhão" width={240} height={240} className="m-auto" />
            <Question currentQuestion={currentQuestion} currentLevel={currentLevel} />

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
          </div>
        </div>
      </Fragment>
    );
  }

  function StartingGame(): React.ReactElement {
    return <Countdown timer={timeToBeginGameLeft} />;
  }

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-tl from-black to-black via-blue-900">
      {timeToBeginGameLeft === 0 ? <PlayingGame /> : <StartingGame />}
    </main>
  );
}
