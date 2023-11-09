import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";

import { GameState } from "~/app/game/entities/game-state";
import { Question } from "~/data/questions/question";
import { QuestionDifficulty } from "~/data/questions/question-difficulty";
import { useTranslation } from "~/i18n/hooks/use-translation";

interface GameContextProps {
  answerQuestion: (answer: number) => void;
  skipQuestion: () => void;
  currentQuestion: Question;
  currentLevel: number;
  timeToBeginGameLeft: number;
  timeToAnswerLeft: number;
  gameState: GameState;
  answerCorrectness: boolean;
  questionSkipsAvailable: number;
  leaveGame: () => Promise<void>;
}

const GameContext = createContext({} as GameContextProps);

interface GameContextProviderProps extends React.PropsWithChildren {
  defaultGameStartCounter: number;
  defaultTimeToAnswer: number;
  currentLevel: number;
  currentQuestion: Question;
  questionSkipsAvailable: number;
  gameState: GameState;
  answerCorrectness: boolean;
  skipQuestion: () => void;
  answerQuestion: (answer: number) => void;
  setNextQuestion: () => void;
}

export const GameContextProvider = ({
  children,
  skipQuestion,
  questionSkipsAvailable,
  defaultGameStartCounter,
  defaultTimeToAnswer,
  currentLevel,
  answerQuestion,
  gameState,
  answerCorrectness,
  setNextQuestion,
  currentQuestion,
}: GameContextProviderProps) => {
  const router = useRouter();

  const [timeToBeginGameLeft, setTimeToBeginGameLeft] = useState(defaultGameStartCounter + 1);
  const [timeToAnswerLeft, setTimeToAnswerLeft] = useState(-1);

  async function leaveGame(): Promise<void> {
    await router.push("/");
  }

  useEffect(() => {
    if (timeToBeginGameLeft === 0) {
      setTimeToAnswerLeft(defaultTimeToAnswer);
      setNextQuestion();
      return;
    }

    const interval = setInterval(() => {
      setTimeToBeginGameLeft(timeToBeginGameLeft - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeToBeginGameLeft]);

  useEffect(() => {
    if (timeToAnswerLeft === 0) {
      // setGameState(GameState.over);
      return;
    }

    const interval = setInterval(() => {
      setTimeToAnswerLeft(timeToAnswerLeft - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeToAnswerLeft]);

  return (
    <GameContext.Provider
      value={{
        answerQuestion,
        skipQuestion,
        currentQuestion,
        currentLevel,
        timeToBeginGameLeft,
        timeToAnswerLeft,
        gameState,
        answerCorrectness,
        questionSkipsAvailable,
        leaveGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export function useGameContext() {
  return useContext(GameContext);
}
