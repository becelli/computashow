import React, { Fragment } from "react";
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
  function getBackgroundColor(number: number, correctAnswer: boolean) {
    if (correctAnswer && number === currentQuestion.response) {
      return "bg-gradient-to-bl from-green-900 via-green-700 to-green-900 hover:from-green-800 hover:to-green-800";
    }
    return "bg-gradient-to-bl from-red-900 via-red-600 to-red-900 hover:from-red-800 hover:to-red-800";
  }
  
  return (
    <Fragment>
    <div className="flex flex-col">
      {currentQuestion.options.map((option: string, number: number) => (
        <button
          key={number}
          onClick={() => answerQuestion(number + 1)}
          className={`w-700 py-4 m-2 mx-auto text-lg rounded-lg ${getBackgroundColor(number + 1, correctAnswer)}`}
          style={{ width: '1000px' }} // Mudar tamanho fixo
        >
          {option}
        </button>
      ))}
    </div>

        <div className="mt-4 row">
          <div className="max-w-xs mx-auto col">
            <div className="text-center opcoes">
              {passQuestionAvailable > 0 && (
                <button
                  className="px-6 py-3 text-white rounded-lg bg-gradient-to-bl from-yellow-900 via-yellow-700 to-yellow-900 hover:from-yellow-800 hover:to-yellow-800"
                  onClick={passQuestion}
                >
                  PULAR ({passQuestionAvailable})
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-5 space-x-6">
          <div className="mx-auto col flex justify-between w-full">
            <button
              className="px-6 py-3 text-white rounded-lg bg-gradient-to-bl from-red-900 via-red-600 to-red-900 hover:from-red-800 hover:to-red-800 mr-4"
              onClick={() => {
                // Handle ERRAR button click
              }}
            >
              <div className="valor">
                {rewardPerLevel[currentLevel] / 2 === 500
                  ? "500"
                  : (rewardPerLevel[currentLevel] / 2).toString().slice(0, -3) + " MIL"}
              </div>
              <p className="opcao">ERRAR</p>
            </button>
            <button
              className="px-6 py-3 text-white rounded-lg bg-gradient-to-bl from-blue-900 via-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-800 mr-4"
              onClick={() => {
                if (
                  window.confirm(
                    `Tem certeza de que deseja parar?
                    Você ganhará ${rewardPerLevel[currentLevel].toString().slice(0, -3)} mil reais.`,
                  )
                )
                  setGameStarted(false);
              }}
            >
              <div className="valor">
                {rewardPerLevel[currentLevel].toString().slice(0, -3) + " MIL"}
              </div>
              <p className="opcao">PARAR</p>
            </button>
            <button
              className="px-6 py-3 text-white rounded-lg bg-gradient-to-bl from-green-900 via-green-700 to-green-900 hover:from-green-800 hover:to-green-800"
              onClick={() => {
                // Handle ACERTAR button click
              }}
            >
              <div className="valor">
                {currentLevel < 15
                  ? rewardPerLevel[currentLevel + 1].toString().slice(0, -3) + " MIL"
                  : "1 MILHÃO"}
              </div>
              <p className="opcao">ACERTAR</p>
            </button>
          </div>
        </div>
    </Fragment>
  );
}
