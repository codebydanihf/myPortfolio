import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Sparkles } from 'lucide-react';
import { NierContainer } from '../ui/NierContainer';
import { SectionTitle } from '../ui/SectionTitle';
import { useSoundContext } from '../../context/SoundContext';
import { useTheme } from '../../context/ThemeContext';

export const Contact = () => {
  const { playHover, playClick } = useSoundContext();
  const { isDark } = useTheme();

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'daniel1ajedrez@gmail.com', href: 'mailto:daniel1ajedrez@gmail.com' },
    { icon: MapPin, label: 'Ubicación', value: 'Guatemala', href: '#' },
    { icon: Github, label: 'GitHub', value: 'https://github.com/codebydanihf', href: 'https://github.com/codebydanihf' },
  ];

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Contacto" subtitle="Hablemos" />

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <NierContainer className={`h-full ${isDark ? 'bg-nier-dark-bg border-nier-dark-border' : ''}`}>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles size={24} className={isDark ? 'text-nier-dark-text' : 'text-nier-text'} />
                <h3 className={`text-xl font-bold tracking-wider ${isDark ? 'text-nier-dark-text' : 'text-nier-text'}`}>
                  Mi Filosofía
                </h3>
              </div>

              <div className={`space-y-4 ${isDark ? 'text-nier-dark-text/80' : 'text-nier-text/80'}`}>
                <p className="leading-relaxed text-lg font-medium">
                  "Si no lo sé, lo aprendo."
                </p>
                <p className="leading-relaxed">
                  Creo firmemente que el conocimiento no tiene límites. Cada desafío 
                  es una oportunidad para crecer y cada tecnología nueva es una 
                  puerta hacia posibilidades infinitas.
                </p>
                <p className="leading-relaxed">
                  No me detengo ante lo desconocido. Si un proyecto requiere 
                  habilidades que aún no domino, las aprendo. La curiosidad y 
                  la determinación son mis mejores herramientas.
                </p>
              </div>

              <div className={`mt-6 pt-6 border-t ${isDark ? 'border-nier-dark-border/50' : 'border-nier-border/50'}`}>
                <p className={`text-sm tracking-wider uppercase ${isDark ? 'text-nier-dark-text/50' : 'text-nier-text/50'}`}>
                  Siempre listo para nuevos retos
                </p>
              </div>
            </NierContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <NierContainer className={`h-full ${isDark ? 'bg-nier-dark-bg border-nier-dark-border' : ''}`}>
              <h3 className={`text-xl font-bold tracking-wider mb-6 ${isDark ? 'text-nier-dark-text' : 'text-nier-text'}`}>
                Información de Contacto
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onMouseEnter={playHover}
                    onClick={playClick}
                    className={`flex items-center gap-4 p-3 border transition-all duration-200 group ${isDark ? 'border-nier-dark-border/50 hover:border-nier-dark-border hover:bg-nier-dark-bg-dark/50' : 'border-nier-border/50 hover:border-nier-border hover:bg-nier-bg-dark/50'}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`p-2 border ${isDark ? 'bg-nier-dark-bg-dark border-nier-dark-border' : 'bg-nier-bg-dark border-nier-border'}`}>
                      <item.icon size={18} className={isDark ? 'text-nier-dark-text' : 'text-nier-text'} />
                    </div>
                    <div>
                      <div className={`text-xs tracking-wider uppercase ${isDark ? 'text-nier-dark-text/50' : 'text-nier-text/50'}`}>
                        {item.label}
                      </div>
                      <div className={`text-sm group-hover:text-nier-accent transition-colors ${isDark ? 'text-nier-dark-text' : 'text-nier-text'}`}>
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </NierContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
