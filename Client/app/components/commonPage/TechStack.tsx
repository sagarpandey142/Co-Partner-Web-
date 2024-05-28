// Components/PopularTechStackSection.tsx
import React from 'react';

const PopularTechStackSection: React.FC = () => {
  // Sample data for popular tech stack
  const techStack = [
    { id: 1, name: 'React', logo: 'https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png' },
    { id: 2, name: 'Vue.js', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTio6RgtprLK007lRVuQuffGjWN1HVds60cqnm_4jhZNg&s' },
    { id: 3, name: 'Angular', logo: 'https://w7.pngwing.com/pngs/752/651/png-transparent-angularjs-vue-js-others-angle-rectangle-triangle-thumbnail.png' },
    { id: 4, name: 'Node.js', logo: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png' },
    { id: 5, name: 'Express.js', logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png' },
    { id: 6, name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg' },
    { id: 7, name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png' },
    { id: 8, name: 'Django', logo: 'https://w7.pngwing.com/pngs/10/113/png-transparent-django-web-development-web-framework-python-software-framework-django-text-trademark-logo-thumbnail.png' },
    { id: 9, name: 'Flask', logo: 'https://w7.pngwing.com/pngs/166/342/png-transparent-flask-python-bottle-web-framework-web-application-flask-white-monochrome-shoe.png' },
    { id: 10, name: 'Spring Boot', logo: 'https://img.icons8.com/color/480w/spring-logo.png' },
    { id: 11, name: 'Laravel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png' },
    { id: 12, name: 'Ruby on Rails', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVz6I6Y2nzKQiGJ-izHWAF8tpnmLnxaO3e4omCbpZhg&s' },
    // Add more tech stack items as needed
  ];

  return (
    <div className="bg-gray-200 max-w-8xl mx-auto py-28 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Popular Tech Stack</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {techStack.map((tech) => (
          <div key={tech.id} className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg overflow-hidden">
            <img src={tech.logo} alt={tech.name} className="h-20 w-20 object-contain" />
            <h2 className="text-lg font-semibold mt-4">{tech.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTechStackSection;
