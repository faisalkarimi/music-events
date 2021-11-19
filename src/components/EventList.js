import React from "react";
import EventItem from "./EventItem";

const evt1 = {
  name: "Event Name",
  date: "2020-01-01",
  time: "12:00",
  image: {
    src: "https://images.unsplash.com/photo-1629960717522-0bcd369d6f5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
    alt: "event image",
  },
  slug: "event-name",
};
const evt2 = {
  name: "Event Name",
  date: "2020-01-01",
  time: "12:00",
  image: {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    alt: "event image",
  },
  slug: "event-name",
};

const EventList = () => {
  const container = {
    margin: "50px auto",
    maxWidth: "950px",
  };

  return (
    <div style={container}>
      <h1>Upcoming Events</h1>
      <EventItem evt={evt1} />
      <EventItem evt={evt2} />
      <EventItem evt={evt1} />
      <EventItem evt={evt2} />
    </div>
  );
};

export default EventList;
