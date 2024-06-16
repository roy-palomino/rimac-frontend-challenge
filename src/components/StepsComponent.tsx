import { FC } from "react";

import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import ProgressBar from "./ProgressBar";

interface Props {}

const Steps: FC<Props> = () => {
  return (
    <div className="flex space-x-4 px-6 py-4 border-b border-[#D7DBF5] items-center">
      <button
        className="flex size-[24px] rounded-full border-2 border-gray-200 justify-center items-center"
      >
        <ChevronLeftIcon className="size-3 text-[#A9AFD9]" />
      </button>
      <span className="text-[10px] font-bold tracking-[0.8px]">PASO 1 DE 2</span>
      <ProgressBar progress={0} />
    </div>
  );
};

export default Steps;
