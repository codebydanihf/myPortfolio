import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSoundContext } from '../../context/SoundContext';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
];

export const Footer = () => {
  const { playHover, playClick } = useSoundContext();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nier-bg border-t-2 border-nier-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-nier-border rotate-45" />
            <span className="text-sm tracking-widest uppercase text-nier-text/70">
              © {currentYear} Portfolio
            </span>
            <div className="w-2 h-2 bg-nier-border rotate-45" />
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
                className="p-2 text-nier-text hover:text-nier-accent transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          <div className="text-xs tracking-wider uppercase text-nier-text/50">
            Glory to Mankind
          </div>
        </div>
      </div>
    </footer>
  );
};
