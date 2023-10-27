import { useTranslation } from "~/i18n/hooks/use-translation";

interface TryAgainButtonProps {
  returnToMainMenu: () => void;
}

export function ReturnToMenuButton({ returnToMainMenu: tryAgain }: TryAgainButtonProps) {
  const translation = useTranslation();
  return (
    <div className="mt-5 text-center">
      <button className="px-5 py-2 rounded-sm bg-red text-surface0" onClick={tryAgain}>
        {translation.inGame.gameOver.actions.backToMainMenu}
      </button>
    </div>
  );
}
