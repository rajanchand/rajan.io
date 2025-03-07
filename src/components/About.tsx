
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BookOpen, Heart } from 'lucide-react';

const About = () => {
  const personalInfo = {
    name: "Rajan Prakash Chand",
    dateOfBirth: "May 15, 1995",
    email: "rajan.chand@example.com",
    phone: "+61 123 456 789",
    address: "Sydney, Australia",
    languages: ["English", "Hindi", "Nepali"],
    interests: ["Technology", "Photography", "Hiking", "Reading"],
    bio: "I am a passionate and dedicated software engineer with over four years of experience in the IT industry. My journey in technology began during my undergraduate studies, where I discovered my passion for building solutions that make a difference in people's lives. Throughout my career, I have focused on developing scalable applications and implementing efficient systems.\n\nBeyond my technical skills, I bring a unique perspective shaped by my diverse background and experiences. I believe in the power of collaboration and continuous learning, which drives me to stay updated with the latest industry trends and best practices. I am committed to creating innovative solutions that not only meet but exceed expectations."
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="section-container bg-gradient-to-b from-background to-secondary/30">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          <motion.div 
            className="md:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6"
              variants={itemVariants}
            >
              Who I Am
            </motion.h3>
            
            <motion.div 
              className="space-y-4 text-muted-foreground"
              variants={itemVariants}
            >
              {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10"
              variants={containerVariants}
            >
              <motion.div 
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Users size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-lg">4+</h4>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Award size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-lg">15+</h4>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <BookOpen size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-lg">3+</h4>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Heart size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-lg">100%</h4>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="glass-panel p-6 rounded-lg self-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6"
              variants={itemVariants}
            >
              Personal Info
            </motion.h3>
            
            <motion.ul className="space-y-4" variants={containerVariants}>
              <motion.li variants={itemVariants}>
                <span className="block text-sm text-muted-foreground">Name</span>
                <span className="font-medium">{personalInfo.name}</span>
              </motion.li>
              
              <motion.li variants={itemVariants}>
                <span className="block text-sm text-muted-foreground">Date of Birth</span>
                <span className="font-medium">{personalInfo.dateOfBirth}</span>
              </motion.li>
              
              <motion.li variants={itemVariants}>
                <span className="block text-sm text-muted-foreground">Email</span>
                <span className="font-medium">{personalInfo.email}</span>
              </motion.li>
              
              <motion.li variants={itemVariants}>
                <span className="block text-sm text-muted-foreground">Phone</span>
                <span className="font-medium">{personalInfo.phone}</span>
              </motion.li>
              
              <motion.li variants={itemVariants}>
                <span className="block text-sm text-muted-foreground">Address</span>
                <span className="font-medium">{personalInfo.address}</span>
              </motion.li>
              
              <motion.li variants={itemVariants}>
                <span className="block text-sm text-muted-foreground">Languages</span>
                <span className="font-medium">{personalInfo.languages.join(", ")}</span>
              </motion.li>
              
              <motion.li variants={itemVariants}>
                <span className="block text-sm text-muted-foreground">Interests</span>
                <span className="font-medium">{personalInfo.interests.join(", ")}</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
