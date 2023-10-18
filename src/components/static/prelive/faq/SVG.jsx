import fish1 from "../../../../../public/svg/fish1.svg";
import fish2 from "../../../../../public/svg/fish2.svg";
import dolphin from "../../../../../public/svg/dolphin.svg";
import bubble from "../../../../../public/svg/bubble.svg";
import Image from "next/image";

const SVG = () => {
  return (
    <div className="md:w-1/3 flex md:flex-col items-center justify-between">
      <div className="relative w-full flex flex-col items-center">
        <Image
          src={fish1}
          alt="fish"
          className="relative z-10 self-end mr-[20%] w-[40%] animate-jiggle-4s"
        />
        <Image
          src={fish1}
          alt="fish"
          className="relative z-10 self-start ml-[20%] w-[37%] animate-jiggle-3s"
        />
        <Image
          src={fish2}
          alt="fish"
          className="relative z-10 self-end mr-[20%] w-[35%] -mt-[2%] animate-jiggle-5s"
        />
        <Image
          src={bubble}
          alt="bubble"
          className="absolute z-0 top-[20%] left-[25%] w-[8%] animate-jiggle-5s"
        />
        <Image
          src={bubble}
          alt="bubble"
          className="absolute z-0 top-[5%] left-[30%] w-[5%] animate-jiggle-4s"
        />
        <Image
          src={bubble}
          alt="bubble"
          className="absolute z-0 top-[0%] left-[20%] w-[5%] animate-jiggle-6s"
        />
      </div>
      <div className="relative my-10 w-fit p-3 items-center justify-center flex rounded-full aspect-square text-white text-lg md:text-2xl font-bold bg-cutie-blue-200 font-karla">
        FAQ
        <Image
          src={bubble}
          alt="bubble"
          className="absolute z-0 top-1/2 -right-1/2 w-1/3 animate-jiggle-4s"
        />
        <Image
          src={bubble}
          alt="bubble"
          className="absolute z-0 bottom-1/3 -left-[30%] w-1/4 animate-jiggle-5s"
        />
      </div>
      <div className="relative w-full flex flex-col items-center">
        <Image
          src={dolphin}
          alt="dolphin"
          className="relative self-end mr-[20%] w-[40%] animate-jiggle-4s"
        />
        <Image
          src={dolphin}
          alt="dolphin"
          className="relative self-start ml-[20%] w-[37%] animate-jiggle-3s"
        />
        <Image
          src={bubble}
          alt="bubble"
          className="absolute z-0 bottom-[15%] right-[30%] w-[4%] animate-jiggle-4s"
        />
        <Image
          src={bubble}
          alt="bubble"
          className="absolute z-0 bottom-[0%] right-[35%] w-[5%] animate-jiggle-5s"
        />
      </div>
    </div>
  );
};

export default SVG;
