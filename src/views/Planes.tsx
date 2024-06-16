import { FC } from "react";

import Header from "../components/Header";
import QuoteOptions from "../components/QuoteOptions";
import Steps from "../components/StepsComponent";

interface Props {}

const Planes: FC<Props> = () => {
  return (
    <>
      <Header />
      <main>
        <Steps />

        <div className="px-6 py-8">
          <div className="text-[#141938] pb-8">
            <h2 className="font-bold text-[28px] leading-[36px] -tracking-[0.2px]">
              Rocío ¿Para quién deseas cotizar?
            </h2>
            <p className="leading-7 -tracking-[0.1px] mt-2">
              Selecciona la opción que se ajuste más a tus necesidades.
            </p>
          </div>
          <div>
            <QuoteOptions />
          </div>
        </div>
      </main>
    </>
  );
};

export default Planes;
