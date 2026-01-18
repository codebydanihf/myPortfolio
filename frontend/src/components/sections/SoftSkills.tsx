import { motion } from 'framer-motion';
import { Brain, Users, Lightbulb, Target, MessageSquare, Clock } from 'lucide-react';
import { NierContainer } from '../ui/NierContainer';
import { SectionTitle } from '../ui/SectionTitle';
import { useTheme } from '../../context/ThemeContext';

const softSkills = [
  {
    icon: Brain,
    title: 'Aprendizaje Continuo',
    description: 'Capacidad para adquirir nuevos conocimientos rápidamente y adaptarme a tecnologías emergentes.',
  },
  {
    icon: Users,
    title: 'Trabajo en Equipo',
    description: 'Colaboración efectiva con equipos multidisciplinarios para alcanzar objetivos comunes.',
  },
  {
    icon: Lightbulb,
    title: 'Resolución de Problemas',
    description: 'Análisis crítico y pensamiento creativo para encontrar soluciones eficientes.',
  },
  {
    icon: Target,
    title: 'Orientación a Resultados',
    description: 'Enfoque en cumplir objetivos con calidad y dentro de los plazos establecidos.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicación Efectiva',
    description: 'Habilidad para transmitir ideas técnicas de forma clara y comprensible.',
  },
  {
    icon: Clock,
    title: 'Gestión del Tiempo',
    description: 'Organización y priorización de tareas para maximizar la productividad.',
  },
];

export const SoftSkills = () => {
  const { isDark } = useTheme();

  return (
    <section id="soft-skills" className={`py-24 px-4 ${isDark ? 'bg-nier-dark-bg-dark/30' : 'bg-nier-bg-dark/30'}`}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Habilidades Blandas" subtitle="Más allá del código" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NierContainer className={`h-full group hover:scale-[1.02] transition-transform duration-300 ${isDark ? 'bg-nier-dark-bg border-nier-dark-border' : ''}`}>
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className={`p-4 mb-4 border-2 rounded-full ${isDark ? 'border-nier-dark-border bg-nier-dark-bg-dark' : 'border-nier-border bg-nier-bg-dark'}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.icon size={28} className={`${isDark ? 'text-nier-dark-text' : 'text-nier-text'}`} />
                  </motion.div>
                  
                  <h3 className={`text-lg font-bold tracking-wider mb-3 ${isDark ? 'text-nier-dark-text' : 'text-nier-text'}`}>
                    {skill.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-nier-dark-text/70' : 'text-nier-text/70'}`}>
                    {skill.description}
                  </p>
                </div>
              </NierContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
