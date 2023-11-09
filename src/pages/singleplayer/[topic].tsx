/* eslint-disable @typescript-eslint/no-misused-promises */
import confetti from "canvas-confetti";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Game from "~/app/game";
import { GameState } from "~/app/game/entities/game-state";
import { GameContextProvider } from "~/context/game-context";
import { Question } from "~/data/questions/question";
import { calculateQuestionDifficulty, QuestionDifficulty } from "~/data/questions/question-difficulty";
import { useQuestionTopic } from "~/data/questions/topic";
import { useTranslation } from "~/i18n/hooks/use-translation";

export default function SinglePlayerGame(): React.ReactElement {
  // Set up the translation and questions
  const router = useRouter();
  const questions = useQuestionTopic(router.query.topic);
  const translation = useTranslation();

  // Define default settings
  const defaultGameStartCounter = 3;
  const defaultTimeToAnswer = 30;
  const defaultQuestionSkipsAvailable = 3;
  const maxLevel = 15;
  const waitTime = 2000;

  // Set up the game state
  const [questionSkipsAvailable, setQuestionSkipsAvailable] = useState(defaultQuestionSkipsAvailable);
  const [questionsByLevel, setQuestionsByLevel] = useState(new Map<QuestionDifficulty, Question[]>());

  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    predicate: translation.inGame.loading,
    correctResponse: 0,
    difficulty: QuestionDifficulty.easy,
    answers: [],
  });

  const [currentLevel, setCurrentLevel] = useState(0);
  const levelDifficulty = calculateQuestionDifficulty(currentLevel, maxLevel);

  const [gameState, setGameState] = useState(GameState.playing);

  const [answerCorrectness, setAnswerCorrectness] = useState(false);

  function separateQuestionsPerLevel() {
    setQuestionsByLevel(
      new Map<QuestionDifficulty, Question[]>(
        Object.values(QuestionDifficulty).map((difficulty) => {
          const questionsOfDifficulty = questions.filter((question) => question.difficulty === difficulty);
          return [difficulty, questionsOfDifficulty];
        }),
      ),
    );
  }

  function getRandomQuestion() {
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

  async function nextLevel() {
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

  function answerQuestion(answer: number) {
    if (currentQuestion.correctResponse !== answer) {
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

  function skipQuestion() {
    if (questionSkipsAvailable === 0) {
      return;
    }
    setQuestionSkipsAvailable((availableSkips) => availableSkips - 1);
    const question = getRandomQuestion();
    setCurrentQuestion(question);
    setTimeToAnswerLeft(defaultTimeToAnswer);
  }

  useEffect(() => {
    separateQuestionsPerLevel();
    setTimeToBeginGameLeft(defaultGameStartCounter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setNextQuestion() {
    const question = getRandomQuestion();
    setCurrentQuestion(question);
    setTimeToAnswerLeft(defaultTimeToAnswer);
  }

  return (
    <GameContextProvider
      answerCorrectness={answerCorrectness}
      answerQuestion={nextLevel}
      currentLevel={currentLevel}
      defaultGameStartCounter={defaultGameStartCounter}
      defaultTimeToAnswer={defaultTimeToAnswer}
      gameState={gameState}
      questionSkipsAvailable={questionSkipsAvailable}
      skipQuestion={() => {
        setQuestionSkipsAvailable((questionSkipsAvailable) => questionSkipsAvailable - 1);
        setNextQuestion();
      }}
      currentQuestion={currentQuestion}
      setNextQuestion={setNextQuestion}
    >
      <Game
        // answerQuestion={answerQuestion}
        // skipQuestion={skipQuestion}
        currentQuestion={currentQuestion}
        currentLevel={currentLevel}
        gameState={gameState}
        answerCorrectness={answerCorrectness}
        questionSkipsAvailable={questionSkipsAvailable}
      />
    </GameContextProvider>
  );
}
