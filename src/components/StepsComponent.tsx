import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import ProgressBar from "./ProgressBar";

interface Props {
  current: number;
  total: number;
}

const Steps: FC<Props> = ({ current, total }) => {
  const navigate = useNavigate();
  return (
    <div className="flex space-x-4 px-6 py-4 border-b border-[#D7DBF5] items-center">
      <button
        className="flex size-[24px] rounded-full border-2 border-gray-200 justify-center items-center"
        onClick={() => navigate(-1)}
      >
        <ChevronLeftIcon className="size-3 text-[#A9AFD9]" />
      </button>
      <span className="text-[10px] font-bold tracking-[0.8px]">
        PASO {current} DE {total}
      </span>
      <ProgressBar progress={(current / total) * 100} />
    </div>
  );
};

export default Steps;
