import { Message } from "~/app/game/components/game-over-modal/message";
import { TryAgainButton } from "~/app/game/components/game-over-modal/try-again-button";
import { GameState } from "~/app/game/entities/game-state";
import { UnclosableModal } from "~/components/unclosable-modal";
import { useTranslation } from "~/i18n/hooks/use-translation";

export function GameOverModal({ gameState, currentLevel, restartGame }: { gameState: GameState; currentLevel: number; restartGame: () => void }) {
  const translation = useTranslation();

  function getGameOverTitle(): string {
    switch (gameState) {
      case GameState.over:
        return translation.game.gameState.over;
      case GameState.won:
        return translation.game.gameState.won;
      case GameState.playing: // if "playing", the time has exceeded the limit
        return translation.game.gameState.playing;
    }
  }

  return (
    <UnclosableModal title={getGameOverTitle()} showModal={true}>
      <section className="text-black">
        <Message gameState={gameState} currentLevel={currentLevel} />
        <TryAgainButton tryAgain={restartGame} />
      </section>
    </UnclosableModal>
  );
}
