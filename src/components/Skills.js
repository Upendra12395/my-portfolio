import React from 'react';

const data = [
    {
        name: 'Node.js',
        level: 'Advanced',
        description: 'Experienced in building scalable backend services, Microservices and APIs using Node.js and Express.',
        percentage: 90,
        color: 'indigo'
    },
    {
        name: 'React',
        level: 'Intermediate',
        description: 'Proficient in building dynamic web applications with React and managing state with Redux.',
        percentage: 50,
        color: 'green'
    },
    {
        name: 'MongoDB',
        level: 'Advanced',
        description: 'Experienced in creating Schema, static and dynamic methods to fetch and updtae the data.',
        percentage: 70,
        color: 'blue'
    },
    {
        name: 'JavaScript',
        level: 'Advanced',
        description: 'Experience in ES6+, asynchronous programming, and building interactive UIs.',
        percentage: 90,
        color: 'indigo'
    },
    {
        name: 'Redis',
        level: 'Advanced',
        description: 'Experience in ES6+, asynchronous programming, and building interactive UIs.',
        percentage: 90,
        color: 'indigo'
    },
    {
        name: 'JavaScript',
        level: 'Advanced',
        description: 'Experience in ES6+, asynchronous programming, and building interactive UIs.',
        percentage: 90,
        color: 'indigo'
    },
    {
        name: 'JavaScript',
        level: 'Advanced',
        description: 'Experience in ES6+, asynchronous programming, and building interactive UIs.',
        percentage: 90,
        color: 'indigo'
    },
    {
        name: 'JavaScript',
        level: 'Advanced',
        description: 'Experience in ES6+, asynchronous programming, and building interactive UIs.',
        percentage: 90,
        color: 'indigo'
    },
    {
        name: 'JavaScript',
        level: 'Advanced',
        description: 'Experience in ES6+, asynchronous programming, and building interactive UIs.',
        percentage: 90,
        color: 'indigo'
    },
];

const SkillCard = ({ skill }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
        <h3 className={`text-2xl font-semibold mb-4 text-${skill.color}-600`}>{skill.name}</h3>
        <div className="flex items-center mb-2">
            <span className={`bg-${skill.color}-200 text-${skill.color}-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`}>
                {skill.level}
            </span>
        </div>
        <p className="text-gray-600">{skill.description}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
            <div className={`bg-${skill.color}-500 h-2.5 rounded-full`} style={{ width: `${skill.percentage}%` }}></div>
        </div>
    </div>
);

export function Skills() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}
