import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { NierButton } from '../ui/NierButton';
import { useSoundContext } from '../../context/SoundContext';

export const Hero = () => {
  const { playHover } = useSoundContext();

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 49%, rgba(69, 65, 56, 0.3) 50%, transparent 51%),
            linear-gradient(0deg, transparent 49%, rgba(69, 65, 56, 0.3) 50%, transparent 51%)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-px bg-nier-border" />
            <div className="w-3 h-3 border-2 border-nier-border rotate-45" />
            <div className="w-20 h-px bg-nier-border" />
          </div>

          <motion.p
            className="text-sm tracking-[0.4em] uppercase text-nier-text/70 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-[0.2em] text-nier-text mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            DEVELOPER
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl tracking-wider text-nier-text/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Crafting digital experiences with precision and purpose
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <NierButton href="#projects">
              View Projects
            </NierButton>
            <NierButton href="#contact" variant="secondary">
              Contact Me
            </NierButton>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          onMouseEnter={playHover}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-nier-text/50 hover:text-nier-text transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
          }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>

      <div className="absolute top-20 left-10 w-32 h-32 border border-nier-border/20 rotate-45 opacity-30" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-nier-border/20 rotate-12 opacity-30" />
      <div className="absolute top-1/3 right-20 w-16 h-16 border-2 border-nier-border/10 rotate-45 opacity-20" />
    </section>
  );
};
