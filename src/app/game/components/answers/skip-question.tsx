import { useTranslation } from "~/i18n/hooks/use-translation";

interface SkipQuestionProps {
  passQuestion: () => void;
  passQuestionAvailable: number;
}

export function SkipQuestion({ passQuestion, passQuestionAvailable }: SkipQuestionProps) {
  const translation = useTranslation();
  return (
    <div className="mt-4 row">
      <div className="max-w-xs mx-auto col">
        <div className="text-center">
          {passQuestionAvailable > 0 && (
            <button
              className="px-6 py-3 text-white rounded-lg bg-gradient-to-bl from-yellow-900 via-yellow-700 to-yellow-900 hover:from-yellow-800 hover:to-yellow-800"
              onClick={passQuestion}
            >
              {`${translation.game.actions.skip} (${passQuestionAvailable})`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
