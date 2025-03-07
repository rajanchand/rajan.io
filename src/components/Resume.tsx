
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="section-container">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Resume</h2>
          <p className="text-muted-foreground mb-10">
            Download my resume to see my complete work history, education, and detailed skillset.
          </p>
          
          <motion.div 
            className="glass-panel p-10 rounded-lg flex flex-col items-center"
            whileHover={{ y: -5 }}
          >
            <div className="mb-6 text-primary">
              <FileText size={64} />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Rajan Prakash Chand - Resume</h3>
            
            <p className="text-muted-foreground mb-8 max-w-md">
              This comprehensive resume outlines my professional experience, educational background, technical skills, and achievements.
            </p>
            
            <motion.a 
              href="#" // Replace with actual resume PDF link
              className="apple-button inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
