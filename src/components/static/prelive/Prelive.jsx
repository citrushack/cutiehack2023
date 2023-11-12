import About from "./about/About";
// import Board from "./board/Board";
import FAQ from "./faq/FAQ";
import Landing from "./landing/Landing";
import Schedule from "./schedule/Schedule";
import Tracks from "./tracks/Tracks";

const Prelive = () => {
  return (
    <div className="flex flex-col w-full items-center overflow-y-scroll gap-10">
      <Landing />
      <About />
      <Schedule />
      <Tracks />
      <FAQ />
      {/* <Board /> */}
    </div>
  );
};

export default Prelive;
