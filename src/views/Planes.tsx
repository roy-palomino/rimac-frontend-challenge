import { FC } from "react";

import Header from "../components/Header";
import QuoteOptions from "../components/QuoteOptions";
import Steps from "../components/StepsComponent";
import PlanCard from "../components/PlanCard";
import Pagination from "../components/Pagination";

interface Props {}

const Planes: FC<Props> = () => {
  return (
    <>
      <Header />
      <main>
        <Steps />

        <div className="py-8 bg-[#FAFBFF]">
          <div className="text-[#141938] pb-8 px-6">
            <h2 className="font-bold text-[28px] leading-[36px] -tracking-[0.2px]">
              Rocío ¿Para quién deseas cotizar?
            </h2>
            <p className="leading-7 -tracking-[0.1px] mt-2">
              Selecciona la opción que se ajuste más a tus necesidades.
            </p>
          </div>
          <div className="pb-8 px-6">
            <QuoteOptions />
          </div>
          <div className="flex flex-row overflow-scroll space-x-8 pt-8 px-12 pb-9 mb-8">
            <PlanCard />
            <PlanCard />
            <PlanCard />
          </div>
          <Pagination current={1} total={3}/>
        </div>
      </main>
    </>
  );
};

export default Planes;
