import { Fragment } from "react";

import ProgressCounter from "~/app/game/components/progress-counter";

interface CountdownProps {
  timer: number;
}

export function Countdown({ timer }: CountdownProps): React.ReactElement {
  if (timer === -1) {
    return <Fragment />;
  }

  return <ProgressCounter timer={timer} />;
}
