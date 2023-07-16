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
      {/* <Route
        path="/contact"
        element={
          <Contact name={personalDetails.name} location={personalDetails.location} email={personalDetails.email} />
        }
      /> */}

      {/* <Route path="/projects" element=<Projects /> /> */}
      {/* <Route path="/about" element=<About /> />
      <Route path="/skills" element=<Skills /> />
      <Route path="/" element=<Testimonials /> />*/}
    </Routes>
  );
}

export default App;
