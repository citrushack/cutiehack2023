import Image from "next/image";
import ScrollingText from "./ScrollingText";
import submarine from "../../../../../public/svg/submarineWithFish.svg";
import bubble from "../../../../../public/svg/bubble.svg";

const Tracks = () => {
  return (
    <div className="w-9/12 flex justify-center items-center flex-col relative">
      <ScrollingText />
      <Image
        src={submarine}
        alt="Submarine"
        className="w-9/12 animate-jiggle-3s"
      />
      <Image
        src={bubble}
        alt="bubble"
        className="absolute z-0 top-[65%] right-0 w-[3%] animate-jiggle-5s"
      />
      <Image
        src={bubble}
        alt="bubble"
        className="absolute z-0 top-1/2 right-5 w-[5%] animate-jiggle-4s"
      />
      <Image
        src={bubble}
        alt="bubble"
        className="absolute z-0 top-[60%] right-16 w-[5%] animate-jiggle-5s"
      />
    </div>
  );
};

export default Tracks;
