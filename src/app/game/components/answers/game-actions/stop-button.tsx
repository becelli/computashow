import { useTranslation } from "~/i18n/hooks/use-translation";

interface StopButtonProps {
  stopGame: () => void;
}

export function StopButton({ stopGame }: StopButtonProps) {
  const translation = useTranslation();
  return (
    <button className="w-full px-6 py-3 text-white duration-150 bg-red-500 rounded-md md:w-1/2 hover:bg-red-800" onClick={stopGame}>
      <p>{String(translation.game.actions.stop)}</p>
    </button>
  );
}
