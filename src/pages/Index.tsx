import Scene3D from '@/components/3D/Scene';
import Navigation from '@/components/Portfolio/Navigation';
import Hero from '@/components/Portfolio/Hero';
import About from '@/components/Portfolio/About';
import Skills from '@/components/Portfolio/Skills';
import Projects from '@/components/Portfolio/Projects';
import Contact from '@/components/Portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-section-border bg-card/30 py-8">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Alex Johnson. Built with React, Three.js, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
