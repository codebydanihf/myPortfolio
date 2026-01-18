import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-9999 mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-nier-dark-text' : 'bg-nier-text'}`} />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-9998"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 0.3,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        <div className={`w-10 h-10 border rounded-full ${isDark ? 'border-nier-dark-border' : 'border-nier-border'}`} />
      </motion.div>

      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-9997"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            x: position.x - 30,
            y: position.y - 30,
            opacity: 0.2,
            scale: 1,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        >
          <div className="w-15 h-15 border border-nier-accent rotate-45" style={{ width: 60, height: 60 }} />
        </motion.div>
      )}
    </>
  );
};
