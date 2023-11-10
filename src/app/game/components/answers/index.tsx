import { Answer } from "~/app/game/components/answers/answer";
import { useGameContext } from "~/context/game-context";
import { Question } from "~/data/questions/question";

export interface AnswerProps {
  currentQuestion: Question;
  correctAnswer: boolean;
}

export function Answers({ currentQuestion, correctAnswer }: AnswerProps) {
  const { answerQuestion } = useGameContext();
  return (
    <div className="">
      <div className="grid w-full md:gap-4 md:grid-cols-2">
        {currentQuestion.answers.map((option: string, number: number) => (
          <Answer
            key={number}
            option={option}
            number={number}
            answerQuestion={answerQuestion}
            correctAnswer={correctAnswer}
            response={currentQuestion.correctResponse}
          />
        ))}
      </div>
    </div>
  );
}
