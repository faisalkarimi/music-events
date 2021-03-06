import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddEventPage from "./screens/AddEventPage";
import EventDetails from "./components/EventDetails";
import HomePage from "./screens/HomePage";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);
  const logout = () => {
    setUser(null);
  };
  return (
    <>
      <BrowserRouter>
        <Header user="faisal" onLogout={logout} />
        <Routes>
          <Route path="/event-name" element={<EventDetails />} />
          <Route path="/events/add" element={<AddEventPage />} />
          <Route path="/events" element={<EventDetails />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
