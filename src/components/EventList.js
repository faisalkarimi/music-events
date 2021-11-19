import React from "react";
import EventItem from "./EventItem";

const evt = {
  name: "Event Name",
  date: "2020-01-01",
  time: "12:00",
  image: {
    src: "https://images.unsplash.com/photo-1556021699-17ffb5c7e6e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
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
      <EventItem evt={evt} />
      <EventItem evt={evt} />
      <EventItem evt={evt} />
      <EventItem evt={evt} />
    </div>
  );
};

export default EventList;
