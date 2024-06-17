import { FC } from "react";

import { usePlanStore } from "../store";

interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

interface Props {
  plan: Plan;
  isRecommended?: boolean;
  onSelected: () => void;
}

const PlanCard: FC<Props> = ({ plan, isRecommended, onSelected }) => {
  const setSelectedPlan = usePlanStore((state) => state.setSelectedPlan);

  function handlePlanSelected() {
    setSelectedPlan(plan.name, plan.price, plan.description, plan.age);
    onSelected();
  }

  return (
    <div
      className="group relative flex flex-col rounded-3xl pt-10 pb-12 px-8 bg-white shadow-rimac-shadow focus:outline-none data-[focus]:outline-1 !outline-[#A9AFD9] data-[checked]:bg-white/10 min-w-[288px]"
    >
      <div className="flex flex-col pb-6 mb-6 border-b border-[#D7DBF5]">
        <div className="mb-2 h-6">
          {isRecommended && (
            <div className="inline-block bg-[#7DF0BA] py-[2px] px-2 rounded-md text-[#141938] text-[12px] font-bold">
              Plan recomendado
            </div>
          )}
        </div>
        <div className="flex w-full mb-6">
          <div className="w-full">
            <h3 className="font-bold text-2xl leading-8 -tracking-[0.2px]">
              {plan.name}
            </h3>
          </div>
          <div className="bg-black rounded-xl size-14"></div>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[12px] text-[#7981B2] tracking-[0.6px]">
            COSTO DEL PLAN
          </span>
          <span className="font-semibold text-[#141938] text-xl -trackin-[0.2px]">
            ${plan.price} al mes
          </span>
        </div>
      </div>
      <ul className="text-[#141938] text-[16px] leading-8 tracking-[0.1px] space-y-6 mb-10">
        {plan.description.map((descriptionItem, i) => (
          <li key={i} className="flex flex-row">
            <span>&bull;</span>
            <div className="ml-2 flex flex-col">
              <p>{descriptionItem}</p>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={() => handlePlanSelected()}
        className="bg-[#FF1C44] text-white w-full h-12 rounded-[32px] text-lg tracking-[0.4px] mt-auto"
      >
        Seleccionar Plan
      </button>
    </div>
  );
};

export default PlanCard;
