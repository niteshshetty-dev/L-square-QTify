import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Hero />{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
