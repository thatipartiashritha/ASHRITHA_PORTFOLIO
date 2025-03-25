import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Library Management System',
    description: 'A comprehensive library management system built with Python, featuring book tracking, user management, and automated notifications.',
    technologies: ['Python'],
    github: 'https://github.com/thatipartiashritha/library_management',
  },
  {
    title: 'Fake News Detection System',
    description: 'An AI/ML-powered system that identifies fake news articles using advanced machine learning algorithms and natural language processing.',
    technologies: ['Python', 'Scikit-Learn', 'TensorFlow'],
    github: 'https://github.com/thatipartiashritha/fake_news_detection',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Github className="w-5 h-5 mr-1" />
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;