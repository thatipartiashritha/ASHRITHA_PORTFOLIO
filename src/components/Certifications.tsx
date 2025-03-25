import React from 'react';

const certifications = [
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
  },
  {
    title: 'Cisco Networks Certification',
    issuer: 'Cisco',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
  },
  {
    title: 'Theory of Computation',
    issuer: 'NPTEL',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {cert.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Issued by {cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;