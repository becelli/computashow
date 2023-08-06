import { useState } from "react";
import { Home } from "~/pages/home";
import { Game } from "~/pages/game";

export default function App(): React.ReactElement {
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  // if (gameStarted) {
  return <Game setGameStarted={setGameStarted} />;
  // }

  // return <Home setGameStarted={setGameStarted} />;
}
