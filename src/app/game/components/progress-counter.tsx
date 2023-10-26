import React from "react";

const ProgressCounter = ({ timer }: { timer: number }): React.ReactElement => {
  return (
    <div className="relative p-12 bg-neutral-100 rounded-full">
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">{timer}</div>
    </div>
  );
};

export default ProgressCounter;
