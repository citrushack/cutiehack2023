import Title from "@/components/dynamic/admin/Title";
import { BOARD } from "@/data/static/Board";
import Person from "../../Person";
import Row from "react-bootstrap/Row";

const Board = () => {
  return (
    <div className="flex-col flex items-center justify-center w-9/12">
      <Title title="Staff" />
      <Row className="items-center justify-center text-white w-full">
        {BOARD[0].map((item, index) => (
          <Person
            key={index}
            img={item.img}
            name={item.name}
            position={item.position}
          />
        ))}
      </Row>
      <Row className="items-center justify-center text-white w-full">
        {BOARD[1].map((item, index) => (
          <Person
            key={index}
            img={item.img}
            name={item.name}
            position={item.position}
          />
        ))}
      </Row>
    </div>
  );
};

export default Board;
