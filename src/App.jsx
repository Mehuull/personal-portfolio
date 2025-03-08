import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"; 

import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Projects from "./Components/pages/Projects";
import Education from "./Components/pages/Education";
import Contact from "./Components/pages/Contact";

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() =>{
    Aos.init();
  },[])
  
  return (
    <BrowserRouter>
      <Navbar />
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

  
      
    </BrowserRouter>
  );
};

export default App;
