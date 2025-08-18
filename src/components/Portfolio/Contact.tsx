import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Github, 
  Linkedin, 
  Twitter 
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'arnab.bhowal@nyu.edu',
    href: 'mailto:arnab.bhowal@nyu.edu'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (551) 226-3950',
    href: 'tel:+15512263950'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Jersey City, NJ 07306',
    href: '#'
  }
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: '#',
    username: '@arnabbhowal'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'http://www.linkedin.com/in/arnabb1998',
    username: 'in/arnabb1998'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: '#',
    username: '@arnabbhowal'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            <span className="text-gradient">Get</span> In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and conversations about technology. 
            Let's connect and build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card-gradient border-section-border hover-glow">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-secondary/50 border-section-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-secondary/50 border-section-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="bg-secondary/50 border-section-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Project Collaboration"
                    className="bg-secondary/50 border-section-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className="bg-secondary/50 border-section-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-glow group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <Card className="p-8 bg-card-gradient border-section-border hover-glow">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-section-border hover:border-primary/50 transition-all group"
                    >
                      <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-card-gradient border-section-border hover-glow">
              <h3 className="text-xl font-semibold mb-6 text-gradient">Follow Me</h3>
              
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 border border-section-border hover:border-primary/50 transition-all group"
                    >
                      <Icon className="w-5 h-5 text-primary group-hover:animate-pulse" />
                      <div>
                        <p className="font-medium text-foreground">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </Card>

            {/* Quick Note */}
            <Card className="p-6 bg-card-gradient border-section-border hover-glow">
              <p className="text-muted-foreground leading-relaxed text-center">
                <span className="text-primary font-medium">Quick Response:</span> I typically respond to emails within 24 hours. 
                For urgent matters, feel free to reach out via LinkedIn for faster communication.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}