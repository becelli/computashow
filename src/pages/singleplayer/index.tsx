import Game from "~/app/game";

interface SingleplayerGameProps {
  setGameStarted: (gameStarted: boolean) => void;
}

export default function SingleplayerGame({ setGameStarted }: SingleplayerGameProps): React.ReactElement {
  return <Game setGameStarted={setGameStarted} />;
}
