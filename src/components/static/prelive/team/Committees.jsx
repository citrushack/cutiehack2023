import { COMMITTEES } from "@/data/static/Committees";
import Title from "../../Title";

const Committees = () => {
  return (
    <>
      <Title title="Committees" />
      <div className="grid grid-cols-5 w-11/12">
        {Object.entries(COMMITTEES).map(([committee, members], index) => (
          <div key={index}>
            <p className="text-2xl font-bold mb-3">{committee}</p>
            {members.map((member, memberIndex) => (
              <p className="mb-2" key={memberIndex}>
                {member}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Committees;
