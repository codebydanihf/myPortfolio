import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { NierContainer } from '../ui/NierContainer';
import { SectionTitle } from '../ui/SectionTitle';
import { NierButton } from '../ui/NierButton';
import { useSoundContext } from '../../context/SoundContext';

export const Contact = () => {
  const { playHover, playClick } = useSoundContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Message sent! (This is a demo - connect to your backend)');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@example.com', href: 'mailto:contact@example.com' },
    { icon: MapPin, label: 'Location', value: 'City, Country', href: '#' },
    { icon: Github, label: 'GitHub', value: 'github.com/username', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/username', href: 'https://linkedin.com' },
  ];

  const inputClasses = `
    w-full px-4 py-3 bg-nier-bg border-2 border-nier-border text-nier-text
    placeholder:text-nier-text/40 focus:outline-none focus:border-nier-text
    transition-colors duration-200 tracking-wider
  `;

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Contact" subtitle="Get in touch" />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <NierContainer>
              <h3 className="text-xl font-bold tracking-wider mb-6 text-nier-text">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm tracking-wider uppercase text-nier-text/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={playHover}
                    required
                    className={inputClasses}
                    placeholder="Your name"
                    style={{
                      clipPath: 'polygon(0 5px, 5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%)',
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm tracking-wider uppercase text-nier-text/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={playHover}
                    required
                    className={inputClasses}
                    placeholder="your@email.com"
                    style={{
                      clipPath: 'polygon(0 5px, 5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%)',
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm tracking-wider uppercase text-nier-text/70 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={playHover}
                    required
                    rows={5}
                    className={`${inputClasses} resize-none`}
                    placeholder="Your message..."
                    style={{
                      clipPath: 'polygon(0 5px, 5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%)',
                    }}
                  />
                </div>

                <NierButton onClick={() => {}} className="w-full flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <span className="tracking-widest">Sending...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </NierButton>
              </form>
            </NierContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <NierContainer>
              <h3 className="text-xl font-bold tracking-wider mb-6 text-nier-text">
                Contact Information
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
                    className="flex items-center gap-4 p-3 border border-nier-border/50 hover:border-nier-border hover:bg-nier-bg-dark/50 transition-all duration-200 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-nier-bg-dark border border-nier-border">
                      <item.icon size={18} className="text-nier-text" />
                    </div>
                    <div>
                      <div className="text-xs tracking-wider uppercase text-nier-text/50">
                        {item.label}
                      </div>
                      <div className="text-sm text-nier-text group-hover:text-nier-accent transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </NierContainer>

            <NierContainer className="bg-nier-bg-dark/50">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border-2 border-nier-border rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-nier-accent rotate-45" />
                </div>
                <p className="text-sm text-nier-text/70 tracking-wider leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, 
                  or opportunities to be part of your vision.
                </p>
              </div>
            </NierContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
