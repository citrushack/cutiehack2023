import SVG from "./SVG";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-9/12">
      <SVG />
      <div className="w-10/12 md:w-3/5 bg-cutie-blue-200/75 rounded-2xl text-base md:text-xl font-semibold p-[5%] leading-relaxed text-white">
        Cutie Hack is a <span className="text-cutie-orange">12-hour</span>,
        <span className="text-cutie-orange"> beginner-oriented hackathon </span>
        hosted by students at University of California, Riverside where hackers
        are challenged to create a cool project within the time frame to demo in
        order to win awesome prizes and participate in workshops, fun games, and
        networking.
      </div>
    </div>
  );
};

export default About;
