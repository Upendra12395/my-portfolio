import React from 'react';

const contacts = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'fab fa-twitter'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Upendra12395',
    icon: 'fab fa-github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'fab fa-linkedin'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/yourusername',
    icon: 'fab fa-leetcode'
  },
  {
    name: 'HackerRank',
    url: 'https://hackerrank.com/yourusername',
    icon: 'fab fa-hackerrank'
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
