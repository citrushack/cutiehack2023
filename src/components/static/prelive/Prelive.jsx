import About from "./about/About";
import FAQ from "./faq/FAQ";
import Landing from "./landing/Landing";
import Schedule from "./schedule/Schedule";

const Prelive = () => {
  return (
    <div className="flex flex-col w-full items-center overflow-y-scroll gap-10">
      <Landing />
      <About />
      <Schedule />
      <FAQ />
    </div>
  );
};

export default Prelive;
