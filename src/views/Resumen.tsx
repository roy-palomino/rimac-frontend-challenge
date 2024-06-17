import { FC } from "react";

import Header from "../components/Header";
import ResumeCard from "../components/ResumeCard";
import Steps from "../components/StepsComponent";
import BackButton from "../components/BackButton";

const Resumen: FC = () => {
  return (
    <>
      <Header />
      <main className="h-full">
        <Steps current={2} total={2} />
        <div className="pt-8 pb-5 px-6 bg-[#FAFBFF] h-svh md:max-w-[1155px] md:mx-auto md:px-24">
          <div className="hidden mb-4 md:block">
            <BackButton />
          </div>
          <h1 className="text-[#141938] font-semibold text-[28px] leading-10 -tracking-[0.6px] pb-10">
            Resumen del seguro
          </h1>
          <ResumeCard />
        </div>
      </main>
    </>
  );
};

export default Resumen;
