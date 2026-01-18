import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { NierContainer } from '../ui/NierContainer';
import { SectionTitle } from '../ui/SectionTitle';
import { useSoundContext } from '../../context/SoundContext';
import { useTheme } from '../../context/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Proximamente',
    description: 'Proximamente',
    tags: ['...', '...', '...', '...'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

const ProjectCard = ({ project, index, isDark }: { project: Project; index: number; isDark: boolean }) => {
  const { playHover, playClick } = useSoundContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <NierContainer className={`h-full group transition-colors duration-300 ${isDark ? 'bg-nier-dark-bg border-nier-dark-border hover:bg-nier-dark-bg-dark/50' : 'hover:bg-nier-bg-dark/50'}`}>
        <div className="flex flex-col h-full">
          <div className={`aspect-video border mb-4 relative overflow-hidden ${isDark ? 'bg-nier-dark-bg-dark border-nier-dark-border' : 'bg-nier-bg-dark border-nier-border'}`}>
            <div className={`absolute inset-0 flex items-center justify-center ${isDark ? 'text-nier-dark-text/20' : 'text-nier-text/20'}`}>
              <span className="text-4xl font-bold tracking-widest">0{project.id}</span>
            </div>
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-gradient-to-t from-nier-dark-bg/80 to-transparent' : 'bg-gradient-to-t from-nier-bg/80 to-transparent'}`} />
          </div>

          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 bg-nier-accent rotate-45" />
            <h3 className={`text-lg font-bold tracking-wider uppercase ${isDark ? 'text-nier-dark-text' : 'text-nier-text'}`}>
              {project.title}
            </h3>
          </div>

          <p className={`text-sm leading-relaxed mb-4 flex-grow ${isDark ? 'text-nier-dark-text/70' : 'text-nier-text/70'}`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-1 text-xs tracking-wider uppercase border ${isDark ? 'bg-nier-dark-bg-dark border-nier-dark-border text-nier-dark-text/80' : 'bg-nier-bg-dark border-nier-border text-nier-text/80'}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className={`flex gap-4 pt-4 border-t ${isDark ? 'border-nier-dark-border/50' : 'border-nier-border/50'}`}>
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className={`flex items-center gap-2 text-sm transition-colors ${isDark ? 'text-nier-dark-text/70 hover:text-nier-dark-text' : 'text-nier-text/70 hover:text-nier-text'}`}
                whileHover={{ x: 3 }}
              >
                <Github size={16} />
                <span className="tracking-wider uppercase">Código</span>
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className={`flex items-center gap-2 text-sm transition-colors ${isDark ? 'text-nier-dark-text/70 hover:text-nier-dark-text' : 'text-nier-text/70 hover:text-nier-text'}`}
                whileHover={{ x: 3 }}
              >
                <ExternalLink size={16} />
                <span className="tracking-wider uppercase">Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </NierContainer>
    </motion.div>
  );
};

export const Projects = () => {
  const { isDark } = useTheme();

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Proyectos" subtitle="Lo que he construido" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};
