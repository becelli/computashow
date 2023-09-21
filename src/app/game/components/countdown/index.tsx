import { Fragment } from "react";

import ProgressCounter from "~/app/game/components/progress-bar";

interface CountdownProps {
  timer: number;
  initialTime: number;
}

export function Countdown({ timer, initialTime }: CountdownProps): React.ReactElement {
  if (timer === -1) {
    return <Fragment />;
  }

  return <ProgressCounter timer={timer} initialTime={initialTime} />;
}
