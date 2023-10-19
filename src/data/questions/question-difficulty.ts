export enum QuestionDifficulty {
  easy = "easy",
  medium = "medium",
  hard = "hard",
}

export function calculateQuestionDifficulty(level: number, maxLevel: number) {
  return Object.values(QuestionDifficulty)[Math.floor((level / maxLevel) * 3)];
}
