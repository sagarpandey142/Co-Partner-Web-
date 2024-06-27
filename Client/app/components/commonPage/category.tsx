import React from 'react';
import { ChevronRightIcon, BriefcaseIcon, AcademicCapIcon, CashIcon, UserCircleIcon, DesktopComputerIcon, BookOpenIcon, ChartSquareBarIcon } from '@heroicons/react/solid'; // Import from solid icons

const Category = () => {
  // Define an array of categories with their respective job positions
  const categories = [
    { name: 'Management', positions: 4, icon: <BriefcaseIcon className="flex-shrink-0 h-5 w-5 text-gray-800 dark:text-neutral-200" /> },
    { name: 'App Development', positions: 26, icon: <DesktopComputerIcon className="flex-shrink-0 h-5 w-5 text-gray-800 dark:text-neutral-200" /> },
    { name: 'Arts & Entertainment', positions: 9, icon: <BookOpenIcon className="flex-shrink-0 h-5 w-5 text-gray-800 dark:text-neutral-200" /> },
    { name: 'Accounting', positions: 11, icon: <CashIcon className="flex-shrink-0 h-5 w-5 text-gray-800 dark:text-neutral-200" /> },
    { name: 'UI Designer', positions: 37, icon: <UserCircleIcon className="flex-shrink-0 h-5 w-5 text-gray-800 dark:text-neutral-200" /> },
    { name: 'Apps', positions: 2, icon: <DesktopComputerIcon className="flex-shrink-0 h-5 w-5 text-gray-800 dark:text-neutral-200" /> },
    { name: 'Content Writer', positions: 10, icon: <BookOpenIcon className="flex-shrink-0 h-5 w-5 text-gray-800 dark:text-neutral-200" /> },
    { name: 'Analytics', positions: 14, icon: <ChartSquareBarIcon className="flex-shrink-0 h-5 w-5 text-gray-800 dark:text-neutral-200" /> }
  ];

  // Function to render the icon based on category index
  const renderIcon = (index) => {
    // Example: return categories[index].icon;
    switch (index) {
      case 0:
        return <BriefcaseIcon className="flex-shrink-0 h-5 w-5 text-gray-800" />;
      case 1:
        return <DesktopComputerIcon className="flex-shrink-0 h-5 w-5 text-gray-800 " />;
      case 2:
        return <BookOpenIcon className="flex-shrink-0 h-5 w-5 text-gray-800" />;
      case 3:
        return <CashIcon className="flex-shrink-0 h-5 w-5 text-gray-800 " />;
      case 4:
        return <UserCircleIcon className="flex-shrink-0 h-5 w-5 text-gray-800 " />;
      case 5:
        return <DesktopComputerIcon className="flex-shrink-0 h-5 w-5 text-gray-800 " />;
      case 6:
        return <BookOpenIcon className="flex-shrink-0 h-5 w-5 text-gray-800 " />;
      case 7:
        return <ChartSquareBarIcon className="flex-shrink-0 h-5 w-5 text-gray-800 " />;
      default:
        return <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-800 " />;
    }
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
     <h1 className="text-3xl font-bold mb-10 pl-28">Most Popular Tech Category</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        {categories.map((category, index) => (
          <a key={index} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition" href="#">
            <div className="p-4 md:p-5">
  
              <div className="flex flex-col justify-between items-center">
              {renderIcon(index)}
                <div className="flex items-center">
                 
                  <h3 className="ml-2 group-hover:text-blue-600 font-semibold text-gray-800 ">
                    {category.name}
                  </h3>
                </div>
                <div className="ps-3">
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    {category.positions} job positions
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

export default Category;
