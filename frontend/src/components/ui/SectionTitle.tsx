import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="w-16 h-px bg-nier-border" />
        <div className="w-2 h-2 bg-nier-border rotate-45" />
        <h2 className="text-3xl md:text-4xl font-bold tracking-[0.3em] text-nier-text">
          {title}
        </h2>
        <div className="w-2 h-2 bg-nier-border rotate-45" />
        <div className="w-16 h-px bg-nier-border" />
      </div>
      {subtitle && (
        <p className="text-nier-text/70 tracking-wider uppercase text-sm">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
