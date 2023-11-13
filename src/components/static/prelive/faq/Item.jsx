import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa6";

const Item = ({ index, question, answer, length }) => {
  const [state, setState] = useState(false);

  return (
    <Accordion.Item eventKey={index} className="border-0 !bg-[#48648c]">
      <Accordion.Button
        className="!bg-[#48648c] text-xs md:text-base text-white after:!bg-none p-3 focus:!shadow-none"
        onClick={() => setState(!state)}
      >
        <div className=" flex justify-between items-center w-full">
          {question}
          <FaChevronDown className={`${state && "rotate-180"} duration-300`} />
        </div>
      </Accordion.Button>
      <Accordion.Body className="text-white text-xs md:text-base !border-0">
        {answer}
      </Accordion.Body>
      {index < length - 1 && (
        <div className="h-[1px] w-[96%] bg-cutie-blue-100 m-auto" />
      )}
    </Accordion.Item>
  );
};

export default Item;
