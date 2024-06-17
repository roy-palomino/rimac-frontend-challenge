import { FC } from "react";

import { Radio } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface Props {
  plan: {
    title: string;
    description: string;
    icon: string;
  };
}

const QuoteCard: FC<Props> = ({ plan }) => {
  return (
    <Radio
      key={plan.title}
      value={plan}
      className="group relative flex cursor-pointer bg-white rounded-3xl pt-4 pb-10 px-6 shadow-rimac-shadow focus:outline-none data-[focus]:outline-1 !outline-[#141938] md:!w-[256px] md:h-[230px]"
    >
      <div className="flex flex-col w-full items-end">
        <div className="size-5 border border-[#A9AFD9] rounded-full relative">
          <CheckCircleIcon className="size-6 fill-[#389E0D] opacity-0 transition group-data-[checked]:opacity-100 rounded-full absolute -right-[3px] -bottom-[3px]" />
        </div>
        <div className="w-full">
          <div className="flex mb-2 space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            <img className="size-7 md:size-12" src={plan.icon}></img>
            <p className="font-semibold text-xl leading-7 -tracking-[0.2px] text-[#141938]">
              {plan.title}
            </p>
          </div>
          <div className="text-[#141938] text-xs leading-5 tracking-[0.2px]">
            <div>{plan.description}</div>
          </div>
        </div>
      </div>
    </Radio>
  );
};

export default QuoteCard;
