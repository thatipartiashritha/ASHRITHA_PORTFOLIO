import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary-light/5 via-secondary-light/5 to-accent-light/5 dark:from-primary/5 dark:via-secondary/5 dark:to-accent/5 -z-10"
      />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-content-light dark:text-content-dark text-shadow-lg">
              Hi, I'm <span className="gradient-text">Ashritha Thatiparti</span>
            </h1>
            <div className="text-xl md:text-2xl font-medium text-content-light/90 dark:text-content-dark/90 mb-8 h-20 text-shadow">
              <TypeAnimation
                sequence={[
                  'Passionate CSE Student',
                  2000,
                  'AI Enthusiast',
                  2000,
                  'Full Stack Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* ✅ Updated Buttons */}
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn-outline px-8 py-3 inline-flex items-center"
              >
                Hire Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/ashritha_resume.pdf"
                download
                className="btn-outline px-8 py-3 inline-flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-light via-secondary-light to-accent-light dark:from-primary dark:via-secondary dark:to-accent rounded-full blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/30 dark:border-gray-700/30 shadow-2xl relative"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(43, 43, 82, 0.3)",
                    "0 0 40px rgba(43, 43, 82, 0.2)",
                    "0 0 20px rgba(43, 43, 82, 0.3)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/ashritha_profile.png"
                  alt="Ashritha Thatiparti"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
