import Progress, { ProgressType } from "./Progress";
import Select from "./Select";
import styles from "@/styles/border.module.css";

const month = [
  { name: "Jun", value: "jun" },
  { name: "Jul", value: "jul" },
  { name: "Aug", value: "aug" },
  { name: "Sep", value: "sep" },
];

const performance: ProgressType[] = [
  { title: "Activeness", grade: "A", score: 80 },
  { title: "Ability", grade: "A", score: 80 },
  { title: "Communication", grade: "C", score: 40 },
  { title: "Discipline", grade: "A", score: 100 },
  { title: "Average", grade: "Great", score: 75, variant: "BLUE" },
];

export default function PerformanceGrade() {
  return (
    <section
      id="fifth-driver"
      className={`${styles.border_section} h-full  relative rounded-[8px]  p-5 bg-[#0D2735]`}
    >
      <div className="flex items-center justify-between relative">
        <h3>Performance Grade</h3>
        <Select data={month} />
      </div>
      <div className="relative">
        {/* Progress */}
        {performance.map((value, index) => {
          return value.variant !== "BLUE" ? (
            <Progress
              className="mt-4"
              variant={value.variant}
              key={index}
              grade={value.grade}
              score={value.score}
              title={value.title}
            />
          ) : (
            <Progress
              variant={value.variant}
              key={index}
              className="mt-6"
              grade={value.grade}
              score={value.score}
              title={value.title}
            />
          );
        })}
      </div>
    </section>
  );
}
