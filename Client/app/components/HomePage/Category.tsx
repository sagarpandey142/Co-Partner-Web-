import React from 'react';
import { FaLaptopCode, FaDatabase, FaCloud, FaMobileAlt, FaRobot, FaNetworkWired, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const Category = () => {

  const techCategories = [
    { id: 'cat1', name: 'Web Development', position: 100, icon: <FaLaptopCode /> },
    { id: 'cat2', name: 'Database Management', position: 50, icon: <FaDatabase /> },
    { id: 'cat3', name: 'Cloud Computing', position: 40, icon: <FaCloud /> },
    { id: 'cat4', name: 'Mobile Development', position: 60, icon: <FaMobileAlt /> },
    { id: 'cat5', name: 'Artificial Intelligence', position: 70, icon: <FaRobot /> },
    { id: 'cat6', name: 'Networking', position: 200, icon: <FaNetworkWired /> },
    { id: 'cat7', name: 'Cybersecurity', position: 300, icon: <FaShieldAlt /> },
    { id: 'cat8', name: 'Data Analysis', position: 70, icon: <FaChartLine /> }
  ];

  return (
    <div className='p-20 flex flex-col justify-center items-center gap-4  pb-32 border-b-[2px] border-gray-200'>
      <p className='text-2xl font-bold '>Popular Category</p>
      <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-11/12 mx-auto'>
        {techCategories.map((data, index) => (
          <div 
            key={index} 
            className='flex gap-4 p-4 justify-center items-center  rounded-lg transition transform hover:-translate-y-2 hover:bg-white hover:brightness-110 hover:shadow-lg'
          >
            <div className='text-blue-600 text-3xl bg-gray-200 px-3 py-2 rounded-lg'>
              {data.icon}
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-sm font-bold text-slate-700'>{data.name}</p>
              <p className='text-[12px] text-slate-600'>{data.position} Open Position{data.position > 1 ? 's' : ''}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
