import Title from "@/components/dynamic/admin/Title";
import { BOARD } from "@/data/static/Board";
import Person from "./Person";

const Board = () => {
  return (
    <div className="flex-col flex items-center justify-center w-9/12">
      <Title title="Staff" />
      <div className="items-center justify-center text-white grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {BOARD[0].map((item, index) => (
          <Person
            key={index}
            img={item.img}
            name={item.name}
            position={item.position}
            start={item.start}
          />
        ))}
      </div>
      <div className="items-center justify-center text-white grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {BOARD[1].map((item, index) => (
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
  );
};

export default Board;
