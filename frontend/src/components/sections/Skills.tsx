import { motion } from 'framer-motion';
import { NierContainer } from '../ui/NierContainer';
import { SectionTitle } from '../ui/SectionTitle';

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
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Linux', level: 80 },
      { name: 'Figma', level: 65 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm tracking-wider uppercase text-nier-text">{name}</span>
        <span className="text-sm text-nier-text/60">{level}%</span>
      </div>
      <div className="h-2 bg-nier-bg-dark border border-nier-border relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-nier-text"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(69, 65, 56, 0.3) 4px, rgba(69, 65, 56, 0.3) 8px)',
        }} />
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-nier-bg-dark/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Skills" subtitle="What I can do" />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <NierContainer className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-nier-accent rotate-45" />
                  <h3 className="text-lg font-bold tracking-wider uppercase text-nier-text">
                    {category.title}
                  </h3>
                </div>
                
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.2 + skillIndex * 0.1}
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
          <NierContainer className="inline-block">
            <p className="text-sm tracking-wider text-nier-text/70 uppercase">
              Always learning • Always improving • Always adapting
            </p>
          </NierContainer>
        </motion.div>
      </div>
    </section>
  );
};
