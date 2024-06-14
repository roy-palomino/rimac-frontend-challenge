import { FC } from "react";

import logoWhite from "../assets/logo-white.svg";

import Separator from "./Separator";

interface Props {
};

const Footer: FC<Props> = () => {
  return (
    <footer className="flex flex-col bg-[#03050F] py-8 px-6">
      <img src={logoWhite}></img>
      <Separator />
    </footer>
  );
};

export default Footer;
