import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className="px-6 pb-16">{children}</div>;
};

export default Container;
