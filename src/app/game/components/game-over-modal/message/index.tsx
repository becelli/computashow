import { Fragment } from "react";

import { GameOverMessage } from "~/app/game/components/game-over-modal/message/game-over-message";
import { GameWonMessage } from "~/app/game/components/game-over-modal/message/game-won-message";
import { GameState } from "~/app/game/entities/game-state";

interface ShowMessageProps {
  gameState: GameState;
  currentLevel: number;
}

export function Message({ gameState, currentLevel }: ShowMessageProps) {
  if (gameState === GameState.won) {
    return <GameWonMessage currentLevel={currentLevel} />;
  }
  if (gameState === GameState.over) {
    return <GameOverMessage currentLevel={currentLevel} />;
  }
  return <Fragment />;
}
