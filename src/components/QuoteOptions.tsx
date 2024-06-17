import { FC, useState, useEffect } from "react";

import { RadioGroup } from "@headlessui/react";

import QuoteCard from "./QuoteCard";

const plans = [
  {
    title: "Para mí",
    description:
      "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
    icon: "icon1",
  },
  {
    title: "Para alguien más",
    description:
      "Realiza una cotización para uno de tus familiares o cualquier persona.",
    icon: "icon2",
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
      <div className="mx-auto w-full max-w-md">
        <RadioGroup
          // @ts-ignore
          by="title"
          value={selected}
          onChange={setSelected}
          className="space-y-6"
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
