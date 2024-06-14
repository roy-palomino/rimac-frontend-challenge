import { FC } from "react";

interface Props {
};

const Separator: FC<Props> = () => {
  // Vertical separator like hr
  return (
    <div className="h-1 w-0.5 bg-gray-300 mx-2"></div>
  );
};

export default Separator;
