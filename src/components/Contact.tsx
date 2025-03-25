import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-6 gradient-text">Get in Touch</h3>
          <ContactForm />
        </div>
        <div className="glass-card rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-6 gradient-text">Connect With Me</h3>
          <div className="space-y-4">
            <motion.a
              href="https://www.linkedin.com/in/thatipartiashritha/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light group"
              whileHover={{ x: 10 }}
            >
              <Linkedin className="w-6 h-6 group-hover:animate-pulse" />
              <span>LinkedIn Profile</span>
            </motion.a>
            <motion.a
              href="https://github.com/thatipartiashritha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light group"
              whileHover={{ x: 10 }}
            >
              <Github className="w-6 h-6 group-hover:animate-pulse" />
              <span>GitHub Profile</span>
            </motion.a>
            <motion.a
              href="mailto:thatipartiashritha22@gmail.com"
              className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light group"
              whileHover={{ x: 10 }}
            >
              <Mail className="w-6 h-6 group-hover:animate-pulse" />
              <span>thatipartiashritha22@gmail.com</span>
            </motion.a>
            <motion.div
              className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 group"
              whileHover={{ x: 10 }}
            >
              <Phone className="w-6 h-6 group-hover:animate-pulse" />
              <span>+91-8522973533</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;