import { useGameContext } from "~/context/game-context";
import { useTranslation } from "~/i18n/hooks/use-translation";

interface SkipQuestionProps {
  passQuestionAvailable: number;
}

export function SkipQuestion({ passQuestionAvailable }: SkipQuestionProps) {
  const translation = useTranslation();
  const { skipQuestion } = useGameContext();
  return (
    <button
      className="w-full px-6 py-3 duration-150 rounded-sm text-text hover:text-base hover:bg-yellow md:w-1/2 bg-surface1 disabled:bg-surface0 disabled:text-surface2"
      onClick={skipQuestion}
      disabled={passQuestionAvailable === 0}
    >
      {`${translation.inGame.actions.skip} (${passQuestionAvailable})`}
    </button>
  );
}
