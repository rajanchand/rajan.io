
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-accent/5"></div>
      
      <motion.div 
        className="absolute inset-0 -z-10 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl"></div>
      </motion.div>
      
      <div className="w-full max-w-5xl mx-auto text-center space-y-6">
        <motion.span 
          className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Project Management Made Simple
        </motion.span>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Distribute tasks with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">harmony and precision</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Streamline your project management workflow with our intuitive task distribution platform. Allocate responsibilities, track progress, and ensure project success with ease.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            className="apple-button bg-primary text-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Create Assignment
          </motion.button>
          
          <motion.button
            className="apple-button bg-secondary text-secondary-foreground"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Examples
          </motion.button>
        </motion.div>
      </div>
      
      <motion.div 
        className="w-full max-w-5xl mt-16 glass-panel rounded-3xl overflow-hidden shadow-glow"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="flex items-center gap-2 p-3 border-b border-border/50">
          <div className="flex gap-1.5 ml-2">
            <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
          </div>
          <div className="mx-auto text-xs text-muted-foreground font-medium">Task Distribution Dashboard</div>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div 
                key={i}
                className="flex flex-col p-4 rounded-xl bg-white/50 border border-border/50 shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
                whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  {i}
                </div>
                <h3 className="text-sm font-semibold mb-1">Criterion {i}</h3>
                <p className="text-xs text-muted-foreground">
                  {i === 1 ? "Project Overview" : 
                   i === 2 ? "Work Breakdown Structure" : 
                   i === 3 ? "Risk Register" : 
                   i === 4 ? "Network Analysis" : 
                   i === 5 ? "Monitoring Plan" : 
                   "Management & Presentation"}
                </p>
                <div className="flex items-center mt-auto pt-3 text-xs">
                  <span className="text-muted-foreground">Assigned:</span>
                  <div className="flex -space-x-2 ml-auto">
                    <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-accent/20 border-2 border-white"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
