import { HEADERS } from "@/data/static/Events";
import { Header } from "./Header";
import Link from "next/link";

const Event = ({ event, date }) => {
  return (
    <>
      {date && (
        <>
          <div className="text-cutie-blue-300 text-lg font-bold my-8 flex px-5 items-center rounded-lg bg-cutie-orange text-center justify-center">
            {event.start.toLocaleString("default", {
              month: "short",
              weekday: "short",
              day: "2-digit",
            })}
          </div>
          <Header />
        </>
      )}
      <div className="flex flex-col md:flex-row text-white w-full justify-between my-2 md:gap-2 items-start md:items-stretch text-xs md:text-base">
        <div className="md:w-1/12 bg-transparent text-white rounded-xl md:py-3 items-center justify-center text-center flex">
          {event.start.getHours() === 12 ? 12 : event.start.getHours() % 12}:
          {event.start.getMinutes() < 10 && "0"}
          {event.start.getMinutes()}{" "}
          {event.start.getHours() >= 12 ? "PM " : "AM "}
        </div>
        <div
          className={`${
            event.start < new Date()
              ? event.end > new Date()
                ? "bg-cutie-blue-200"
                : "opacity-70 bg-cutie-blue-200/75"
              : "bg-cutie-blue-200/75"
          } md:hidden w-full md:w-11/12 grid grid-cols-12 items-center justify-between gap-2 rounded-xl px-3`}
        >
          <div
            className={`col-span-6 py-3 items-center justify-center text-center font-bold`}
          >
            {event.summary}
          </div>

          <div
            className={`col-span-6 items-center justify-center text-center bg-cutie-blue-100/40 py-1 rounded-md`}
          >
            {event.location.includes("https:") ? (
              <Link
                className="!text-cutie-orange font-bold hover:!text-orange"
                href={event.location}
              >
                Online
              </Link>
            ) : (
              event.location
            )}
          </div>
        </div>
        <div
          className={`hidden w-full md:w-11/12 md:grid grid-cols-12 items-center justify-between gap-2 ${
            event.start < new Date()
              ? event.end > new Date()
                ? "bg-cutie-blue-100/40 animate-bounce-1s"
                : "opacity-60 bg-cutie-blue-200/75"
              : "bg-cutie-blue-200/75"
          } rounded-xl px-3`}
        >
          <div
            className={`${HEADERS.Event} py-3 items-center justify-center text-center font-bold`}
          >
            {event.summary}
          </div>
          <div
            className={`${HEADERS.Type} py-1 rounded-md items-center justify-center text-center bg-cutie-blue-100/40`}
          >
            {event.category}
          </div>
          <div
            className={`${HEADERS.Description} py-3 items-center justify-center text-center px-4`}
          >
            {event.description.split("\n")[1]}
          </div>
          <div
            className={`${HEADERS.Location} items-center justify-center text-center py-1 rounded-md`}
          >
            {event.location.includes("https:") ? (
              <Link
                className="!text-cutie-orange font-bold hover:!text-orange"
                href={event.location}
              >
                Online
              </Link>
            ) : (
              event.location
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Event;
