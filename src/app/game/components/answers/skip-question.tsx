import { useTranslation } from "~/i18n/hooks/use-translation";

interface SkipQuestionProps {
  passQuestion: () => void;
  passQuestionAvailable: number;
}

export function SkipQuestion({ passQuestion, passQuestionAvailable }: SkipQuestionProps) {
  const translation = useTranslation();
  return (
    <button
      className="w-full px-6 py-3 text-white duration-150 bg-yellow-500 rounded-md md:w-1/2 hover:bg-yellow-800 disabled:bg-gray-300 disabled:text-gray-400"
      onClick={passQuestion}
      disabled={passQuestionAvailable === 0}
    >
      {`${translation.game.actions.skip} (${passQuestionAvailable})`}
    </button>
  );
}
