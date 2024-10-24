import React from 'react';

const contacts = [
  {
    name: 'GitHub',
    url: 'https://github.com/Upendra12395',
    icon: 'fab fa-github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/upendra-chauhan-5684a5138/',
    icon: 'fab fa-linkedin'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Upendra12395/',
    icon: 'fab fa-leetcode'
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/ch95upendra',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>'
  }
];

export function Contact() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <div className="flex justify-center space-x-8">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300"
            >
              <i className={`${contact.icon} text-2xl text-gray-700 mr-2`}></i>
              <span className="text-lg text-gray-700">{contact.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
