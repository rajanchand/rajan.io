
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Home from '@/components/Home';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Resume from '@/components/Resume';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Meeting from '@/components/Meeting';
import Widget from '@/components/Widget';
import Footer from '@/components/Footer';
import StarBackground from '@/components/StarBackground';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Set the title of the page
    document.title = "Rajan Prakash Chand - Portfolio";
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen w-full overflow-hidden"
      >
        <StarBackground />
        <Header />
        <Home />
        <Education />
        <Skills />
        <Experience />
        <Resume />
        <About />
        <Contact />
        <Meeting />
        <Widget />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
