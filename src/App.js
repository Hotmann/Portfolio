import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element=<Contact /> />
      <Route path="/about" element=<About /> />
      <Route path="/projects" element=<Projects /> />
    </Routes>
  );
}

export default App;
