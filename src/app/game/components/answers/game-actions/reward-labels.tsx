import { RewardPerLevel } from "~/data/rewards-per-level";

interface RewardLabelProps {
  currentLevel: number;
  rewardPerLevel: readonly RewardPerLevel[];
}

export function MissRewardLabel({ currentLevel, rewardPerLevel }: RewardLabelProps) {
  return (
    <span className="px-6 py-3 mr-4 text-white rounded-lg bg-gradient-to-bl from-red-900 via-red-600 to-red-900 hover:from-red-800 hover:to-red-800">
      <div className="valor">{rewardPerLevel[currentLevel] / 2 === 500 ? "500" : `${(rewardPerLevel[currentLevel] / 2).toString().slice(0, -3)} MIL`}</div>
      <p>ERRAR</p>
    </span>
  );
}

export function HitRewardLabel({ currentLevel, rewardPerLevel }: RewardLabelProps) {
  return (
    <span className="px-6 py-3 text-white rounded-lg bg-gradient-to-bl from-green-900 via-green-700 to-green-900 hover:from-green-800 hover:to-green-800">
      <div className="valor">{currentLevel < 15 ? `${rewardPerLevel[currentLevel + 1].toString().slice(0, -3)} MIL` : "1 MILHÃO"}</div>
      <p>ACERTAR</p>
    </span>
  );
}
