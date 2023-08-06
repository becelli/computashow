import { IQuestion } from "~/data/questions-per-level/types";

export type QuestionProps = {
  beginCounter: number;
  currentQuestion: IQuestion;
};

export function Question({ beginCounter, currentQuestion }: QuestionProps) {
  if (beginCounter !== 0) {
    return <></>;
  }

  return (
    <div className="p-4 my-2 rounded-lg bg-gradient-to-bl from-red-900 via-red-600 to-red-900">
      <p className="m-0 text-lg select-none">{currentQuestion && currentQuestion.question}</p>
    </div>
  );
}
