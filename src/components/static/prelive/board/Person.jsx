import Image from "next/image";

const Person = ({ img, name, position, start, sm }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-white p-4 ${
        start === 3
          ? "col-start-1 md:col-start-2 lg:col-start-3"
          : start === 4 && "col-start-2 md:col-start-3 lg:col-start-4"
      }`}
    >
      <Image src={img} className="rounded-full w-full" />
      <div className="text-lg font-bold mt-1 whitespace-nowrap">{name}</div>
      <div
        className={`${
          sm && "hidden lg:block"
        } text-base font-semibold whitespace-nowrap`}
      >
        {position}
      </div>
      {sm && (
        <div className="block lg:hidden text-base font-semibold whitespace-nowrap">
          {sm}
        </div>
      )}
    </div>
  );
};

export default Person;
