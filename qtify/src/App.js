import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Section title="Top Albums" apiEndpoint="albums/top" type="albums" />
        <Section title="New Albums" apiEndpoint="albums/new" type="albums" />
        <Section title="Songs" apiEndpoint="songs" type="songs" />
      </BrowserRouter>
    </div>
  );
}

export default App;
