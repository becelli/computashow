interface GameOverMessageProps {
  reward: string;
}

export function GameOverMessage({ reward }: GameOverMessageProps) {
  return (
    <p>
      Você ganhou <strong>{reward} reais</strong>! Ma oeee, senta lá!
    </p>
  );
}
