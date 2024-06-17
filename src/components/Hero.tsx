import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="grid grid-cols-10 gap-3 h-40">
      <div className="col-span-6 self-center md:col-span-10">
        <h1 className="bg-gradient-to-r from-[#00F4E2] to-[#00FF7F] text-[12px] font-bold w-[151px] h-5 text-center rounded mb-2 pt-[2px] px-2">
          Seguro Salud Flexible
        </h1>
        <p className="text-[28px] font-bold leading-9">
          Creado para ti y tu familia
        </p>
      </div>
      <img
        className="z-50 col-span-4 transform -scale-x-100 w-full h-full object-cover rounded-2xl md:hidden"
        src="/images/hero-image.png"
        alt=""
      />
    </section>
  );
};

export default Hero;
