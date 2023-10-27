import { useTranslation } from "~/i18n/hooks/use-translation";

interface StopButtonProps {
  stopGame: () => void;
}

export function StopButton({ stopGame }: StopButtonProps) {
  const translation = useTranslation();
  return (
    <button className="w-full px-6 py-3 duration-150 rounded-sm text-text bg-surface1 md:w-1/2 hover:bg-red hover:text-base" onClick={stopGame}>
      <p>{String(translation.inGame.actions.stop)}</p>
    </button>
  );
}
