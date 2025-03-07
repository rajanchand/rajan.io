
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CalendarDays, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Information Technology",
      institution: "University of Technology Sydney",
      location: "Sydney, Australia",
      period: "2021 - 2023",
      description: "Specialized in Software Engineering with a focus on advanced web technologies and cloud computing."
    },
    {
      id: 2,
      degree: "Bachelor of Computer Science",
      institution: "University of Sydney",
      location: "Sydney, Australia",
      period: "2017 - 2021",
      description: "Focused on algorithms, data structures, and software development methodologies."
    },
    {
      id: 3,
      degree: "High School Diploma",
      institution: "Sydney Technical High School",
      location: "Sydney, Australia",
      period: "2013 - 2017",
      description: "Completed with distinction in Mathematics and Computer Studies."
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="section-container bg-gradient-to-b from-background to-secondary/30">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Education</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            My academic journey has equipped me with both theoretical knowledge and practical skills in software engineering and computer science.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {educationData.map((item) => (
            <motion.div 
              key={item.id} 
              className="glass-panel rounded-lg p-6 hover:shadow-glow transition-all"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <span className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays size={14} className="mr-1" />
                  {item.period}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
              
              <h4 className="text-lg text-muted-foreground mb-1">{item.institution}</h4>
              
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <MapPin size={14} className="mr-1" />
                {item.location}
              </div>
              
              <p className="text-muted-foreground/90">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
