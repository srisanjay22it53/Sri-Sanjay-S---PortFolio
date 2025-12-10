import React from 'react';

const DownloadResumeButton: React.FC = () => {
  return (
    <a
      href="/resume.pdf"
      download="resume.pdf"
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
    >
      Download Resume
    </a>
  );
};

export default DownloadResumeButton;
