import { SoundProvider } from './context/SoundContext';
import { CustomCursor } from './components/ui/CustomCursor';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <SoundProvider>
      <div className="min-h-screen bg-nier-bg">
        <CustomCursor />
        <div className="scanlines" />
        
        <Header />
        
        <main className="pt-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Blog />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </SoundProvider>
  );
}

export default App;
