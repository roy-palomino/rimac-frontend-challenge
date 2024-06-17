import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const BackButton: FC = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex flex-row space-x-2 text-[#4F4FFF] items-center"
    >
      <div className="rounded-full border-2 border-[#4F4FFF] p-1">
        <ChevronLeftIcon className="size-3 stroke-[#4F4FFF]" />
      </div>
      <p className="text-lg font-semibold">Volver</p>
    </button>
  );
};

export default BackButton;
