"use client";
import { useEffect, useState } from "react";
import Title from "../../Title";
import axios from "axios";
import Event from "./Event";
import { HEADERS } from "@/data/static/Events";

const Schedule = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`
      )
      .then((response) => {
        const items = response.data.items.map((item) => {
          item.start = new Date(item.start.dateTime);
          item.end = new Date(item.end.dateTime);
          return item;
        });
        setEvents(items);
      });
  }, []);

  return (
    <div className="w-9/12 items-center justify-center flex flex-col">
      <Title title="Schedule" />
      <div className="hidden md:flex w-full items-center justify-between gap-2">
        <div className="w-1/12 font-bold text-cutie-orange text-center">
          Time
        </div>
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
      {events.map((event, index) => (
        <Event event={event} key={index} />
      ))}
    </div>
  );
};

export default Schedule;
