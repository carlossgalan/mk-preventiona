import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-mk-light font-sans text-mk-gray selection:bg-mk-cyan/20 selection:text-mk-blue">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Philosophy />
        <Services />
        <Methodology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;