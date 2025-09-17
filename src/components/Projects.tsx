import React from 'react';
import { Github, ExternalLink, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Cafe Management System',
      description: 'A comprehensive full-stack application for managing cafe operations with modern web technologies.',
      period: 'Dec 2024 – Jan 2025',
      image: 'https://images.pexels.com/photos/1833586/pexels-photo-1833586.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'User Authentication & Authorization',
        'Real-time Order Handling',
        'Inventory Management System',
        'Automated Billing & Invoicing',
        'RESTful APIs',
        'Scalable Database Design',
        'Responsive UI/UX',
        'Payment Integration'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'CSS3', 'REST API'],
      githubUrl: 'https://github.com/srisanjay22it53',
      liveUrl: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Student Management Portal',
      description: 'A web application for educational institutions to manage student data, grades, and academic records.',
      period: 'Nov 2024 – Dec 2024',
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Student Registration & Profiles',
        'Grade Management System',
        'Course Enrollment',
        'Academic Reports',
        'Role-based Access Control',
        'Data Export Functionality'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
      githubUrl: 'https://github.com/srisanjay22it53',
      liveUrl: '#',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Personal Finance Tracker',
      description: 'A React-based application to track personal expenses, income, and financial goals with data visualization.',
      period: 'Oct 2024 – Nov 2024',
      image: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Expense Categorization',
        'Income Tracking',
        'Budget Planning',
        'Financial Analytics',
        'Data Visualization',
        'Export Reports'
      ],
      technologies: ['React.js', 'Chart.js', 'Local Storage', 'CSS3', 'JavaScript'],
      githubUrl: 'https://github.com/srisanjay22it53',
      liveUrl: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my development skills through real-world applications and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{project.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                  <ul className="grid grid-cols-1 gap-1 text-sm">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 text-sm"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;