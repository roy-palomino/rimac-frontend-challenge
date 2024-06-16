import { FC } from "react";

import logoWhite from "../assets/logo-white.svg";

import Separator from "./Separator";

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <footer className="flex flex-col bg-[#03050F] py-8 items-center">
      <img className="w-[138px] h-5" src={logoWhite}></img>
      <Separator className="bg-[#2B304E]" />
      <p className="text-white text-xs tracking-[0.1px]">
        &copy; 2023 RIMAC Seguros y Reaseguros.
      </p>
    </footer>
  );
};

export default Footer;
