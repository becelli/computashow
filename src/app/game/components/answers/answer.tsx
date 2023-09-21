interface QuestionAnswerProps {
  option: string;
  number: number;
  answerQuestion: (answer: number) => void;
  correctAnswer: boolean;
  response: number;
}

export function Answer({ option, number, answerQuestion, correctAnswer, response }: QuestionAnswerProps) {
  function getBackgroundColor(number: number, correctAnswer: boolean) {
    if (correctAnswer && number === response) {
      return "from-green-900 via-green-700 to-green-900";
    }
    return "bg-gray-100 border-2 border-gray-300 hover:bg-gray-200 shadow-sm";
  }

  function onClick() {
    answerQuestion(number + 1);
  }

  return (
    <button
      onClick={onClick}
      className={`md:min-h-[128px] w-full p-3 m-2 mx-auto text-lg rounded-lg duration-500 ${getBackgroundColor(number + 1, correctAnswer)}`}
    >
      {option}
    </button>
  );
}
