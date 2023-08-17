import { Fragment } from "react";

import { GameState } from "~/app/game/entities/game-state";
import { rewardPerLevel } from "~/data/rewards-per-level";

import { GameOverMessage } from "./game-over-message";
import { GameWonMessage } from "./game-won-message";

interface ShowMessageProps {
  gameState: GameState;
  currentLevel: number;
}

export function Message({ gameState, currentLevel }: ShowMessageProps) {
  if (gameState === GameState.won) {
    return <GameWonMessage reward={rewardPerLevel[currentLevel].toString()} />;
  }
  if (gameState === GameState.over) {
    return <GameOverMessage reward={rewardPerLevel[currentLevel].toString()} />;
  }
  return <Fragment />;
}
