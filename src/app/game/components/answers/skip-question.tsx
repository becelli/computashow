import { useTranslation } from "~/i18n/hooks/use-translation";

interface SkipQuestionProps {
  passQuestion: () => void;
  passQuestionAvailable: number;
}

export function SkipQuestion({ passQuestion, passQuestionAvailable }: SkipQuestionProps) {
  const translation = useTranslation();
  return (
    <button
      className="w-full px-6 py-3 text-base duration-150 rounded-sm bg-yellow md:w-1/2 disabled:bg-surface0 disabled:text-surface2"
      onClick={passQuestion}
      disabled={passQuestionAvailable === 0}
    >
      {`${translation.inGame.actions.skip} (${passQuestionAvailable})`}
    </button>
  );
}
