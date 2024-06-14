import { FC } from "react";

import { classNames } from "../utils/classnames";

interface Props {
  className?: string;
}

const Separator: FC<Props> = ({ className }) => {
  return (
    <div
      className={classNames(
        "w-full h-0.5 my-6 lg:hidden",
        className || "bg-[#CCD1EE] opacity-65",
      )}
    ></div>
  );
};

export default Separator;
