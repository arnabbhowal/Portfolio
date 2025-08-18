import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.8]);
  
  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6">
      {/* Glass-like overlay that becomes more opaque on scroll */}
      <motion.div 
        className="absolute inset-0 bg-background/10 backdrop-blur-[2px] border-0"
        style={{ 
          background: `linear-gradient(135deg, rgba(15, 15, 23, ${useTransform(scrollYProgress, [0, 1], [0.1, 0.9]).get()}), rgba(30, 30, 45, ${useTransform(scrollYProgress, [0, 1], [0.05, 0.8]).get()}))`,
          backdropFilter: 'blur(2px)'
        }}
      />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center space-y-8"
        >
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl font-light tracking-tight drop-shadow-2xl">
              <span className="text-gradient animate-text-glow drop-shadow-lg">Arnab</span>
              <br />
              <span className="text-white drop-shadow-lg">Bhowal</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-light drop-shadow-lg">
              Software Engineer & AI Enthusiast
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            A software engineer with 4+ years of experience, now a Master's student at NYU. 
	    Passionate about turning complex ideas into elegant solutions that work, and work well.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg hover-glow group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-section-border bg-transparent text-foreground hover:bg-accent px-8 py-6 text-lg hover-glow group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-6 pt-8"
          >
          {[
            { Icon: Github, href: 'https://github.com/arnabbhowal', label: 'GitHub' },
            { Icon: Linkedin, href: 'http://www.linkedin.com/in/arnabb1998', label: 'LinkedIn' },
            { Icon: Mail, href: 'mailto:arnab.bhowal@nyu.edu', label: 'Email' }
          ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border border-section-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover-glow"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator - moved below social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-section-border rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}