import React from 'react';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import Hero from './components/Hero/Hero.js';
import Navbar from './components/NavBar/navbar.js';
import Services from './components/Services/Services.js';
import Work from './components/Work/Work.js';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;