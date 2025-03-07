
import React from 'react';
import { motion } from 'framer-motion';
import { User, ExternalLink, Award } from 'lucide-react';

const Widget = () => {
  const usefulLinks = [
    { name: "Portfolio", url: "#" },
    { name: "Blog", url: "#" },
    { name: "Resources", url: "#" },
    { name: "Testimonials", url: "#" },
    { name: "FAQ", url: "#" }
  ];

  const membershipOrgs = [
    { name: "IEEE Computer Society", url: "#" },
    { name: "Australian Computer Society", url: "#" },
    { name: "ACM", url: "#" },
    { name: "Web Development Forum", url: "#" }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-t from-background to-secondary/30">
      <div className="portfolio-container">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="glass-panel p-6 rounded-lg"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-lg mr-3">
                <User size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">About Me</h3>
            </div>
            
            <p className="text-muted-foreground mb-4">
              I am a passionate software engineer with a strong background in web development and a commitment to creating elegant, efficient solutions to complex problems.
            </p>
            
            <a 
              href="#about" 
              className="text-primary font-medium inline-flex items-center hover:underline"
            >
              Learn more <ExternalLink size={14} className="ml-1" />
            </a>
          </motion.div>
          
          <motion.div 
            className="glass-panel p-6 rounded-lg"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-lg mr-3">
                <ExternalLink size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Useful Links</h3>
            </div>
            
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="glass-panel p-6 rounded-lg md:col-span-2 lg:col-span-1"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-lg mr-3">
                <Award size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Membership Organizations</h3>
            </div>
            
            <ul className="space-y-3">
              {membershipOrgs.map((org, index) => (
                <li key={index}>
                  <a 
                    href={org.url} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    {org.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Widget;
