import { useRouter } from "next/router";

import { useQuestionTopicColor } from "~/data/questions/topic";
import { useTranslation } from "~/i18n/hooks/use-translation";

interface TryAgainButtonProps {
  tryAgain: () => void;
}

export function TryAgainButton({ tryAgain }: TryAgainButtonProps) {
  const translation = useTranslation();
  const bgColor = useQuestionTopicColor("bg", useRouter().query.topic);
  return (
    <div className="mt-5 text-center">
      <button className={`px-5 py-2 rounded-sm text-surface0 ${bgColor}`} onClick={tryAgain}>
        {translation.inGame.gameOver.actions.tryAgain}
      </button>
    </div>
  );
}
