import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Certificate from './pages/Certificate';
import Cv from './pages/CV';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-[#ededed] font-sans transition-colors duration-300">
        
        {/* Navbar melayang */}
        <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        <div className="max-w-7xl mr-auto px-8 md:px-20 lg:px-7 pt-30 pb-12 flex flex-col min-h-screen"><main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/cv" element={<Cv />} />
            </Routes>
          </main>
          <Footer />
        </div>
        
      </div>
    </BrowserRouter>
  );
}