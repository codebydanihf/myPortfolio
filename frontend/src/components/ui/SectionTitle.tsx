import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className={`w-16 h-px ${isDark ? 'bg-nier-dark-border' : 'bg-nier-border'}`} />
        <div className={`w-2 h-2 rotate-45 ${isDark ? 'bg-nier-dark-border' : 'bg-nier-border'}`} />
        <h2 className={`text-3xl md:text-4xl font-bold tracking-[0.3em] ${isDark ? 'text-nier-dark-text' : 'text-nier-text'}`}>
          {title}
        </h2>
        <div className={`w-2 h-2 rotate-45 ${isDark ? 'bg-nier-dark-border' : 'bg-nier-border'}`} />
        <div className={`w-16 h-px ${isDark ? 'bg-nier-dark-border' : 'bg-nier-border'}`} />
      </div>
      {subtitle && (
        <p className={`tracking-wider uppercase text-sm ${isDark ? 'text-nier-dark-text/70' : 'text-nier-text/70'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
