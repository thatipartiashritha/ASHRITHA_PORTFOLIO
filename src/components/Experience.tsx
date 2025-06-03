import React from 'react';

const experiences = [
  {
    title: 'Active Member',
    organization: 'School of CS & AI, SR University',
    description: 'Contributing to academic initiatives and technical projects within the department.',
  },
  {
    title: 'Team Lead',
    organization: 'Genzeon GenZverse Hackathon',
    description: 'Led a team to achieve top 3 position among 50+ participating teams, demonstrating strong leadership and technical skills.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
            <p className="text-blue-600 dark:text-blue-400 mb-2">{exp.organization}</p>
            <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
