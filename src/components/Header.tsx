import { FC } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";
import { PhoneIcon } from "@heroicons/react/24/solid";

const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-row justify-between w-full h-[56px] px-6 py-3 items-center">
      <img onClick={() => navigate("/")} src={logo}></img>
      <div className="flex flex-row items-center">
        <PhoneIcon className="size-4" />

        <span className="ml-2 font-bold text-[16px] leading-5">
          (01) 411 6001
        </span>
      </div>
    </nav>
  );
};

export default Header;
