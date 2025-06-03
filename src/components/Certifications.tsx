import React from 'react';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    driveUrl: 'https://drive.google.com/file/d/17T2WYRcHBFmAhOHk1USvC2gR1v6VrrBL/view',
  },
  {
    title: 'Cisco Networks Certification',
    issuer: 'Cisco',
    driveUrl: 'https://drive.google.com/file/d/1xBXHpqWabnW9dmV66XKhZOsoMs2IozE4/view?usp=sharing',
  },
  {
    title: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services',
    driveUrl: 'https://drive.google.com/file/d/1s3WySU5Vpn108YXeqymm_dTEVGn8Nr0D/view?usp=sharing',
  },
  {
    title: 'Theory of Computation',
    issuer: 'NPTEL',
    driveUrl: 'https://drive.google.com/file/d/1oaMWbEydzLNXbkO6TyWL1HNt5np6BPVQ/view',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="text-gray-800 dark:text-gray-300">Issued by {cert.issuer}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href={cert.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary dark:to-secondary text-white rounded-lg hover:shadow-lg transition-all duration-300 w-full"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
