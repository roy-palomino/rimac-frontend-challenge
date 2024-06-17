import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import ProgressBar from "./ProgressBar";

interface Props {
  current: number;
  total: number;
}

const MobileSteps: FC<Props> = ({ current, total }) => {
  const navigate = useNavigate();
  return (
    <div className="flex space-x-4 px-6 py-4 border-b border-[#D7DBF5] bg-[#F8F9FF] items-center">
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

const DesktopSteps: FC<Props> = ({ current }) => {
  const steps = [
    { number: 1, text: "Planes y coberturas" },
    { number: 2, text: "Resumen" },
  ];

  return (
    <div className="flex bg-[#EDEFFC] h-[56px] items-center justify-center">
      <div>
        <ul className="flex space-x-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className={`flex items-center px-4 py-2 text-[#141938] font-bold text-[12px] tracking-[0.6px] ${
                current === step.number ? "text-[#141938]" : "text-[#7981B2]"
              }`}
            >
              <div
                className={`flex items-center justify-center rounded-full size-6 ${current === step.number ? "bg-[#4F4FFF] text-white text-center" : "border border-[#7981B2] text-[#7981B2] text-center"}`}
              >
                {step.number}
              </div>
              <span className="ml-2">{step.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Steps: FC<Props> = ({ current, total }) => {
  return (
    <>
      <div className="block md:hidden">
        <MobileSteps current={current} total={total} />
      </div>
      <div className="hidden md:block">
        <DesktopSteps current={current} total={total} />
      </div>
    </>
  );
};

export default Steps;
