import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">About Me</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          I'm a passionate Computer Science student at SR University (2022-2026), deeply interested in
          full-stack development, machine learning, and data science. My academic journey has equipped
          me with strong problem-solving skills and a keen eye for innovation in technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-800 dark:text-white">B.Tech in Computer Science</p>
                <p className="text-gray-600 dark:text-gray-300">SR University</p>
                <p className="text-gray-500 dark:text-gray-400">2022 - 2026</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Interests</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Full Stack Development</li>
              <li>Machine Learning & AI</li>
              <li>Data Science</li>
              <li>Cloud Computing</li>
            </ul>
          </div>
        </div>
        {/* <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resume.pdf"
          download
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all duration-300"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </motion.a> */}
      </div>
    </section>
  );
};

export default About;