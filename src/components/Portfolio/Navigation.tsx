import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-md border-b border-section-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="container max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gradient cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              ARNAB BHOWAL
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </motion.button>
              ))}
              
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-section-border"
        >
          <div className="container max-w-6xl mx-auto px-6 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileTap={{ scale: 0.95 }}
                  className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {item.name}
                </motion.button>
              ))}
              
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit mt-2"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrolled ? 1 : 0, 
          scale: scrolled ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        onClick={() => scrollToSection('#home')}
        className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full hover-glow z-40"
      >
        ↑
      </motion.button>
    </>
  );
}