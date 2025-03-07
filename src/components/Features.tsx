
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle, Clock, UserPlus, Shield, LineChart } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Task Allocation",
    description: "Easily distribute tasks among team members with clear responsibility assignments.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Time Tracking",
    description: "Monitor progress and time spent on each criterion to ensure timely completion.",
  },
  {
    icon: <UserPlus className="w-5 h-5" />,
    title: "Team Collaboration",
    description: "Facilitate seamless collaboration with integrated communication tools.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Risk Management",
    description: "Identify and mitigate risks before they impact your project timeline.",
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    title: "Progress Analytics",
    description: "Visualize project progress and team performance with intuitive analytics.",
  },
];

const Features = () => {
  return (
    <section id="overview" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background to-accent/5"></div>
      
      <div className="w-full max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything you need for <br/>successful task distribution
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools necessary to manage your project criteria effectively,
            from initial planning to final presentation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="task-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <motion.a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary"
                whileHover={{ x: 5 }}
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
