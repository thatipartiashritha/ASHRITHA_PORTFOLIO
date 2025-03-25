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
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 -z-10"
      />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
              Hi, I'm Ashritha Thatiparti
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-20">
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
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Hire Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/ashritha_resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light rounded-lg hover:shadow-lg transition-all duration-300"
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
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-3xl opacity-30 -z-10" />
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src="/ashritha_profile.png"
                  alt="Ashritha Thatiparti"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;