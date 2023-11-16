import Image from "next/image";
import Col from "react-bootstrap/Col";

const Person = ({ img, name, position, start, sm }) => {
  return (
    <Col
      xs={6}
      md={3}
      lg={2}
      className="flex flex-col items-center justify-center text-white p-4 justify-self-center self-start"
    >
      <Image
        src={img}
        className="rounded-full w-32 object-cover aspect-square"
      />
      <div className="text-lg font-bold mt-1 whitespace-nowrap">{name}</div>
      <div
        className={`${
          sm && "hidden lg:block"
        } text-xs md:text-sm lg:text-base font-semibold text-center`}
      >
        {position}
      </div>
      {sm && (
        <div className="block lg:hidden text-xs md:text-sm lg:text-base font-semibold">
          {sm}
        </div>
      )}
    </Col>
  );
};

export default Person;
