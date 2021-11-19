import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <Header user="faisal" />
      <Hero />
    </BrowserRouter>
  );
}

export default App;
