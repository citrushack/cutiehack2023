import jellyfish from "../../../../../public/svg/jellyfish.svg";
import citrus from "../../../../../public/svg/citrus.svg";
import Image from "next/image";

const SVG = () => {
  return (
    <div className="relative flex flex-col w-1/4">
      <Image
        src={jellyfish}
        alt="fish"
        className="relative z-10 self-start w-[50%] animate-jiggle-4s"
      />
      <Image
        src={citrus}
        alt="fish"
        className="relative z-10 self-end w-[60%] animate-jiggle-5s -mt-[40%]"
      />
      <div className="relative z-10 self-end w-[40%] animate-jiggle-4s mt-[10%]">
        <Image src={jellyfish} alt="fish" className="-scale-x-100" />
      </div>
    </div>
  );
};

export default SVG;
