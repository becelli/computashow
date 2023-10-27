import { RewardPerLevel } from "~/data/rewards-per-level";
import { useTranslation } from "~/i18n/hooks/use-translation";

interface RewardLabelProps {
  currentLevel: number;
  rewardPerLevel: readonly RewardPerLevel[];
}

export function MissRewardLabel({ currentLevel, rewardPerLevel }: RewardLabelProps) {
  const translation = useTranslation();
  return (
    <span className="px-6 py-3 mr-4 text-text duration-150 bg-red-600 rounded-sm bg-gradient-to-bl hover:bg-red-800">
      <div>{rewardPerLevel[currentLevel] / 2 === 500 ? "500" : `${(rewardPerLevel[currentLevel] / 2).toString().slice(0, -3)} MIL`}</div>
      <p>{translation.inGame.actions.miss}</p>
    </span>
  );
}

export function HitRewardLabel({ currentLevel, rewardPerLevel }: RewardLabelProps) {
  const translation = useTranslation();
  return (
    <span className="px-6 py-3 text-text duration-150 bg-green-600 rounded-sm bg-gradient-to-bl hover:bg-green-800">
      <div>{currentLevel < 15 ? `${rewardPerLevel[currentLevel + 1].toString().slice(0, -3)} MIL` : "1 MILHÃO"}</div>
      <p>{translation.inGame.actions.hit}</p>
    </span>
  );
}
