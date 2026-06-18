import React from 'react';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Projects from './components/Projects';
import Contact  from './components/Contact';
import Footer   from './components/Footer';
import './styles/global.css';

const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
