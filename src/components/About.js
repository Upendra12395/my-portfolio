import React from 'react';

export function About() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            I am a skilled software developer with 2.5 years of professional experience, specializing in full-stack development.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            My expertise lies in using <span className="font-semibold">Node.js</span> for backend development, where I focus on building scalable, efficient server-side applications and handling RESTful APIs. 
            I utilize <span className="font-semibold">MongoDB</span> as my database solution, ensuring flexibility and scalability for data storage and management.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            On the frontend, I excel in <span className="font-semibold">React</span>, creating dynamic, responsive user interfaces with a focus on delivering a seamless user experience.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Additionally, I implement <span className="font-semibold">Redis</span> for caching to enhance application performance and reduce latency, and I leverage <span className="font-semibold">Socket.IO</span> for real-time communication features in my applications.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With a strong grasp of both frontend and backend technologies, I am proficient in managing the entire development process, making me a well-rounded developer capable of delivering robust web applications.
          </p>
        </div>
      </div>
    </div>
  );
};
