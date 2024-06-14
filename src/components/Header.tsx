import { FC } from "react";

import logo from "../assets/logo.svg";
import { PhoneIcon } from "@heroicons/react/24/solid";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <nav className="flex flex-row justify-between w-full h-[56px] px-6 py-3 items-center">
      <img src={logo}></img>
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
