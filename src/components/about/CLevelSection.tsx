import { cLevel, cLevelDataType } from "@/data/clevelData";
import CardCLevel from "./CardCLevel";

export default function CLevelSection() {
  return (
    <section className="w-full h-full bg-white md:px-[70px] px-5 pb-24">
      {/* Section Title */}
      <div>
        <h3 className="text-[#90A3BF] xl:text-base text-sm font-normal text-center">
          Our C-Levels
        </h3>
        <h2 className="text-primary xl:text-[40px] text-[36px] font-semibold text-center pt-[10px]">
          C-Levels That Support CC
        </h2>
      </div>
      {/* Division Members */}
      <div className="flex pt-6 lg:flex-row lg:mx-auto lg:flex-wrap lg:w-1/2 lg:gap-x-24 lg:gap-y-4 xxsm:flex-col xxsm:justify-center">
        {cLevel.map((data: cLevelDataType) => (
          <CardCLevel
            key={data.id}
            img={data.img}
            name={data.name}
            chair={data.position}
          />
        ))}
      </div>
    </section>
  );
}
