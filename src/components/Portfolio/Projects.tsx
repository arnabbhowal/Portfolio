import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const projects = [
  {
    id: 1,
    title: 'Pickle – AI-Powered Decision Assistant',
    description: 'Winner of HackNYU 2025: Best Use of Gen-AI. An AI-powered assistant with Flutter-based UI and Flask backend, leveraging LLMs to provide personalized recommendations for movies, food, travel, and task prioritization.',
    image: project1,
    technologies: ['Flutter', 'Flask', 'Python', 'DeepSeek', 'Perplexity', 'Gemini'],
    liveUrl: 'https://devpost.com/software/pickle-frgobu',
    githubUrl: 'https://devpost.com/software/pickle-frgobu',
    featured: true
  },
  {
    id: 2,
    title: 'Drone-Assisted Effective Pesticide Sprayer',
    description: 'Published international research paper. Built a machine learning-driven, drone-integrated object detection model to automate pesticide application & crop detection, reducing labor-intensive methods in India\'s agriculture sector.',
    image: project2,
    technologies: ['Python', 'YOLO V3', 'Computer Vision', 'CNN', 'LabelImg'],
    liveUrl: 'https://ijsrcseit.com/paper/CSEIT206381.pdf',
    githubUrl: 'https://ijsrcseit.com/paper/CSEIT206381.pdf',
    featured: true
  },
  {
    id: 3,
    title: 'WisTuition Platform',
    description: 'Full-stack web platform connecting 50+ tutors with students nearby. Enhanced tutor-student matching and communication by 40% based on locality. Deployed with 99.9% uptime and robust database handling 1,000+ records.',
    image: project3,
    technologies: ['MySQL', 'HTML', 'CSS', 'JavaScript', 'SiteGround', 'Bitbucket'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            <span className="text-gradient">Featured</span> Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating technical skills, 
            creative problem-solving, and attention to user experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className={`overflow-hidden bg-card-gradient border-section-border hover-glow group ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}>
                {/* Project Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    whileHover={{ scale: 1.02 }}
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300" />
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Featured Badge */}
                    {project.featured && (
                      <Badge className="w-fit bg-primary/20 text-primary border-primary/30">
                        Featured Project
                      </Badge>
                    )}

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="bg-secondary/30 border-section-border text-foreground hover:bg-primary/20 hover:border-primary/30 transition-all"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow group/btn"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Play className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                          Live Demo
                        </a>
                      </Button>
                      
                      <Button 
                        variant="outline"
                        className="border-section-border bg-transparent text-foreground hover:bg-accent hover-glow group/btn"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
                          Source
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-card-gradient border-section-border hover-glow max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects, code samples, and open source contributions.
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-section-border bg-transparent text-foreground hover:bg-accent hover-glow group"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                View All Projects
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}