import { Answer } from "~/app/game/components/answers/answer";
import { Question } from "~/data/questions/question";

export interface AnswerProps {
  currentQuestion: Question;
  answerQuestion: (answer: number) => void;
  correctAnswer: boolean;
}

export function Answers({ currentQuestion, answerQuestion, correctAnswer }: AnswerProps) {
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
