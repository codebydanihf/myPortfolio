import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSoundContext } from '../../context/SoundContext';
import { useTheme } from '../../context/ThemeContext';

const socialLinks = [
  { icon: Github, href: 'https://github.com/codebydanihf', label: 'GitHub' },
  { icon: Mail, href: 'mailto:daniel1ajedrez@gmail.com', label: 'Email' },
];

export const Footer = () => {
  const { playHover, playClick } = useSoundContext();
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t-2 py-12 transition-colors duration-300 ${isDark ? 'bg-nier-dark-bg border-nier-dark-border' : 'bg-nier-bg border-nier-border'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rotate-45 ${isDark ? 'bg-nier-dark-border' : 'bg-nier-border'}`} />
            <span className={`text-sm tracking-widest uppercase ${isDark ? 'text-nier-dark-text/70' : 'text-nier-text/70'}`}>
              © {currentYear} Portafolio
            </span>
            <div className={`w-2 h-2 rotate-45 ${isDark ? 'bg-nier-dark-border' : 'bg-nier-border'}`} />
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className={`p-2 hover:text-nier-accent transition-colors ${isDark ? 'text-nier-dark-text' : 'text-nier-text'}`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          <div className={`text-xs tracking-wider uppercase ${isDark ? 'text-nier-dark-text/50' : 'text-nier-text/50'}`}>
            La inteligencia no es un privilegio, es un don. Y se usa en bien de la humanidad
          </div>
        </div>
      </div>
    </footer>
  );
};
