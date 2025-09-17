import React from 'react';
import { Code, Globe, Database, GitBranch, Users, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Java', 'C', 'Python'],
      color: 'bg-blue-500',
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['HTML', 'CSS', 'React.js', 'Node.js'],
      color: 'bg-green-500',
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
      color: 'bg-purple-500',
    },
    {
      title: 'DevOps Tools',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'Jenkins', 'Docker'],
      color: 'bg-orange-500',
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Critical Thinking'],
      color: 'bg-teal-500',
    },
    {
      title: 'Personal Qualities',
      icon: Brain,
      skills: ['Adaptability', 'Attention to Detail', 'Self-Motivation'],
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive set of technical and soft skills developed through education, internships, and hands-on projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;