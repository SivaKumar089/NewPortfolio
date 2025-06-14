import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './compoents/Navbar'
import Home from './compoents/Home'
import About from './compoents/About'
import Skills from './compoents/Skills'
import Education from './compoents/Education'
import Contact from './compoents/Contact'
import Footer from './compoents/Footer'
import Aos from 'aos'
import "aos/dist/aos.css";
import Project from './compoents/Project'
function App() {

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: true,
    });
  }, []);
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
