import React from "react";

import { Answers } from "~/app/game/components/answers";
import { StopButton } from "~/app/game/components/answers/game-actions/stop-button";
import { SkipQuestion } from "~/app/game/components/answers/skip-question";
import { Countdown } from "~/app/game/components/countdown";
import { GameOverModal } from "~/app/game/components/game-over-modal";
import { Question as QuestionComponent } from "~/app/game/components/question";
import { GameState } from "~/app/game/entities/game-state";
import { useGameContext } from "~/context/game-context";
import { Question } from "~/data/questions/question";

export interface GameProps {
  currentQuestion: Question;
  currentLevel: number;
  gameState: GameState;
  answerCorrectness: boolean;
  questionSkipsAvailable: number;
}

export default function Game({ currentQuestion, currentLevel, gameState, answerCorrectness, questionSkipsAvailable }: GameProps): React.ReactElement {
  const { timeToBeginGameLeft } = useGameContext();
  function PlayingGame() {
    return (
      <main className="flex flex-col items-center justify-center h-screen min-h-screen">
        {gameState !== GameState.playing && <GameOverModal currentLevel={currentLevel} gameState={gameState} />}

        <Countdown isStarting={timeToBeginGameLeft === 0} />
        <div className="container w-full h-full p-2 mx-auto sm:p-0">
          <div className="flex flex-col items-center h-full mx-auto text-center ">
            <QuestionComponent currentQuestion={currentQuestion} currentLevel={currentLevel} />
            <Answers correctAnswer={answerCorrectness} currentQuestion={currentQuestion} />
          </div>
        </div>
        <div className="flex w-full gap-2 p-5">
          <SkipQuestion passQuestionAvailable={questionSkipsAvailable} />
          <StopButton />
        </div>
      </main>
    );
  }

  function StartingGame() {
    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <Countdown isStarting={timeToBeginGameLeft !== 0} />
      </main>
    );
  }

  return <main className="flex flex-col min-h-screen bg-base">{timeToBeginGameLeft === 0 ? <PlayingGame /> : <StartingGame />}</main>;
}
