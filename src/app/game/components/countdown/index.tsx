import { useGameContext } from "~/context/game-context";

interface CountdownProps {
  isStarting?: boolean;
}

export function Countdown({ isStarting }: CountdownProps): React.ReactElement {
  const { timeToAnswerLeft, timeToBeginGameLeft } = useGameContext();
  const timerValueCalculator = (timer: number) => (timer < 0 ? 0 : timer);
  const timerValue = isStarting ? timerValueCalculator(timeToBeginGameLeft) : timerValueCalculator(timeToAnswerLeft);

  return (
    <div className="relative p-10 my-4 rounded-full bg-surface0">
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-text">{timerValue}</div>
    </div>
  );
}
