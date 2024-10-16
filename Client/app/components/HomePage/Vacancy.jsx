import React from 'react';

const Vacancy = () => {
  // Define an array of tech stacks with their respective positions
  const techStack = [
    { name: 'React', positions: 4 },
    { name: 'Next.js', positions: 26 },
    { name: 'Node.js', positions: 9 },
    { name: 'Express', positions: 11 },
    { name: 'MongoDB', positions: 37 },
    { name: 'JWT', positions: 2 },
    { name: 'React Native', positions: 10 },
    { name: 'Tailwind CSS', positions: 14 },
    { name: 'Chart.js', positions: 8 },
    { name: 'Expo', positions: 5 },
    { name: 'Rust', positions: 6 },
    { name: 'UPI Integration', positions: 7 }
  ];

  return (
    <div className=" px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mb-14">
      <h1 className="lg:text-3xl text-2xl font-bold mb-10 pl-28">Most Popular Tech Stack</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-6">
        {techStack.map((tech, index) => (
          <a key={index} className="group flex flex-col bg-white rounded-xl " href="#">
            <div className="p-2 md:p-3">
              <div className="flex flex-col justify-between items-center">
                <div className="flex items-center">
                  <h3 className="ml-2 group-hover:text-blue-600 font-semibold text-gray-800">
                    {tech.name}
                  </h3>
                </div>
                <div className="ps-3">
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    {tech.positions} job positions
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Vacancy;
