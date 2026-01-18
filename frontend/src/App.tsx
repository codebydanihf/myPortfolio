import { SoundProvider } from './context/SoundContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { CustomCursor } from './components/ui/CustomCursor';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { SoftSkills } from './components/sections/SoftSkills';
import { Projects } from './components/sections/Projects';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';

function AppContent() {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-nier-dark-bg' : 'bg-nier-bg'}`}>
      <CustomCursor />
      <div className="scanlines" />
      
      <Header />
      
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <SoftSkills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <AppContent />
      </SoundProvider>
    </ThemeProvider>
  );
}

export default App;
