import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";
import About from "./pages/About"
import Experience from "./pages/Experience";
import Hackathons from "./pages/Hackathons";
import Project from "./pages/Project";
import Skill from "./pages/Skill";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
