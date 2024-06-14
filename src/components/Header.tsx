import { FC } from "react";

interface Props {
};

const Header: FC<Props> = () => {
  return (
    <nav className="flex flex-row justify-between w-full h-[56px] bg-blue-50 px-6 py-3 items-center">
      <div>Rimac logo</div>
      <div>(01) 411 6001</div>
    </nav>
  );
};

export default Header;
