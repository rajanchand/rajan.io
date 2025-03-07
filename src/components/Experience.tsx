
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CalendarDays, MapPin } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      logo: "/placeholder.svg", // Replace with actual company logo
      location: "Sydney, Australia",
      period: "2022 - Present",
      responsibilities: [
        "Lead a team of 5 developers to build and maintain enterprise-level web applications",
        "Implement microservices architecture using Node.js and Docker",
        "Optimize application performance and reduce loading times by 40%",
        "Collaborate with product managers to define project requirements and timelines"
      ]
    },
    {
      id: 2,
      role: "Software Developer",
      company: "Digital Solutions Group",
      logo: "/placeholder.svg", // Replace with actual company logo
      location: "Melbourne, Australia",
      period: "2020 - 2022",
      responsibilities: [
        "Developed responsive front-end interfaces using React and TypeScript",
        "Built RESTful APIs with Express.js and MongoDB",
        "Implemented automated testing with Jest and Cypress",
        "Participated in code reviews and pair programming sessions"
      ]
    },
    {
      id: 3,
      role: "IT Support Specialist",
      company: "Global Networks Ltd",
      logo: "/placeholder.svg", // Replace with actual company logo
      location: "Brisbane, Australia",
      period: "2019 - 2020",
      responsibilities: [
        "Provided technical support for a network of over 200 users",
        "Configured and maintained Windows servers and networking equipment",
        "Implemented security protocols and ensured data integrity",
        "Created technical documentation and conducted user training sessions"
      ]
    },
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="section-container bg-gradient-to-b from-background to-secondary/30">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            My professional journey has equipped me with practical skills and experience in diverse technological environments.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experienceData.map((item) => (
            <motion.div 
              key={item.id}
              className="glass-panel rounded-lg p-6 md:p-8 hover:shadow-glow transition-all"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-start">
                  <div className="w-16 h-16 rounded-lg overflow-hidden mb-4 bg-white p-2">
                    <img 
                      src={item.logo} 
                      alt={`${item.company} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-1">{item.role}</h3>
                  <h4 className="text-lg text-primary mb-3">{item.company}</h4>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <CalendarDays size={14} className="mr-1" />
                    {item.period}
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin size={14} className="mr-1" />
                    {item.location}
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <h5 className="text-lg font-medium mb-4 flex items-center">
                    <Briefcase size={18} className="mr-2 text-primary" />
                    Responsibilities
                  </h5>
                  
                  <ul className="space-y-3">
                    {item.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
