import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { NierContainer } from '../ui/NierContainer';
import { SectionTitle } from '../ui/SectionTitle';
import { useSoundContext } from '../../context/SoundContext';

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
    title: 'Project Alpha',
    description: 'A full-stack web application built with React and Node.js. Features real-time updates and a modern UI.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'Mobile-first e-commerce platform with payment integration and inventory management system.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'TailwindCSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'AI-powered data visualization dashboard for business analytics and reporting.',
    tags: ['Python', 'React', 'D3.js', 'FastAPI'],
    github: 'https://github.com',
  },
  {
    id: 4,
    title: 'Project Delta',
    description: 'Open-source CLI tool for automating development workflows and deployments.',
    tags: ['TypeScript', 'Node.js', 'Docker', 'GitHub Actions'],
    github: 'https://github.com',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { playHover, playClick } = useSoundContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <NierContainer className="h-full group hover:bg-nier-bg-dark/50 transition-colors duration-300">
        <div className="flex flex-col h-full">
          <div className="aspect-video bg-nier-bg-dark border border-nier-border mb-4 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-nier-text/20">
              <span className="text-4xl font-bold tracking-widest">0{project.id}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-nier-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 bg-nier-accent rotate-45" />
            <h3 className="text-lg font-bold tracking-wider uppercase text-nier-text">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-nier-text/70 leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs tracking-wider uppercase bg-nier-bg-dark border border-nier-border text-nier-text/80"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-4 border-t border-nier-border/50">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="flex items-center gap-2 text-sm text-nier-text/70 hover:text-nier-text transition-colors"
                whileHover={{ x: 3 }}
              >
                <Github size={16} />
                <span className="tracking-wider uppercase">Code</span>
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="flex items-center gap-2 text-sm text-nier-text/70 hover:text-nier-text transition-colors"
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
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Projects" subtitle="What I've built" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
