import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import DownloadResumeButton from './DownloadResumeButton';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  status: string;
  description: string;
  highlights: string[];
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'KGiSL Institute of Technology, Coimbatore',
      period: '2022 - 2026',
      cgpa: '7.85',
      status: 'Pursuing',
      description: 'Comprehensive curriculum covering software development, data structures, algorithms, web technologies, and database management.',
      highlights: [
        'Strong foundation in programming languages',
        'Hands-on experience with modern frameworks',
        'Database design and management',
        'Software engineering principles'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Chavara Vidya Bhavan',
      period: '2020 - 2022',
      cgpa: '85.8%',
      status: 'Completed',
      description: 'Focused on Science stream with Mathematics, Physics, Chemistry, and Computer Science.',
      highlights: [
        'Mathematics and analytical skills',
        'Basic programming concepts',
        'Scientific problem-solving approach',
        'Foundation for technical education'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Download Resume Button */}
        

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic journey building a strong foundation in computer science and information technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start mb-4 md:mb-0">
                  <div className="p-3 bg-blue-600 rounded-lg mr-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <h4 className="text-xl font-semibold text-blue-600 mb-2">{edu.institution}</h4>
                    <div className="flex flex-wrap items-center text-gray-600 gap-4 mb-2">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        <span>{edu.cgpa}</span>
                      </div>
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Pursuing' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 mb-4 leading-relaxed">{edu.description}</p>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Learning Areas:</h5>
                <div className="grid md:grid-cols-2 gap-3">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
