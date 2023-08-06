import Image from "next/image";
import React, { useState, useEffect, Fragment } from "react";
import confetti from "canvas-confetti";
import { RewardPerLevel } from "~/data/rewards-per-level";
import { questions } from "~/data/questions-per-level";
import { UnclosableModal } from "~/components/unclosable-modal";
import { Question } from "~/data/questions-per-level/types";
import { GameProps } from "~/pages/game/props";
import { Responses } from "~/components/prizes";
import { GameOverModal } from "~/pages/game/components/game-over-modal";

const Game = ({ setGameStarted }: GameProps) => {
  // States
  const [easyQuestions, setEasyQuestions] = useState<Question[] | null>(null);
  const [averageQuestions, setAverageQuestions] = useState<Question[] | null>(null);
  const [hardQuestions, setHardQuestions] = useState<Question[] | null>(null);

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [currentLevel, setCurrentLevel] = useState(0);

  const [beginTimer, setBeginTimer] = useState<number | undefined>(undefined);
  const [beginCounter, setBeginCounter] = useState(3);

  const [questionTimer, setQuestionTimer] = useState<number | undefined>(undefined);
  const [timeToAnswer, setQuestionCounter] = useState(30);

  const [showModal, setShowModal] = useState(false);

  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const [correctAnswer, setCorrectAnswer] = useState(false);

  const [passQuestionAvailable, setPassQuestionAvailable] = useState(3);

  const separateQuestionsPerLevel = () => {
    const question = structuredClone(questions);
    setEasyQuestions(question.splice(0, 16)); // mudar numero
    setAverageQuestions(question.splice(0, 13));
    setHardQuestions(question.splice(0, 10));
  };

  // Seleciona pergunta aleatoria
  const getRandomQuestion = (currentLevel: number) => {
    const levels = [easyQuestions, averageQuestions, hardQuestions];
    const levelIndex = currentLevel < 6 ? 0 : currentLevel < 11 ? 1 : 2;

    const levelQuestions = levels[levelIndex];
    if (levelQuestions === null) return;
    const ArrayQuestions = [...levelQuestions];
    const randomIndex = Math.floor(Math.random() * ArrayQuestions.length);
    const question = ArrayQuestions.splice(randomIndex, 1)[0];

    switch (levelIndex) {
      case 0:
        setEasyQuestions(ArrayQuestions);
        break;
      case 1:
        setAverageQuestions(ArrayQuestions);
        break;
      case 2:
        setHardQuestions(ArrayQuestions);
        break;
      default:
        break;
    }

    setCurrentQuestion(question);
  };

  // Inicia o contador do tempo do usuário
  const startQuestionTimer = () => {
    clearInterval(questionTimer);
    setQuestionCounter(30);
    // @ts-ignore
    setQuestionTimer(setInterval(() => setQuestionCounter((c) => c - 1), 1000));
  };

  // Inicia o jogo
  useEffect(() => {
    separateQuestionsPerLevel();
    setCurrentLevel(1);
    // @ts-ignore
    setBeginTimer(setInterval(() => setBeginCounter((c) => Math.max(c - 0.5, 0)), 1000));

    return () => clearInterval(beginTimer); // Clear the interval on component unmount
  }, []);

  // Para os timers se chegarem a zero
  useEffect(() => {
    if (beginCounter === 0) {
      clearInterval(beginTimer);
      getRandomQuestion(currentLevel);
      startQuestionTimer();
    }
  }, [beginCounter]);

  useEffect(() => {
    if (timeToAnswer === 0) {
      clearInterval(questionTimer);
      setShowModal(true);
    }
  }, [timeToAnswer]);

  // Passa de nivel
  const nextLevel = () => {
    if (currentLevel === 15) {
      setShowModal(true);
      setGameWon(true);
      confetti({
        particleCount: 200,
      });
    } else {
      setCurrentLevel((c) => c + 1);
      getRandomQuestion(currentLevel);
      startQuestionTimer();
    }
  };

  // Responde pergunta
  const answerQuestion = (answer: number) => {
    clearInterval(questionTimer);

    if (!currentQuestion) return;
    const isCorrectAnswer = currentQuestion.response === answer;

    if (isCorrectAnswer) {
      setCorrectAnswer(true);
      setTimeout(() => {
        setCorrectAnswer(false);
        nextLevel();
      }, 1500);
    } else {
      setGameOver(true);
      setShowModal(true);
    }
  };

  // Pula a pergunta
  const passQuestion = () => {
    setPassQuestionAvailable((p) => p - 1);
    getRandomQuestion(currentLevel);
    startQuestionTimer();
  };

  const title = timeToAnswer === 0 ? "Tempo esgotado" : gameOver ? "Resposta errada" : gameWon ? "Você ganhou!!" : "";

  return (
    <section className="flex flex-col justify-between h-screen bg-gradient-to-tl from-black to-black via-blue-900">
      <GameOverModal
        title={title}
        currentLevel={currentLevel}
        setGameStarted={setGameStarted}
        currentQuestion={currentQuestion}
        gameOver={gameOver}
        gameWon={gameWon}
        setShowModal={setShowModal}
        showModal={showModal}
        timeToAnswer={timeToAnswer}
      />

      <div className="timer-pergunta">{timeToAnswer}</div>
      <section className="container max-w-lg py-4 mx-auto md:px-4">
        <div className="mx-auto text-center game-control">
          <Image src="/logo.png" alt="Show do Milhão" width={240} height={240} className="mx-auto" />
          <CurrentQuestion beginCounter={beginCounter} currentLevel={currentLevel} />
          <Question beginCounter={beginCounter} currentQuestion={currentQuestion} />

          {beginCounter === 0 && currentQuestion && (
            <Responses
              answerQuestion={answerQuestion}
              currentQuestion={currentQuestion}
              correctAnswer={correctAnswer}
              currentLevel={currentLevel}
              passQuestion={passQuestion}
              passQuestionAvailable={passQuestionAvailable}
              rewardPerLevel={RewardPerLevel}
              setGameStarted={setGameStarted}
            />
          )}
        </div>
      </section>
    </section>
  );
};

function CurrentQuestion({ beginCounter, currentLevel }: any) {
  if (beginCounter !== 0) {
    return <></>;
  }
  return (
    <div className="cursor-default">
      <p className="mt-1 text-3xl text-light">Pergunta número {currentLevel}</p>
    </div>
  );
}

function Question({ beginCounter, currentQuestion }: any) {
  if (beginCounter !== 0) {
    return <></>;
  }

  return (
    <div className="p-4 my-2 rounded-lg bg-gradient-to-bl from-red-900 via-red-600 to-red-900">
      <p className="m-0 text-lg select-none">{currentQuestion && currentQuestion.pergunta}</p>
    </div>
  );
}

export default Game;
