import { FC, useState, useEffect } from "react";

import { RadioGroup } from "@headlessui/react";

import forMeIcon from "../assets/for-me-icon.svg";
import forAnyoneElse from "../assets/for-anyone-else.svg";

import QuoteCard from "./QuoteCard";

const plans = [
  {
    title: "Para mí",
    description:
      "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
    icon: forMeIcon,
  },
  {
    title: "Para alguien más",
    description:
      "Realiza una cotización para uno de tus familiares o cualquier persona.",
    icon: forAnyoneElse,
  },
];

interface Props {
  onSelected: () => void;
}

const QuoteOptions: FC<Props> = ({ onSelected }) => {
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (selected) {
      onSelected();
    }
  }, [selected]);

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md md:max-w-[544px]">
        <RadioGroup
          // @ts-ignore
          by="title"
          value={selected}
          onChange={setSelected}
          className="space-y-6 md:flex md:flex-row md:space-y-0 md:space-x-6 md:justify-center md:items-center"
        >
          {plans.map((plan, i) => (
            <QuoteCard plan={plan} key={i} />
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default QuoteOptions;
