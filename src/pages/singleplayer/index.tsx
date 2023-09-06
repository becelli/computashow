/* eslint-disable @typescript-eslint/no-misused-promises */
import confetti from "canvas-confetti";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Game from "~/app/game";
import { GameState } from "~/app/game/entities/game-state";
import { questions } from "~/data/questions-per-level";
import { QuestionDifficulty } from "~/data/questions-per-level/question-difficulty";
import { IQuestion } from "~/data/questions-per-level/types";
import { useTranslation } from "~/i18n/hooks/use-translation";

export default function SinglePlayerGame(): React.ReactElement {
  const router = useRouter();
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

  const [gameState, setGameState] = useState<GameState>(GameState.playing);

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
    if (currentQuestion.response !== answer) {
      setGameState(GameState.over);
      return;
    }

    setTimeToAnswerLeft(-1);
    setAnswerCorrectness(true);
    setTimeout(async () => {
      setAnswerCorrectness(false);
      await nextLevel();
    }, waitTime);
  }

  function skipQuestion(): void {
    if (questionSkipsAvailable === 0) {
      return;
    }
    setQuestionSkipsAvailable((availableSkips) => availableSkips - 1);
    const question = getRandomQuestion();
    setCurrentQuestion(question);
    setTimeToAnswerLeft(defaultTimeToAnswer);
  }

  // TODO: Subir para componente pai
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (timeToBeginGameLeft === 0) {
      const question = getRandomQuestion();
      setCurrentQuestion(question);
      setTimeToAnswerLeft(defaultTimeToAnswer);
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
    if (timeToAnswerLeft === -1) {
      return;
    }
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

  async function leaveGame(): Promise<void> {
    await router.push("/");
  }
  return (
    <Game
      answerQuestion={answerQuestion}
      skipQuestion={skipQuestion}
      currentQuestion={currentQuestion}
      currentLevel={currentLevel}
      timeToBeginGameLeft={timeToBeginGameLeft}
      timeToAnswerLeft={timeToAnswerLeft}
      gameState={gameState}
      answerCorrectness={answerCorrectness}
      questionSkipsAvailable={questionSkipsAvailable}
      leave={leaveGame}
    />
  );
}
