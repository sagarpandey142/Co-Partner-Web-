"use client"
import React from 'react';
import front from "../Assets/front.jpg"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import RatingsAndReview from './RatingsAndReview'

const MainContent  = () => {
    const router = useRouter();
    
  return (
    <main id="" >
      <nav className="sticky  bg-white text-sm font-medium text-black ring-1 ring-gray-900 ring-opacity-5 border-t shadow-sm shadow-gray-100 pt-4 md:pb-3 -mt-px  dark:border-neutral-400 dark:shadow-neutral-400/70" aria-label="Jump links">
        <div className="max-w-7xl snap-x w-full flex items-center overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 ">
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
            <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">Dashboard</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">Users</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">Account</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">Projects</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">Calendar</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">
              Documentation
              
            </a>
          </div>
        </div>
      </nav>

      <div className="w-8/12 flex items-center gap-5 mx-auto py-10 ">
      
        <div className='flex flex-col gap-5'>
          <p className='text-4xl text-slate-800 font-semibold '>Find a Project that suits your interest & skills.</p>
          <p className="text-slate-600 text-lg max-w-[80%] ">
            Creating a successful project involves defining clear and specific goals, developing a comprehensive plan with timelines and milestones.
          </p>
          <button className="mt-10 bg-blue-600 text-white max-w-[40%] px-4 py-2 rounded-md hover:bg-blue-700 border-2 border-blue-600 transition-colors duration-300 text-center whitespace-nowrap" onClick={()=>router.push('/createProject')}>Post A Project...</button>
        </div>
        <div className=''>
          <Image src={front} alt="HomePic" width={900} height={900} />
        </div>
      </div>
      
      
   
    </main>
  );
};

export default MainContent;
