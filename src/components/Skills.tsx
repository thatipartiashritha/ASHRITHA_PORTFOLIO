import React from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['C', 'Python', 'Java'],
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Frameworks',
    skills: ['Django'],
  },
  {
    title: 'Databases',
    skills: ['SQL', 'MySQL', 'PLSQL', 'Microsoft SQL Server'],
  },
  {
    title: 'Other Technologies',
    skills: ['Machine Learning', 'Data Science', 'Full Stack Development'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;