import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Brain,
  Palette
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Globe,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    color: 'bg-blue-500/20 text-blue-400'
  },
  {
    title: 'Backend Development',
    icon: Database,
    skills: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB'],
    color: 'bg-green-500/20 text-green-400'
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
    color: 'bg-purple-500/20 text-purple-400'
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['JavaScript', 'Python', 'Java', 'C++', 'Go', 'Rust'],
    color: 'bg-orange-500/20 text-orange-400'
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux'],
    color: 'bg-cyan-500/20 text-cyan-400'
  },
  {
    title: 'Tools & Workflow',
    icon: GitBranch,
    skills: ['Git', 'VS Code', 'Figma', 'Jira', 'Postman', 'Webpack'],
    color: 'bg-pink-500/20 text-pink-400'
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'Pandas', 'NumPy'],
    color: 'bg-red-500/20 text-red-400'
  },
  {
    title: 'Design & UX',
    icon: Palette,
    skills: ['UI/UX Design', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems'],
    color: 'bg-yellow-500/20 text-yellow-400'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            <span className="text-gradient">Technical</span> Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through continuous learning, hands-on projects, 
            and real-world experience across the full development stack.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="p-6 h-full bg-card-gradient border-section-border hover-glow group">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary"
                          className="bg-secondary/50 text-secondary-foreground border-section-border hover:bg-primary/20 hover:border-primary/30 transition-all text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-card-gradient border-section-border hover-glow max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Learning Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in continuous learning and staying current with technology trends. 
              Currently diving deeper into AI/ML applications, cloud architecture, and 
              advanced React patterns. Always excited to tackle new challenges and 
              expand my skill set through hands-on projects and collaboration.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}