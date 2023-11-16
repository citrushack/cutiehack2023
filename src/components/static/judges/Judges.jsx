import Title from "@/components/dynamic/admin/Title";
import { JUDGES } from "@/data/static/Judges";
import Person from "../Person";
import Row from "react-bootstrap/Row";

const Judges = () => {
  return (
    <>
      <div className="flex-col flex items-center justify-center w-9/12">
        <Title title="Judges" />
        <Row className="items-center justify-center text-white w-full">
          {JUDGES.map((item, index) => (
            <Person
              key={index}
              img={item.img}
              name={item.name}
              position={item.position}
              sm={item.sm}
            />
          ))}
        </Row>
      </div>
    </>
  );
};

export default Judges;
