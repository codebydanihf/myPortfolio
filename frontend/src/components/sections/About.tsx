import { motion } from 'framer-motion';
import { NierContainer } from '../ui/NierContainer';
import { SectionTitle } from '../ui/SectionTitle';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="About" subtitle="Who I am" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-nier-bg-dark border-2 border-nier-border relative overflow-hidden"
              style={{
                clipPath: 'polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-nier-text/30">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 border-2 border-current rounded-full flex items-center justify-center">
                    <span className="text-4xl">?</span>
                  </div>
                  <p className="text-sm tracking-widest uppercase">Your Photo Here</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-nier-border/30 -z-10"
              style={{
                clipPath: 'polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
              }}
            />
          </motion.div>

          <div className="space-y-6">
            <NierContainer>
              <h3 className="text-xl font-bold tracking-wider mb-4 text-nier-text">
                Hello, I'm [Your Name]
              </h3>
              <p className="text-nier-text/80 leading-relaxed mb-4">
                I'm a passionate developer with a love for creating elegant solutions 
                to complex problems. My journey in technology has been driven by 
                curiosity and a desire to build meaningful digital experiences.
              </p>
              <p className="text-nier-text/80 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while contemplating the meaning of existence in a world of machines.
              </p>
            </NierContainer>

            <NierContainer className="bg-nier-bg-dark">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-nier-text">3+</div>
                  <div className="text-xs tracking-wider uppercase text-nier-text/60">Years Exp</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-nier-text">20+</div>
                  <div className="text-xs tracking-wider uppercase text-nier-text/60">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-nier-text">10+</div>
                  <div className="text-xs tracking-wider uppercase text-nier-text/60">Technologies</div>
                </div>
              </div>
            </NierContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
