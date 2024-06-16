import { FC } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { classNames } from "../utils/classnames";

interface Props {
  current: number;
  total: number;
}

const MyComponent: FC<Props> = ({ current = 1, total = 3 }) => {
  return (
    <div className="max-w-[296px] mx-auto flex space-x-4 justify-center">
      <button
        className={classNames(
          "flex border-2 size-7 rounded-full items-center justify-center",
          current == 1 ? "border-[#A9AFD9]" : "border-[#4F4FFF]",
        )}
      >
        <ChevronLeftIcon className="size-4 stroke-[#4F4FFF] text-[#4F4FFF]" />
      </button>
      <p className="text-[#141938] tracking-[0.2px] font-light">
        {current} / {total}
      </p>
      <button
        className={classNames(
          "flex border-2 border-[#4F4FFF] size-7 rounded-full items-center justify-center",
          current == total ? "border-[#A9AFD9]" : "border-[#4F4FFF]",
        )}
      >
        <ChevronRightIcon className="size-4 stroke-[#4F4FFF] text-[#4F4FFF]" />
      </button>
    </div>
  );
};

export default MyComponent;
