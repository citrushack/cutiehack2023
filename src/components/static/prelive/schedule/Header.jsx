import { HEADERS } from "@/data/static/Events";

export const Header = () => {
  return (
    <div className="hidden md:flex w-full items-center justify-between gap-2">
      <div className="w-1/12 font-bold text-cutie-orange text-center">Time</div>
      <div className="w-11/12 grid grid-cols-12">
        {Object.entries(HEADERS).map(([header, width], index) => (
          <div
            className={`${width} font-bold text-cutie-orange text-center`}
            key={index}
          >
            {header}
          </div>
        ))}
      </div>
    </div>
  );
};
