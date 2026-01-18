import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { useSoundContext } from '../../context/SoundContext';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMuted, toggleMute, playHover, playClick } = useSoundContext();

  const handleNavClick = (href: string) => {
    playClick();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nier-bg/95 backdrop-blur-sm border-b-2 border-nier-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            className="text-xl font-bold tracking-[0.3em] text-nier-text uppercase"
            onMouseEnter={playHover}
            onClick={playClick}
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                onMouseEnter={playHover}
                className="text-sm tracking-widest uppercase text-nier-text hover:text-nier-accent transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-nier-accent transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
            
            <motion.button
              onClick={() => {
                playClick();
                toggleMute();
              }}
              onMouseEnter={playHover}
              className="p-2 text-nier-text hover:text-nier-accent transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </motion.button>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <motion.button
              onClick={() => {
                playClick();
                toggleMute();
              }}
              className="p-2 text-nier-text"
              whileTap={{ scale: 0.9 }}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </motion.button>
            
            <motion.button
              onClick={() => {
                playClick();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="p-2 text-nier-text"
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-2 border-nier-border bg-nier-bg"
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  onMouseEnter={playHover}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-3 text-left text-sm tracking-widest uppercase text-nier-text hover:bg-nier-bg-dark transition-colors"
                >
                  <span className="mr-2">▸</span>
                  {item.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
