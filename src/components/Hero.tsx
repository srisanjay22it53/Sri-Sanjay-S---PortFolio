import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-8">
            <img
  src="/sanjay.jpg"
  alt="Sri Sanjay S"
  className="
    w-32 h-32
    sm:w-40 sm:h-40
    md:w-44 md:h-44
    rounded-full
    mx-auto
    mb-8
    shadow-2xl
    border-4
    border-white
    object-cover
    object-[50%_12%]
  "
/>


          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            Sri Sanjay S
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6">
            Full Stack Developer
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Full Stack Developer skilled in Java, MERN stack, and DevOps tools such as Git, Docker,
            and CI/CD. Experienced in building and deploying real-world applications with a focus on
            scalability, efficiency, and user experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 shadow-lg"
              onClick={(e) => {
                e.currentTarget.setAttribute('href', '/resume.pdf');
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/sri-sanjay-s-64b546247/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>

            <a
              href="https://github.com/srisanjay22it53"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-800" />
            </a>

            <a
              href="mailto:sanjaysanjay58694@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-red-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
