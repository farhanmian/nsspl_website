import React from "react";

const ProgressBar = ({ percent, title }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h1 className="uppercase">{title}</h1>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-[#2AA126ff] h-2.5 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
