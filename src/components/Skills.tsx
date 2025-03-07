
import React from 'react';
import { motion } from 'framer-motion';
import { Network, Wrench, LineChart, Cpu, Server, Code, Globe, LayoutGrid } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      title: "Networking",
      icon: <Network size={24} />,
      skillsList: ["Network Architecture", "Routing & Switching", "Network Security", "VPN Configuration", "Troubleshooting"]
    },
    {
      id: 2,
      title: "Technical Support",
      icon: <Wrench size={24} />,
      skillsList: ["Hardware Troubleshooting", "Software Debugging", "User Training", "Documentation", "Service Desk Management"]
    },
    {
      id: 3,
      title: "Project Management",
      icon: <LineChart size={24} />,
      skillsList: ["Agile & Scrum", "Resource Planning", "Risk Management", "Stakeholder Communication", "Project Documentation"]
    },
    {
      id: 4,
      title: "System Administration",
      icon: <Server size={24} />,
      skillsList: ["Linux & Windows Server", "Active Directory", "Virtualization", "Cloud Infrastructure", "Security Compliance"]
    },
    {
      id: 5,
      title: "Programming",
      icon: <Code size={24} />,
      skillsList: ["JavaScript", "Python", "Java", "SQL", "React", "Node.js"]
    },
    {
      id: 6,
      title: "Web Technologies",
      icon: <Globe size={24} />,
      skillsList: ["HTML5 & CSS3", "Front-end Frameworks", "RESTful APIs", "Responsive Design", "Performance Optimization"]
    },
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section-container">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            My technical expertise spans multiple domains, allowing me to approach problems from various angles and implement comprehensive solutions.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((skill) => (
            <motion.div 
              key={skill.id}
              className="glass-panel rounded-lg p-6 hover:shadow-glow transition-all"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-3">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              
              <ul className="space-y-2">
                {skill.skillsList.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
