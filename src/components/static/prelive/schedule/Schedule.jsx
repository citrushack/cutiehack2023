"use client";
import { useEffect, useState } from "react";
import Title from "../../Title";
import axios from "axios";
import Event from "./Event";

const Schedule = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let date;
    let showDate;
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`
      )
      .then((response) => {
        const items = response.data.items.map((item) => {
          if (date === new Date(item.start.dateTime).getDate())
            showDate = false;
          else {
            date = new Date(item.start.dateTime).getDate();
            showDate = true;
          }
          item.start = new Date(item.start.dateTime);
          item.end = new Date(item.end.dateTime);
          item.showDate = showDate;
          return item;
        });
        setEvents(items);
      });
  }, []);

  return (
    <div className="w-9/12 items-center justify-center flex flex-col">
      <Title title="Schedule" />
      {events.map((event, index) => (
        <Event event={event} key={index} date={event.showDate} />
      ))}
    </div>
  );
};

export default Schedule;
