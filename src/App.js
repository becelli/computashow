import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import './App.css';

function App() {
  // States
  const [gameStarted, setGameStarted] = useState(false);

  // Render
  return gameStarted ? (
    <Game setGameStarted={setGameStarted} />
  ) : (
    <Home setGameStarted={setGameStarted} />
  );
}

export default App;
