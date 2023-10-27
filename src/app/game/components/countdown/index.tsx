interface CountdownProps {
  timer: number;
}

export function Countdown({ timer }: CountdownProps): React.ReactElement {
  const timerValue = timer < 0 ? 0 : timer;
  return (
    <div className="relative p-10 my-4 rounded-full bg-surface0">
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-text">{timerValue}</div>
    </div>
  );
}
