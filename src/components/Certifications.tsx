import { Award, Calendar } from 'lucide-react';
const Certifications = () => {
  const certifications = [
    {
      title: 'GitHub Copilot with Python',
      issuer: 'Microsoft',
      date: '2024',
      description: 'Advanced certification covering AI-powered coding assistance, Python development best practices, and collaborative programming techniques.',
      skills: ['Python Programming', 'AI-Assisted Development', 'Code Optimization', 'GitHub Copilot'],
      color: 'from-blue-500 to-cyan-500',
      icon: '🐍'
    },
    {
      title: 'DevOps Essentials',
      issuer: 'Coursera',
      date: '2024',
      description: 'Comprehensive understanding of DevOps principles, CI/CD pipelines, containerization, and infrastructure automation.',
      skills: ['CI/CD Pipelines', 'Docker', 'Jenkins', 'Infrastructure as Code'],
      color: 'from-green-500 to-teal-500',
      icon: '⚙️'
    },
    {
      title: 'Java Programming',
      issuer: 'Coursera',
      date: '2024',
      description: 'In-depth Java programming certification covering core concepts, object-oriented programming, and enterprise application development.',
      skills: ['Core Java', 'OOP Concepts', 'Enterprise Java', 'Spring Framework'],
      color: 'from-red-500 to-orange-500',
      icon: '☕'
    },
    {
      title: 'Cloud Infrastructure',
      issuer: 'Oracle',
      date: '2024',
      description: 'Cloud computing fundamentals, Oracle Cloud Infrastructure services, and cloud architecture design principles.',
      skills: ['Cloud Computing', 'Oracle Cloud', 'Cloud Architecture', 'Infrastructure Management'],
      color: 'from-purple-500 to-pink-500',
      icon: '☁️'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications demonstrating expertise in key technologies and development practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{cert.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{cert.title}</h3>
                      <div className="flex items-center text-gray-600">
                        <Award className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{cert.issuer}</span>
                        <span className="mx-2">•</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                  {cert.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Issued in {cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;