import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Home from "./home";
import Game from "./game";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  if (gameStarted) {
    return <Game setGameStarted={setGameStarted} />
  }

  return <Home setGameStarted={setGameStarted} />;
}
