import { FC } from "react";

interface Props {
  progress: number;
}

const ProgressBar: FC<Props> = ({ progress = 5 }) => {
  return (
    <div className="w-[212px] h-1.5 bg-[#D7DBF5] rounded-full">
      <div
        className="h-full bg-[#4F4FFF] rounded-full transition-all duration-300"
        style={{ width: `${progress || 5}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
