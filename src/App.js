import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> WELCOME TO REACT-ROUTER</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
