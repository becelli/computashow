import { useState } from "react";
import Home from "~/pages/home";
import SingleplayerGame from "~/pages/singleplayer";

export default function App(): React.ReactElement {
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  if (gameStarted) {
    return <SingleplayerGame setGameStarted={setGameStarted} />;
  }

  return <Home setGameStarted={setGameStarted} />;
}
