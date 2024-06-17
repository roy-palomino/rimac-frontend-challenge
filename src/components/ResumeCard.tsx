import { FC } from "react";

import usersIcon from "../assets/users-icon.svg";

import { useUserStore, usePlanStore } from "../store/index";

interface Props {}

const ResumeCard: FC<Props> = () => {
  const user = useUserStore((state) => state);
  const plan = usePlanStore((state) => state);

  return (
    <div className="flex flex-col shadow-rimac-shadow rounded-3xl px-8 py-6 bg-white text-[#141938]">
      <div className="flex flex-col">
        <h3 className="font-semibold text-[10px] leading-4 tracking-[0.8px]">
          PRECIOS CALCULADOS PARA:
        </h3>
        <div className="flex flex-row space-x-3 items-center">
          <img src={usersIcon} className="size-5"></img>
          <p className="font-bold text-xl leading-7 -tracking-[0.2px]">
            {user.name} {user.lastName}
          </p>
        </div>
      </div>
      <hr className="fill-[#D7DBF5] my-4" />
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <h4 className="font-semibold leading-6 tracking-[0.2px]">
            Responsable de pago
          </h4>
          <p className="text-sm tracking-[0.1px] leading-6 font-light">
            DNI: {user.doc_number}
          </p>
          <p className="text-sm tracking-[0.1px] leading-6 font-light">
            Celular: {user.phone}
          </p>
        </div>
        <div>
          <h4 className="font-semibold leading-6 tracking-[0.2px]">
            Plan elegido
          </h4>
          <p className="text-sm tracking-[0.1px] leading-6 font-light">
            {plan.name}
          </p>
          <p className="text-sm tracking-[0.1px] leading-6 font-light">
            Costo del plan: ${plan.price} al mes
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
