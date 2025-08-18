import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Briefcase, Code, Trophy } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            <span className="text-gradient">About</span> Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MS Computer Engineering student at NYU with 4+ years of professional experience 
            at Capgemini. Passionate about AI/ML, full-stack development, and creating impactful solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            {...fadeInUp}
            className="space-y-6"
          >
            <Card className="p-8 bg-card-gradient border-section-border hover-glow">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently pursuing my Master's in Computer Engineering at NYU, 
                I bring 4+ years of professional experience from Capgemini where I led 
                product lifecycle management for automotive giants like Stellantis. 
                My journey spans from engineering data management to AI-powered solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Recently won HackNYU 2025 for best use of Gen-AI with my team. I'm passionate about 
                leveraging technology to solve real-world problems and am constantly exploring 
                the intersection of AI/ML with full-stack development.
              </p>
            </Card>
          </motion.div>

          {/* Education & Experience Cards */}
          <motion.div
            {...fadeInUp}
            className="space-y-6"
          >
            {/* Education */}
            <Card className="p-6 bg-card-gradient border-section-border hover-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2">Education</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">M.S. Computer Engineering</p>
                      <p className="text-sm text-muted-foreground">New York University • 2024-2026</p>
                      <p className="text-sm text-text-subtle">Brooklyn, NY • Current Student</p>
                    </div>
                    <div>
                      <p className="font-medium">B.E. Information Science & Engineering</p>
                      <p className="text-sm text-muted-foreground">New Horizon College • 2016-2020</p>
                      <p className="text-sm text-text-subtle">CGPA: 9.46/10 • Bengaluru, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Experience */}
            <Card className="p-6 bg-card-gradient border-section-border hover-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2">Experience</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Professional-I, Software Engineer</p>
                      <p className="text-sm text-muted-foreground">Capgemini • 2020-2024</p>
                      <p className="text-sm text-text-subtle">PLM customization, system integration</p>
                    </div>
                    <div>
                      <p className="font-medium">Full-Stack Developer Intern</p>
                      <p className="text-sm text-muted-foreground">SmallBzr Startup • 2020</p>
                      <p className="text-sm text-text-subtle">WisTuition platform development</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-6 bg-card-gradient border-section-border hover-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2">Achievements</h4>
                  <ul className="text-sm text-text-subtle space-y-1">
                    <li>• Winner HackNYU 2025: Best Use of Gen-AI</li>
                    <li>• 1st Place CodeLingus Coding Contest (150 competitors)</li>
                    <li>• 2nd Place Enigma Cybersecurity Challenge (200 participants)</li>
                    <li>• Led QuBytes 2k19 tech fest (1,000+ participants)</li>
                    <li>• Published International Research Paper (IJSR CSEIT)</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}