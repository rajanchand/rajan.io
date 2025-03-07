
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, MessageCircle } from 'lucide-react';

const Home = () => {
  const profileImage = '/placeholder.svg'; // Replace with actual image

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      
      <motion.div 
        className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="lg:flex-1 text-center lg:text-left space-y-6"
          variants={itemVariants}
        >
          <motion.h3 
            className="text-xl text-muted-foreground font-medium"
            variants={itemVariants}
          >
            Hi, I'm
          </motion.h3>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
            variants={itemVariants}
          >
            Rajan Prakash Chand
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
            variants={itemVariants}
          >
            A software engineer driven by curiosity and desire to push the boundaries of what is possible with technology.
          </motion.p>
          
          <motion.p 
            className="text-base text-muted-foreground/80 max-w-2xl mx-auto lg:mx-0"
            variants={itemVariants}
          >
            With over four years of experience working in the IT industry, I have gained a deep understanding of software design and development principles, as well as expertise in various programming languages and frameworks.
          </motion.p>
          
          <motion.p 
            className="text-base text-muted-foreground/80 max-w-2xl mx-auto lg:mx-0"
            variants={itemVariants}
          >
            I believe that diversity is essential to creating truly innovative solutions, and I am committed to bringing my unique background and perspective to every project I work on.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8"
            variants={itemVariants}
          >
            <motion.a 
              href="#contact"
              className="apple-button inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              Contact Me
            </motion.a>
            
            <motion.a 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/50 text-foreground hover:bg-primary/5 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={18} />
              Message Me
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex gap-6 justify-center lg:justify-start mt-6"
            variants={itemVariants}
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                className="social-icon"
                aria-label={link.label}
                whileHover={{ scale: 1.2, color: "var(--color-primary)" }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="lg:flex-1 flex justify-center lg:justify-end"
          variants={itemVariants}
        >
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 p-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <motion.img 
                src={profileImage} 
                alt="Rajan Prakash Chand" 
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
