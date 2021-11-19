import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EventList from "./components/EventList";

function App() {
  return (
    <BrowserRouter>
      <Header user="faisal" />
      <Hero />
      <EventList />
    </BrowserRouter>
  );
}

export default App;
