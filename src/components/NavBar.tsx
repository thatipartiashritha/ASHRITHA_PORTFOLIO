import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavBarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 glass-card shadow-lg backdrop-blur-sm bg-white/70 dark:bg-black/40"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold gradient-text"
          >
            Portfolio
          </motion.h1>
          <div className="flex items-center space-x-6 text-sm font-medium">
            <motion.a whileHover={{ scale: 1.1 }} href="#about" className="nav-link">About Me</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#skills" className="nav-link">Technical Skills</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#experience" className="nav-link">Experience</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#projects" className="nav-link">Projects</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#certifications" className="nav-link">Certifications</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#contact" className="nav-link">Contact Me</motion.a>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
