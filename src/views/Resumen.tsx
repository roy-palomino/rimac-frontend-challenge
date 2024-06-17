import { FC } from "react";

import Header from "../components/Header";
import ResumeCard from "../components/ResumeCard";
import Steps from "../components/StepsComponent";

const Resumen: FC = () => {
  return (
    <>
      <Header />
      <main className="h-full">
        <Steps current={2} total={2} />
        <div className="pt-8 pb-5 px-6 bg-[#FAFBFF] h-svh">
          <h1 className="text-[#141938] font-semibold text-[28px] leading-10 -tracking-[0.6px] pb-10">Resumen del seguro</h1>
          <ResumeCard />
        </div>
      </main>
    </>
  );
};

export default Resumen;
