import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header user="faisal" />
    </BrowserRouter>
  );
}

export default App;
