import { Fragment } from "react";
import { UnclosableModal } from "~/components/unclosable-modal";
import { IQuestion } from "~/data/questions-per-level/types";
import { rewardPerLevel } from "~/data/rewards-per-level";

export function GameOverModal({
  title,
  showModal,
  setShowModal,
  currentQuestion,
  timeToAnswer,
  gameOver,
  gameWon,
  currentLevel,
  setGameStarted,
}: {
  title: string;
  showModal: boolean;
  setShowModal: any;
  currentQuestion: IQuestion | null;
  timeToAnswer: number;
  gameOver: boolean;
  gameWon: boolean;
  currentLevel: number;
  setGameStarted: (value: boolean) => void;
}) {
  if (!currentQuestion) {
    return <Fragment />;
  }
  const correctAnswer = currentQuestion.options[currentQuestion.response - 1];
  const reward = currentLevel === 1 ? "500" : `${(rewardPerLevel[currentLevel] / 2).toString().slice(0, -3)} mil`;
  return (
    <UnclosableModal title={title} showModal={showModal}>
      <section className="text-black ">
        <GameWonMessage isVisible={gameWon} />
        <GameOverMessage timeToAnswer={timeToAnswer} isVisible={gameOver} reward={reward} />
        <TryAgainButton setGameStarted={setGameStarted} setShowModal={setShowModal} />
      </section>
    </UnclosableModal>
  );
}

function GameWonMessage({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) {
    return <Fragment />;
  }
  return (
    <p>
      Parabéns!!! Você ganhou <strong>1 MILHÃO DE REAIS</strong>!
    </p>
  );
}

function GameOverMessage({ timeToAnswer, isVisible, reward }: { timeToAnswer: number; isVisible: boolean; reward: string }) {
  if (timeToAnswer !== 0 && !isVisible) {
    return <Fragment />;
  }

  return (
    <p>
      Você ganhou <strong>{reward} reais</strong>! Ma oeee, senta lá!
    </p>
  );
}

function CorrectAnswerField({ isVisible, correctAnswer }: { isVisible: boolean; correctAnswer: string }) {
  if (!isVisible) {
    return <Fragment />;
  }
  return (
    <Fragment>
      <h1>A resposta está errada! A opção correta era:</h1>
      <div className="px-4 py-2 my-3 text-justify bg-gray-100 rounded-lg">{correctAnswer}</div>
    </Fragment>
  );
}

function TryAgainButton({ setGameStarted, setShowModal }: { setGameStarted: (value: boolean) => void; setShowModal: (value: boolean) => void }) {
  const handleClick = () => {
    setGameStarted(false);
    setShowModal(false);
  };

  return (
    <div className="mt-5 text-center">
      <button className="px-5 py-2 bg-blue-300 rounded-lg" onClick={handleClick}>
        Jogar novamente
      </button>
    </div>
  );
}
