import Image from "next/image";
import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { rewardPerLevel } from "~/data/rewards-per-level";
import { questions } from "~/data/questions-per-level";
import { IQuestion } from "~/data/questions-per-level/types";
import { Answers } from "~/app/game/components/answer";
import { GameOverModal } from "~/app/game/components/game-over-modal";
import { Question } from "~/app/game/components/question";
import { GameState } from "~/app/game/game-state";
import { QuestionDifficulty } from "~/data/questions-per-level/question-difficulty";
import { useTranslation } from "~/i18n/hooks/use-translation";

export interface GameProps {
  setGameStarted: (value: boolean) => void;
}

export function Game({ setGameStarted }: GameProps) {
  const translation = useTranslation();
  const defaultGameStartCounter = 3;
  const defaultTimeToAnswer = 30;
  const maxLevel = 15;
  const waitTime = 1500;
  const [questionsByLevel, setQuestionsByLevel] = useState(new Map<QuestionDifficulty, IQuestion[]>());

  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>({
    question: translation.game.loading,
    response: 0,
    difficulty: QuestionDifficulty.easy,
    options: [],
  });

  const [currentLevel, setCurrentLevel] = useState(1);
  const levelDifficulty = currentLevel < 6 ? QuestionDifficulty.easy : currentLevel < 11 ? QuestionDifficulty.medium : QuestionDifficulty.hard;

  const [timeToBeginGameLeft, setTimeToBeginGameLeft] = useState<number>(defaultGameStartCounter + 1);
  const [timeToAnswerLeft, setTimeToAnswerLeft] = useState<number>(-1);

  const [gameState, setGameState] = useState<GameState>(GameState.playing)

  const [answerCorrectness, setAnswerCorrectness] = useState(false);
  const [questionSkipsAvailable, setQuestionSkipsAvailable] = useState(3);

  function separateQuestionsPerLevel() {
    setQuestionsByLevel(
      new Map<QuestionDifficulty, IQuestion[]>(
        Object.values(QuestionDifficulty).map((difficulty) => {
          const questionsOfDifficulty = questions.filter((question) => question.difficulty === difficulty);
          return [difficulty, questionsOfDifficulty];
        }),
      ),
    );
  }

  async function nextLevel(): Promise<void> {
    if (currentLevel === maxLevel) {
      setGameState(GameState.won);
      await confetti({ particleCount: 200 });
      return;
    }
    const question = getRandomQuestion();
    setCurrentQuestion(question);
    setCurrentLevel((currentLevel) => currentLevel + 1);
    setTimeToAnswerLeft(defaultTimeToAnswer);
  }

  function answerQuestion(answer: number): void {
    if (!currentQuestion) return;

    if (currentQuestion.response !== answer) {
      return setGameState(GameState.over);
    }

    setTimeToAnswerLeft(-1);
    setAnswerCorrectness(true);
    setTimeout(() => {
      setAnswerCorrectness(false);
      nextLevel();
    }, waitTime);
  }

  function skipQuestion(): void {
    if (questionSkipsAvailable === 0) {
      return;
    }
    setQuestionSkipsAvailable((availableSkips) => availableSkips - 1);
    const question = getRandomQuestion();
    setCurrentQuestion(question);
  }

  function getTitle(): string {
    switch (gameState) {
      case GameState.over:
        return "Resposta errada";
      case GameState.won:
        return "Você ganhou!";
      default:
        return "O tempo acabou!";
    }
  }

  // TODO: Subir para componente pai
  function getRandomQuestion(): IQuestion {
    const questionsOfLevel = questionsByLevel.get(levelDifficulty) ?? [];
    const randomIndex = Math.floor(Math.random() * questionsOfLevel.length);

    const returnQuestion = questionsOfLevel[randomIndex];
    setQuestionsByLevel((questionsByLevel) => {
      const questionsOfLevel = questionsByLevel.get(levelDifficulty) ?? [];
      questionsOfLevel.splice(randomIndex, 1);
      return questionsByLevel.set(levelDifficulty, questionsOfLevel);
    });

    return returnQuestion;
  }

  useEffect(() => {
    separateQuestionsPerLevel();
    setTimeToBeginGameLeft(timeToBeginGameLeft - 1);
  }, []);

  useEffect(() => {
    if (timeToBeginGameLeft === 0) {
      const question = getRandomQuestion();
      setCurrentQuestion(question);
      return setTimeToAnswerLeft(defaultTimeToAnswer);
    }

    const interval = setInterval(() => {
      setTimeToBeginGameLeft(timeToBeginGameLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeToBeginGameLeft]);

  useEffect(() => {

    if (timeToAnswerLeft === -1) {
      return;
    }
    if (timeToAnswerLeft === 0) {
      return setGameState(GameState.over);
    }

    const interval = setInterval(() => {
      setTimeToAnswerLeft(timeToAnswerLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeToAnswerLeft]);

  return (
    <section className="flex flex-col h-screen bg-gradient-to-tl from-black to-black via-blue-900">
      <GameOverModal
        title={getTitle()}
        currentLevel={currentLevel}
        setGameStarted={setGameStarted}
        currentQuestion={currentQuestion}
        gameOver={gameState === GameState.over}
        gameWon={gameState === GameState.won}
        setShowModal={() => setGameStarted(false)}
        showModal={gameState === GameState.over || gameState === GameState.won}
        timeToAnswer={timeToAnswerLeft}
      />

      <div className="absolute top-4 right-4">
        <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-gradient-to-bl from-blue-900 via-blue-700 to-blue-900">
          {timeToBeginGameLeft !== 0 ? timeToBeginGameLeft : timeToAnswerLeft}
        </div>
      </div>

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
              setGameStarted={setGameStarted}
            />
          )}
        </div>
      </div>
    </section>
  );
}
