import React from "react";
import Form from "../components/Form";

const AddEventPage = () => {
  const headerStyle = {
    backgroundColor: "#f5f5f5",
    padding: "10px",
    textAlign: "center",
  };
  return (
    <>
      <h3 style={headerStyle}>Add New Event</h3>
      <Form />
    </>
  );
};

export default AddEventPage;
