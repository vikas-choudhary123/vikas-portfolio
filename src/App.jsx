import React from "react";

import { ReactLenis } from 'lenis/react';

import Header from './Components/Header.jsx'
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Skill from "./Components/Skill.jsx";
import Work from "./Components/Work.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <ReactLenis root>
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Skill/>
      <Work/>
      <Contact/>
    </main>
    <Footer/>
    </ReactLenis>
  );
}

export default App;