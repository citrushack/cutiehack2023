import { HEADERS } from "@/data/static/Events";
const Event = ({ event, date }) => {
  return (
    <>
      {date && (
        <div className="text-cutie-blue-300 text-lg font-bold my-8 flex px-5 items-center rounded-lg bg-cutie-orange text-center justify-center">
          {event.start.toUTCString().split(" 202")[0]}
        </div>
      )}
      <div className="flex flex-col md:flex-row text-white w-full justify-between my-2 md:gap-2 items-start md:items-stretch text-xs md:text-base">
        <div className="md:w-1/12 bg-transparent text-white rounded-xl md:py-3 items-center justify-center text-center flex">
          {event.start.getHours() === 12 ? 12 : event.start.getHours() % 12}:
          {event.start.getMinutes() < 10 && "0"}
          {event.start.getMinutes()}{" "}
          {event.start.getHours() >= 12 ? "PM " : "AM "}
        </div>
        <div className="md:hidden w-full md:w-11/12 grid grid-cols-12 items-center justify-between gap-2 bg-cutie-blue-200/75 rounded-xl px-3">
          <div
            className={`col-span-6 py-3 items-center justify-center text-center font-bold`}
          >
            {event.summary}
          </div>

          <div
            className={`col-span-6 items-center justify-center text-center bg-cutie-blue-100/40 py-1 rounded-md`}
          >
            {event.location}
          </div>
        </div>
        <div className="hidden w-full md:w-11/12 md:grid grid-cols-12 items-center justify-between gap-2 bg-cutie-blue-200/75 rounded-xl px-3">
          <div
            className={`${HEADERS.Event} py-3 items-center justify-center text-center font-bold`}
          >
            {event.summary}
          </div>
          <div
            className={`${HEADERS.Type} py-1 rounded-md items-center justify-center text-center bg-cutie-blue-100/40`}
          >
            {event.description.split("\n")[2]?.split(": ")[1]}
          </div>
          <div
            className={`${HEADERS.Description} py-3 items-center justify-center text-center px-4`}
          >
            {event.description.split("\n")[3]}
          </div>
          <div
            className={`${HEADERS.Location} items-center justify-center text-center py-1 rounded-md`}
          >
            {event.location}
          </div>
        </div>
      </div>
    </>
  );
};
export default Event;
