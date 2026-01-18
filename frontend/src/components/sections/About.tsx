import { motion } from 'framer-motion';
import { NierContainer } from '../ui/NierContainer';
import { SectionTitle } from '../ui/SectionTitle';
import { useTheme } from '../../context/ThemeContext';

export const About = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-24 px-4 ${isDark ? 'dark' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Sobre Mí" subtitle="¿Quién soy?" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className={`aspect-square border-2 relative overflow-hidden ${isDark ? 'bg-nier-dark-bg-dark border-nier-dark-border' : 'bg-nier-bg-dark border-nier-border'}`}
              style={{
                clipPath: 'polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
              }}
            >
              <img 
                src="profile/profile_4.jpeg" 
                alt="Daniel - Desarrollador" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nier-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className={`absolute -bottom-4 -right-4 w-full h-full border-2 -z-10 ${isDark ? 'border-nier-dark-border/30' : 'border-nier-border/30'}`}
              style={{
                clipPath: 'polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
              }}
            />
          </motion.div>

          <div className="space-y-6">
            <NierContainer className={isDark ? 'bg-nier-dark-bg border-nier-dark-border' : ''}>
              <h3 className={`text-xl font-bold tracking-wider mb-4 ${isDark ? 'text-nier-dark-text' : 'text-nier-text'}`}>
                Hola, soy Daniel
              </h3>
              <p className={`leading-relaxed mb-4 ${isDark ? 'text-nier-dark-text/80' : 'text-nier-text/80'}`}>
                Soy un estudiante de la carrera de Ingeniería en Ciencias y Sistemas de la Universidad de
                San Carlos de Guatemala, apasionado por crear soluciones 
                elegantes para problemas complejos. Mi viaje en la tecnología ha sido 
                impulsado por la curiosidad y el deseo de construir experiencias digitales 
                significativas.
              </p>
              <p className={`leading-relaxed ${isDark ? 'text-nier-dark-text/80' : 'text-nier-text/80'}`}>
                Cuando no estoy codificando, puedes encontrarme explorando nuevas tecnologías, 
                disfrutando de un buen café o reflexionando sobre cómo podemos mejorar 
                la calidad de vida de las personas a través de la tecnología.
              </p>
            </NierContainer>

            <NierContainer className={isDark ? 'bg-nier-dark-bg-dark border-nier-dark-border' : 'bg-nier-bg-dark'}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className={`text-2xl font-bold ${isDark ? 'text-nier-dark-text' : 'text-nier-text'}`}>21</div>
                  <div className={`text-xs tracking-wider uppercase ${isDark ? 'text-nier-dark-text/60' : 'text-nier-text/60'}`}>Años</div>
                </div>
                <div>
                  <div className={`text-2xl font-bold ${isDark ? 'text-nier-dark-text' : 'text-nier-text'}`}>20+</div>
                  <div className={`text-xs tracking-wider uppercase ${isDark ? 'text-nier-dark-text/60' : 'text-nier-text/60'}`}>Proyectos</div>
                </div>
                <div>
                  <div className={`text-2xl font-bold ${isDark ? 'text-nier-dark-text' : 'text-nier-text'}`}>10+</div>
                  <div className={`text-xs tracking-wider uppercase ${isDark ? 'text-nier-dark-text/60' : 'text-nier-text/60'}`}>Tecnologías</div>
                </div>
              </div>
            </NierContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
