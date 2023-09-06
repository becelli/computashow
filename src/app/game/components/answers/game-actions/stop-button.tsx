import { RewardPerLevel } from "~/data/rewards-per-level";
import { useTranslation } from "~/i18n/hooks/use-translation";

interface StopButtonProps {
  currentLevel: number;
  stopGame: () => void;
  rewardPerLevel: readonly RewardPerLevel[];
}

export function StopButton({ currentLevel, stopGame, rewardPerLevel }: StopButtonProps) {
  // const translation = useTranslation();
  return (
    <button
      className="px-6 py-3 mr-4 text-white rounded-lg bg-gradient-to-bl from-blue-900 via-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-800"
      onClick={() => {
        if (window.confirm(`Tem certeza de que deseja parar?\nVocê ganhará ${rewardPerLevel[currentLevel].toString().slice(0, -3)} mil reais.`)) {
          stopGame();
        }
      }}
    >
      {/* <div>{`${rewardPerLevel[currentLevel].toString().slice(0, -3)} MIL`}</div> */}
      <div>{`${rewardPerLevel[currentLevel].toString().slice(0, -3)} MIL`}</div>
      <p>PARAR</p>
    </button>
  );
}
