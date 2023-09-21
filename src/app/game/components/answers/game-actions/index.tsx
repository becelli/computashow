import { StopButton } from "~/app/game/components/answers/game-actions/stop-button";

interface ActionLabelsProps {
  stopGame: () => void;
}

export function GameActions({ stopGame }: ActionLabelsProps) {
  return <StopButton stopGame={stopGame} />;
}
