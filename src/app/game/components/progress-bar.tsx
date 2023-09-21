import React from "react";

const Spinner = ({ timer }: { timer: number }): React.ReactElement => {
  return (
    <div className="relative w-2/3 h-24 bg-gray-100 rounded-b-full">
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">{timer}</div>
    </div>
  );
};

export default Spinner;
