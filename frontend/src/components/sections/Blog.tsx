import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { NierContainer } from '../ui/NierContainer';
import { SectionTitle } from '../ui/SectionTitle';
import { useSoundContext } from '../../context/SoundContext';

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
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for structuring large-scale React applications with proper state management and component architecture.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'Architecture'],
  },
  {
    id: 2,
    title: 'The Art of Clean Code',
    excerpt: 'Exploring principles and patterns that make code more readable, maintainable, and elegant.',
    date: '2024-01-08',
    readTime: '6 min read',
    tags: ['Best Practices', 'Clean Code'],
  },
  {
    id: 3,
    title: 'TypeScript Tips and Tricks',
    excerpt: 'Advanced TypeScript techniques that will improve your development workflow and code quality.',
    date: '2024-01-01',
    readTime: '10 min read',
    tags: ['TypeScript', 'Tips'],
  },
];

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
  const { playHover, playClick } = useSoundContext();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
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
      <NierContainer className="h-full group">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-4 text-xs text-nier-text/60 mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{formatDate(post.date)}</span>
            </div>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="text-lg font-bold tracking-wider text-nier-text mb-3 group-hover:text-nier-accent transition-colors">
            {post.title}
          </h3>

          <p className="text-sm text-nier-text/70 leading-relaxed mb-4 flex-grow">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs tracking-wider uppercase border border-nier-border/50 text-nier-text/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.a
            href="#"
            onMouseEnter={playHover}
            onClick={playClick}
            className="flex items-center gap-2 text-sm text-nier-text/70 hover:text-nier-text transition-colors pt-4 border-t border-nier-border/50"
            whileHover={{ x: 5 }}
          >
            <span className="tracking-wider uppercase">Read More</span>
            <ArrowRight size={14} />
          </motion.a>
        </div>
      </NierContainer>
    </motion.article>
  );
};

export const Blog = () => {
  return (
    <section id="blog" className="py-24 px-4 bg-nier-bg-dark/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Blog" subtitle="Thoughts and insights" />

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-nier-text/50 tracking-wider uppercase">
            More articles coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
};
