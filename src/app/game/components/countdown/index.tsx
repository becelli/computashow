import { Fragment } from "react";

interface CountdownProps {
  timer: number;
}

export function Countdown({ timer }: CountdownProps): React.ReactElement {
  if (timer === -1) {
    return <Fragment />;
  }

  return (
    <div className="absolute top-4 right-4">
      <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-gradient-to-bl from-blue-900 via-blue-700 to-blue-900">{timer}</div>
    </div>
  );
}
