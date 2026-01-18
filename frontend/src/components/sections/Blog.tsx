import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { NierContainer } from '../ui/NierContainer';
import { SectionTitle } from '../ui/SectionTitle';
import { useSoundContext } from '../../context/SoundContext';
import { useTheme } from '../../context/ThemeContext';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Proximamente',
    excerpt: 'Proximamente',
    date: '2024-01-15',
    readTime: '8 min lectura',
    tags: ['...', '...', '...', '...'],
  },
];

const BlogCard = ({ post, index, isDark }: { post: BlogPost; index: number; isDark: boolean }) => {
  const { playHover, playClick } = useSoundContext();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <NierContainer className={`h-full group ${isDark ? 'bg-nier-dark-bg border-nier-dark-border' : ''}`}>
        <div className="flex flex-col h-full">
          <div className={`flex items-center gap-4 text-xs mb-4 ${isDark ? 'text-nier-dark-text/60' : 'text-nier-text/60'}`}>
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{formatDate(post.date)}</span>
            </div>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className={`text-lg font-bold tracking-wider mb-3 group-hover:text-nier-accent transition-colors ${isDark ? 'text-nier-dark-text' : 'text-nier-text'}`}>
            {post.title}
          </h3>

          <p className={`text-sm leading-relaxed mb-4 flex-grow ${isDark ? 'text-nier-dark-text/70' : 'text-nier-text/70'}`}>
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 text-xs tracking-wider uppercase border ${isDark ? 'border-nier-dark-border/50 text-nier-dark-text/60' : 'border-nier-border/50 text-nier-text/60'}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.a
            href="#"
            onMouseEnter={playHover}
            onClick={playClick}
            className={`flex items-center gap-2 text-sm transition-colors pt-4 border-t ${isDark ? 'text-nier-dark-text/70 hover:text-nier-dark-text border-nier-dark-border/50' : 'text-nier-text/70 hover:text-nier-text border-nier-border/50'}`}
            whileHover={{ x: 5 }}
          >
            <span className="tracking-wider uppercase">Leer Más</span>
            <ArrowRight size={14} />
          </motion.a>
        </div>
      </NierContainer>
    </motion.article>
  );
};

export const Blog = () => {
  const { isDark } = useTheme();

  return (
    <section id="blog" className={`py-24 px-4 ${isDark ? 'bg-nier-dark-bg-dark/30' : 'bg-nier-bg-dark/30'}`}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Blog" subtitle="Pensamientos e ideas" />

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} isDark={isDark} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className={`text-sm tracking-wider uppercase ${isDark ? 'text-nier-dark-text/50' : 'text-nier-text/50'}`}>
            Más artículos próximamente...
          </p>
        </motion.div>
      </div>
    </section>
  );
};
