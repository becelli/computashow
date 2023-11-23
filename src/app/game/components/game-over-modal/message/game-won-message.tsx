import { useTranslation } from "~/i18n/hooks/use-translation";

interface GameWonMessageProps {
  currentLevel: number;
}

export function GameWonMessage({ currentLevel }: GameWonMessageProps) {
  const translation = useTranslation();
  return <p className="uppercase">{String(translation.inGame.gameWon.message.replace("{points}", currentLevel.toString()))}</p>;
}
