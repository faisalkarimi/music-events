import React from "react";
import { Link } from "react-router-dom";
import "./styles/EventItem.css";

const EventItem = ({ evt }) => {
  return (
    <div className="event">
      <div className="img">
        <img
          src={evt.image ? evt.image.src : "../images/event-default.png"}
          style={{ width: "170", height: "100" }}
        />
      </div>

      <div className="info">
        <span>
          {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>

      <div className="link">
        <Link to={`/${evt.slug}`} className="btn">
          Details
        </Link>
      </div>
    </div>
  );
};

export default EventItem;
