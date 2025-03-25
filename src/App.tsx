import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import AnimatedSection from './components/AnimatedSection';
import CustomCursor from './components/CustomCursor';
import Background3D from './components/Background3D';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Set dark mode as default

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <CustomCursor />
      <Background3D />
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <About />
          </AnimatedSection>
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
          <AnimatedSection>
            <Experience />
          </AnimatedSection>
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
          <AnimatedSection>
            <Certifications />
          </AnimatedSection>
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
}

export default App;