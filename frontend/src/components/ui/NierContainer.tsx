import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { Easing } from 'framer-motion';

interface NierContainerProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export const NierContainer = ({ children, className = '', animate = true }: NierContainerProps) => {
  const clipPath = {
    clipPath: 'polygon(0 12px, 12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)',
  };

  const cornerClass = "absolute w-3 h-3 border-nier-border opacity-50";

  if (!animate) {
    return (
      <div
        className={`relative border-2 border-nier-border bg-nier-bg p-6 ${className}`}
        style={clipPath}
      >
        <div className={`${cornerClass} top-2 left-2 border-l-2 border-t-2`} />
        <div className={`${cornerClass} top-2 right-2 border-r-2 border-t-2`} />
        <div className={`${cornerClass} bottom-2 left-2 border-l-2 border-b-2`} />
        <div className={`${cornerClass} bottom-2 right-2 border-r-2 border-b-2`} />
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`relative border-2 border-nier-border bg-nier-bg p-6 ${className}`}
      style={clipPath}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' as Easing }}
    >
      <div className={`${cornerClass} top-2 left-2 border-l-2 border-t-2`} />
      <div className={`${cornerClass} top-2 right-2 border-r-2 border-t-2`} />
      <div className={`${cornerClass} bottom-2 left-2 border-l-2 border-b-2`} />
      <div className={`${cornerClass} bottom-2 right-2 border-r-2 border-b-2`} />
      {children}
    </motion.div>
  );
};
