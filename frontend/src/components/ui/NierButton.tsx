import { motion } from 'framer-motion';
import { useSoundContext } from '../../context/SoundContext';
import type { ReactNode } from 'react';

interface NierButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const NierButton = ({ children, onClick, href, variant = 'primary', className = '' }: NierButtonProps) => {
  const { playHover, playClick } = useSoundContext();

  const baseStyles = `
    relative px-8 py-4 font-nier uppercase tracking-widest text-sm
    border-2 transition-all duration-200
    ${variant === 'primary' 
      ? 'bg-nier-bg border-nier-border text-nier-text hover:bg-nier-hover hover:text-nier-bg' 
      : 'bg-transparent border-nier-border text-nier-text hover:bg-nier-bg-dark'}
  `;

  const clipPath = {
    clipPath: 'polygon(0 8px, 8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
  };

  const content = (
    <motion.span
      className="relative z-10 flex items-center gap-2"
      whileHover={{ x: 3 }}
      transition={{ duration: 0.2 }}
    >
      <span className="w-2 h-2 bg-current rotate-45" />
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${className} inline-block`}
        style={clipPath}
        onMouseEnter={playHover}
        onClick={playClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={`${baseStyles} ${className}`}
      style={clipPath}
      onClick={() => {
        playClick();
        onClick?.();
      }}
      onMouseEnter={playHover}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};
