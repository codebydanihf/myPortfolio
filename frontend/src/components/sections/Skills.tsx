import { motion } from 'framer-motion';
import { NierContainer } from '../ui/NierContainer';
import { SectionTitle } from '../ui/SectionTitle';
import { useTheme } from '../../context/ThemeContext';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'Next.js', level: 80 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: 'Herramientas',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Linux', level: 80 },
      { name: 'Figma', level: 65 },
    ],
  },
];

const SkillBar = ({ name, level, delay, isDark }: { name: string; level: number; delay: number; isDark: boolean }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className={`text-sm tracking-wider uppercase ${isDark ? 'text-nier-dark-text' : 'text-nier-text'}`}>{name}</span>
        <span className={`text-sm ${isDark ? 'text-nier-dark-text/60' : 'text-nier-text/60'}`}>{level}%</span>
      </div>
      <div className={`h-2 border relative overflow-hidden ${isDark ? 'bg-nier-dark-bg-dark border-nier-dark-border' : 'bg-nier-bg-dark border-nier-border'}`}>
        <motion.div
          className={`absolute inset-y-0 left-0 ${isDark ? 'bg-nier-dark-text' : 'bg-nier-text'}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 4px, ${isDark ? 'rgba(218, 212, 187, 0.3)' : 'rgba(69, 65, 56, 0.3)'} 4px, ${isDark ? 'rgba(218, 212, 187, 0.3)' : 'rgba(69, 65, 56, 0.3)'} 8px)`,
        }} />
      </div>
    </div>
  );
};

export const Skills = () => {
  const { isDark } = useTheme();

  return (
    <section id="skills" className={`py-24 px-4 ${isDark ? 'bg-nier-dark-bg-dark/30' : 'bg-nier-bg-dark/30'}`}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Habilidades Técnicas" subtitle="Lo que sé hacer" />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <NierContainer className={`h-full ${isDark ? 'bg-nier-dark-bg border-nier-dark-border' : ''}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-nier-accent rotate-45" />
                  <h3 className={`text-lg font-bold tracking-wider uppercase ${isDark ? 'text-nier-dark-text' : 'text-nier-text'}`}>
                    {category.title}
                  </h3>
                </div>
                
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.2 + skillIndex * 0.1}
                    isDark={isDark}
                  />
                ))}
              </NierContainer>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <NierContainer className={`inline-block ${isDark ? 'bg-nier-dark-bg border-nier-dark-border' : ''}`}>
            <p className={`text-sm tracking-wider uppercase ${isDark ? 'text-nier-dark-text/70' : 'text-nier-text/70'}`}>
              Siempre aprendiendo • Siempre mejorando • Siempre adaptándome
            </p>
          </NierContainer>
        </motion.div>
      </div>
    </section>
  );
};
