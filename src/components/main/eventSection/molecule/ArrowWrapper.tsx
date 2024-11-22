import ArrowBack from "./atom/ArrowBack";
import ArrowNext from "./atom/ArrowNext";

export default function ArrowWrapper() {
  return (
    <div className="slider-controler relative bottom-[-4rem] flex items-center justify-center">
      <ArrowBack />
      <ArrowNext />
    </div>
  );
}
