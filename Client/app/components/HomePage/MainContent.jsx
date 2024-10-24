"use client"
import React, { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import image1 from "../Assets/homepic1.png"
import { CiSearch } from "react-icons/ci";
import { MdOutlineMyLocation } from "react-icons/md";
import {CiBookmarkMinus} from "react-icons/ci"
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import Navbar from './Navbar';
import Link from 'next/link';
import NavBottom from './NavBottom'
import { useToast,toast } from 'react-toastify';


const MainContent = () => {
  const { user, error, isLoading } = useUser(); 
  const router = useRouter();
 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {  // Tailwind's sm breakpoint is 640px
        toast.warn("You are viewing this site from mobile. In the absence of a dedicated mobile design, the website is free of cost, so we can show you only limited access.");
      }
    };

    // Call on component mount
    handleResize(); 

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <header className={``}>
      <nav className="">
      {!isLoading && user && <Navbar />}
      <NavBottom/>
        <div className=' bg-gray-100'> 
        <div className="w-9/12 mx-auto flex justify-around items-center  py-20 ">
      
            <div className='flex flex-col gap-5'>
              <p className='lg:text-4xl text-2xl  text-slate-800 font-semibold lg:max-w-[65%] md:max-w-[85%]'>Find a Project that suits your interest & skills.</p>
              <p className="text-slate-400 text-md md lg:max-w-[70%] md:max-w-[90%]">
                Creating a successful project involves defining clear and specific goals, developing a comprehensive plan with timelines and milestones.
              </p>
            <Link href="https://co-partner-web-zyjv.vercel.app/components/ProjectInfo/SearchProject" target="_blank" 
  rel="noopener noreferrer" >
                <div className=' hidden sm:flex lg:max-w-[89%] md:max-w-[90%]   lg:px-2 lg:py-2 md:px-1 md:py-2 bg-white rounded-xl'>
                    <div className=' h-auto flex justify-center items-center gap-3 border-r-[3px] border-gray-200'>
                          <CiSearch className=' text-blue-700 lg:text-2xl md:text-md'/>
                          <p className=' text-slate-500 mr-3 text-sm lg:text-lg lg:whitespace-nowrap'>Project Title, Keyword...</p>
                    </div>
                    <div className=' px-3 h-auto flex justify-center items-center gap-3 '>
                          <MdOutlineMyLocation className=' text-blue-700 lg:text-2xl md:text-md'/>
                          <p className=' text-slate-500 mr-3 text-sm lg:text-lg lg:whitespace-nowrap'>Your Location</p>
            
                    </div>
                    <div className=' lg:ml-5 ml-2 bg-blue-700 lg:px-2 lg:py-2 px-2 py-2 rounded-lg'>
                           <p className=' text-white text-sm lg:text-lg text-center lg:whitespace-nowrap' >Find Project</p>
                    </div>
                </div>
              </Link>
              <p className='flex flex-wrap  border text-sm'><div className=' text-slate-400'>Suggestion : </div> <span>Designer , Programming , Digital Marketing , Video , Animation </span></p>
              <div className=' mt-3 flex gap-5'>
                <div className=" bg-white flex lg:flex-row flex-col items-center lg:p-3 p-2 gap-5 rounded-xl lg:px-5 px-4 ">
                  <div className="bg-white p-3 rounded-lg">
                    <PiSuitcaseSimpleDuotone className="text-3xl text-yellow-700" />
                  </div>
                  <div className="flex flex-col ">
                    <p className="lg:text-2xl text-lg text-slate-800 font-semibold whitespace-nowrap">50,000 +</p>
                    <p className="text-slate-600 lg:text-md text-sm font-semibold whitespace-nowrap">Live Project</p>
                  </div>
                
                </div>
                <div className=" bg-white flex lg:flex-row flex-col items-center lg:p-3 p-2 gap-5 rounded-xl lg:px-5 px-4">
                  <div className="bg-white p-3 rounded-lg">
                    <IoPeople className="text-3xl text-yellow-700" />
                  </div>
                  <div className="flex flex-col">
                    <p className="lg:text-2xl text-lg text-slate-800 font-semibold whitespace-nowrap">10,000 +</p>
                    <p className="text-slate-600 lg:text-md text-sm  font-semibold whitespace-nowrap">People</p>
                  </div>
                
                </div>
                
              </div>
            </div>
            
            <div className="hidden lg:block">
              <Image src={image1} alt="HomePic" width={800} height={800} />
            </div>

        </div>
          </div>
      </nav>
      </header>
  
  );
};

export default MainContent;
