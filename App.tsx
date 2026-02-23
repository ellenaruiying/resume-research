import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import AIInnovation from './components/AIInnovation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <AIInnovation />
      </main>
      <Footer />
    </div>
  );
}

export default App;