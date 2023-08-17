interface GameWonMessageProps {
  reward: string;
}

export function GameWonMessage({ reward }: GameWonMessageProps) {
  return (
    <p className="uppercase">
      Parabéns!!! Você ganhou <strong>{reward} reais</strong>!
    </p>
  );
}
