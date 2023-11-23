import { useTranslation } from "~/i18n/hooks/use-translation";

interface GameOverMessageProps {
  currentLevel: number;
}

export function GameOverMessage({ currentLevel }: GameOverMessageProps) {
  const translation = useTranslation();
  return <p>{String(translation.inGame.gameOver.message.replace("{points}", currentLevel.toString()))}</p>;
}
