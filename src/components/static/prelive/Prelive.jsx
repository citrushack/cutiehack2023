import About from "./about/About";
// import Board from "./board/Board";
import FAQ from "./faq/FAQ";
import Landing from "./landing/Landing";
import Schedule from "./schedule/Schedule";

const Prelive = () => {
  return (
    <div className="flex flex-col w-full items-center overflow-y-scroll">
      <Landing />
      <div className="flex flex-row justify-center w-full">
        <About />
      </div>

      <div className="flex flex-row justify-center w-full  pt-10">
        <Schedule />
      </div>
      {/* <Board /> */}
      <div className="flex flex-row justify-center w-full pt-10">
        <FAQ />
      </div>
    </div>
  );
};

export default Prelive;
