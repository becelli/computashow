/* eslint-disable @typescript-eslint/no-misused-promises */
import { useGameContext } from "~/context/game-context";
import { useTranslation } from "~/i18n/hooks/use-translation";

export function StopButton() {
  const translation = useTranslation();
  const { leaveGame } = useGameContext();
  return (
    <button className="w-full px-6 py-3 duration-150 rounded-sm text-text bg-surface1 md:w-1/2 hover:bg-red hover:text-base" onClick={leaveGame}>
      <p>{String(translation.inGame.actions.stop)}</p>
    </button>
  );
}
