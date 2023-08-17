import { HitRewardLabel, MissRewardLabel } from "~/app/game/components/answers/game-actions/reward-labels";
import { StopButton } from "~/app/game/components/answers/game-actions/stop-button";
import { RewardPerLevel } from "~/data/rewards-per-level";

interface ActionLabelsProps {
  currentLevel: number;
  stopGame: () => void;
  rewardPerLevel: readonly RewardPerLevel[];
}

export function GameActions({ currentLevel, stopGame, rewardPerLevel }: ActionLabelsProps) {
  return (
    <div className="flex justify-center mt-5 space-x-6">
      <div className="flex justify-between w-full mx-auto col">
        <MissRewardLabel currentLevel={currentLevel} rewardPerLevel={rewardPerLevel} />
        <StopButton currentLevel={currentLevel} stopGame={stopGame} rewardPerLevel={rewardPerLevel} />
        <HitRewardLabel currentLevel={currentLevel} rewardPerLevel={rewardPerLevel} />
      </div>
    </div>
  );
}
