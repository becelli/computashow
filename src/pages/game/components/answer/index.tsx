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
      return "bg-gradient-to-bl from-green-900 via-green-700 to-green-900";
    }
    return "bg-gradient-to-bl from-red-900 via-red-600 to-red-900";
  }

  return (
    <Fragment>
      <div className="flex flex-col">
        {currentQuestion.options.map((option: string, number: number) => (
          <button
            key={number}
            onClick={() => answerQuestion(number + 1)}
            className={`w-full py-4 m-2 mx-auto text-lg rounded-lg ${getBackgroundColor(number + 1, correctAnswer)}`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-4 row">
        <div className="max-w-xs mx-auto col">
          <div className="text-center opcoes">
            {passQuestionAvailable > 0 && (
              <div className="opcao" onClick={passQuestion}>
                PULAR ({passQuestionAvailable})
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 row">
        <div className="mx-auto col">
          <div className="text-center projecoes">
            <div className="valor">
              {rewardPerLevel[currentLevel] / 2 === 500 ? "500" : (rewardPerLevel[currentLevel] / 2).toString().slice(0, -3) + " MIL"}
            </div>
            <p className="opcao">ERRAR</p>
          </div>
          <div className="text-center projecoes">
            <div className="valor">{rewardPerLevel[currentLevel].toString().slice(0, -3) + " MIL"}</div>
            <p
              className="opcao"
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
              PARAR
            </p>
          </div>
          <div className="text-center projecoes">
            <div className="valor">{currentLevel < 15 ? rewardPerLevel[currentLevel + 1].toString().slice(0, -3) + " MIL" : "1 MILHÃO"}</div>
            <p className="opcao">ACERTAR</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
