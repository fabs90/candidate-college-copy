type SelectReport = {
  name: string;
  value: string;
};

export default function Select({ data }: { data: SelectReport[] }) {
  return (
    <select
      className="bg-secondary text-primary font-medium rounded-[4px] py-1 px-3"
      name=""
      id=""
    >
      {data.map(({ name, value }, index) => {
        return (
          <option
            key={index}
            className="bg-white !p-2 hover:bg-secondary"
            value={value}
          >
            {name}
          </option>
        );
      })}
    </select>
  );
}
