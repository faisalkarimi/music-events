import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import HomePage from "./screens/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header user="faisal" />
        <Routes>
          <Route path="/event-name" element={<EventDetails />} />
          <Route path="/events" element={<EventDetails />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
