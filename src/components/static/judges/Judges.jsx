import Title from "@/components/dynamic/admin/Title";
import { JUDGES } from "@/data/static/Judges";
import Person from "../Person";
const Judges = () => {
  return (
    <>
      <div className="flex-col flex items-center justify-center w-9/12">
        <Title title="Judges" />
        <div className="items-center justify-center text-white grid grid-cols-2 md:grid-cols-3 ">
          {JUDGES.map((item, index) => (
            <Person
              key={index}
              img={item.img}
              name={item.name}
              position={item.position}
              sm={item.sm}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Judges;
