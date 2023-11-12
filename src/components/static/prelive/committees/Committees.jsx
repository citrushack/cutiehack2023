import Title from "../../Title";
import { COMMITTEES } from "@/data/static/Committees";

const Committees = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Title title="Committees" />
      <div className="grid grid-cols-1 md:grid-cols-4">
        {Object.entries(COMMITTEES).map(([key, values], index) => (
          <div className="text-white text-center" key={index}>
            <p className="text-xl font-bold">{key}</p>
            {values.map((name, index) => (
              <p key={index} className="">
                {name}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committees;
