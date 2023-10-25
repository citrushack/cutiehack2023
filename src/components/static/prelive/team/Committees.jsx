import { COMMITTEES } from "@/data/static/Committees";

const Committees = () => {
  return (
    <div>
      <h2>Committees</h2>
      {Object.entries(COMMITTEES).map(([committee, members], index) => (
        <div key={index}>
          <p>{committee}</p>
          {members.map((member, memberIndex) => (
            <p key={memberIndex}>{member}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Committees;
