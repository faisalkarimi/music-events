import React from "react";
import { Link } from "react-router-dom";

const EventDetails = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
  };
  return (
    <h3 style={styles.container}>
      Details for the event is not available yet.
      <Link to="/">Back to events</Link>
    </h3>
  );
};

export default EventDetails;
