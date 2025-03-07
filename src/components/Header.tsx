
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/utils/theme';
import { Menu, X, Moon, Sun, Mail, MessageCircle, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Resume", href: "#resume" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Meeting", href: "#meeting" },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
  ];

  return (
    <motion.header 
      className="w-full py-4 px-6 md:px-8 flex justify-between items-center fixed top-0 z-50 glass-panel"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex items-center gap-2"
        whileHover={{ scale: 1.02 }}
      >
        <span className="text-xl font-semibold tracking-tight font-poppins bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Rajan Prakash Chand</span>
      </motion.div>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-6">
        {menuItems.map((item, i) => (
          <motion.a 
            key={i}
            href={item.href}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.a>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>

        <motion.a
          href="#contact"
          className="p-2 rounded-full hover:bg-muted transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Contact me"
        >
          <Mail size={20} />
        </motion.a>

        <motion.a
          href="#contact"
          className="p-2 rounded-full hover:bg-muted transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Message me"
        >
          <MessageCircle size={20} />
        </motion.a>
      </div>
      
      {/* Mobile Navigation Button */}
      <div className="flex items-center gap-4 lg:hidden">
        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
        
        <motion.button
          onClick={toggleMenu}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 glass-panel py-4 px-6 flex flex-col gap-4 lg:hidden"
        >
          {menuItems.map((item, i) => (
            <a 
              key={i}
              href={item.href}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <div className="flex items-center gap-4 pt-4 border-t border-border">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="p-2 rounded-full hover:bg-muted transition-colors social-icon"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
