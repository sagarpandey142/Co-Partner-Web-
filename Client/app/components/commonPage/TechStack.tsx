// Components/PopularTechStackSection.tsx
import React from 'react';

const PopularTechStackSection: React.FC = () => {
  // Sample data for popular tech stack
  const techStack = [
    { id: 1, name: 'React', openPositions: '25K+' },
    { id: 2, name: 'Vue.js', openPositions: '10K+' },
    { id: 3, name: 'Angular', openPositions: '20K+' },
    { id: 4, name: 'Node.js', openPositions: '30K+' },
    { id: 5, name: 'Express.js', openPositions: '15K+' },
    { id: 6, name: 'MongoDB', openPositions: '12K+' },
    { id: 7, name: 'PostgreSQL', openPositions: '8K+' },
    { id: 8, name: 'Django', openPositions: '7K+' },
    { id: 9, name: 'Flask', openPositions: '5K+' },
    { id: 10, name: 'Spring Boot', openPositions: '18K+' },
    { id: 11, name: 'Laravel', openPositions: '10K+' },
    { id: 12, name: 'Ruby on Rails', openPositions: '6K+' },
  ];

  return (
    <div className=" bg-gray-200 max-w-8xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-10 pl-28">Most Popular Tech Stack</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {techStack.map((tech) => (
          <div key={tech.id} className="flex flex-col pl-28">
            <h2 className="text-base font-semibold">{tech.name}</h2>
            <p className="text-sm text-gray-600">{tech.openPositions} open positions</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTechStackSection;
