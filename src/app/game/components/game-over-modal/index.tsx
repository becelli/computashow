import { Message } from "~/app/game/components/game-over-modal/message";
import { ReturnToMenuButton } from "~/app/game/components/game-over-modal/return-to-menu-button";
import { TryAgainButton } from "~/app/game/components/game-over-modal/try-again-button";
import { GameState } from "~/app/game/entities/game-state";
import { UnclosableModal } from "~/components/unclosable-modal";
import { useTranslation } from "~/i18n/hooks/use-translation";

interface GameOverModalProps {
  gameState: GameState;
  currentLevel: number;
  restartGame: () => void;
  leaveGame: () => void;
}

export function GameOverModal({ gameState, currentLevel, restartGame, leaveGame }: GameOverModalProps) {
  const translation = useTranslation();

  function getGameOverTitle(): string {
    switch (gameState) {
      case GameState.over:
        return translation.inGame.gameState.over;
      case GameState.won:
        return translation.inGame.gameState.won;
      case GameState.playing: // if "playing", the time has exceeded the limit
        return translation.inGame.gameState.playing;
    }
  }

  return (
    <UnclosableModal title={getGameOverTitle()} showModal={true}>
      <section>
        <Message gameState={gameState} currentLevel={currentLevel} />
        <TryAgainButton tryAgain={restartGame} />
        <ReturnToMenuButton returnToMainMenu={leaveGame} />
      </section>
    </UnclosableModal>
  );
}
