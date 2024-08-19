"use client"
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import {SignupButton} from '../signup-button'
import { LoginButton } from '../login-button';
import { LogoutButton } from '../logout-button';
import { IoCallSharp } from "react-icons/io5";
import { SiApacheopenoffice } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";
import Image from 'next/image'
import image1 from "../Assets/homepic1.png"
import { CiSearch } from "react-icons/ci";
import { MdOutlineMyLocation } from "react-icons/md";
import {CiBookmarkMinus} from "react-icons/ci"
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import Navbar from './Navbar';
import Link from 'next/link';





const MainContent = () => {
  const { user, error, isLoading } = useUser(); 
  const router = useRouter();
  return (
    <header className="">
      <nav className="">
      <Navbar/>
        <div className=' bg-gray-100'> 
        <div className="w-9/12 mx-auto flex justify-around items-center  py-20 ">
      
            <div className='flex flex-col gap-5'>
              <p className='text-4xl text-slate-800 font-semibold max-w-[65%]'>Find a Project that suits your interest & skills.</p>
              <p className="text-slate-400 text-md max-w-[70%]">
                Creating a successful project involves defining clear and specific goals, developing a comprehensive plan with timelines and milestones.
              </p>
            <Link href="components/ProjectInfo/SearchProject">
                <div className=' flex max-w-[89%]  px-3 py-4 bg-white'>
                    <div className=' h-auto flex justify-center items-center gap-3 border-r-[3px] border-gray-200'>
                          <CiSearch className=' text-blue-700 text-2xl'/>
                          <p className=' text-slate-500 mr-3'>Project Title, Keyword...</p>
                    </div>
                    <div className=' px-3 h-auto flex justify-center items-center gap-3 '>
                          <MdOutlineMyLocation className=' text-blue-700 text-2xl'/>
                          <p className=' text-slate-500'>Your Location</p>
            
                    </div>
                    <div className=' ml-5 bg-blue-700 px-3 py-3 rounded-lg'>
                                <p className=' text-white'>Find Project</p>
                    </div>
                </div>
              </Link>
              <p className='flex  text-sm'><div className=' text-slate-400'>Suggestion :</div> Designer , Programming , Digital Marketing , Video , Animation</p>
              <div className=' mt-3 flex gap-5'>
                <div className=" bg-white flex items-center p-3 gap-5 rounded-xl px-5">
                  <div className="bg-white p-3 rounded-lg">
                    <PiSuitcaseSimpleDuotone className="text-3xl text-yellow-700" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-2xl text-slate-800 font-semibold">50,000 +</p>
                    <p className="text-slate-600 text-md font-semibold">Live Project</p>
                  </div>
                
                </div>
                <div className=" bg-white flex items-center p-3 gap-5 rounded-xl px-5">
                  <div className="bg-white p-3 rounded-lg">
                    <IoPeople className="text-3xl text-yellow-700" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-2xl text-slate-800 font-semibold">10,000 +</p>
                    <p className="text-slate-600 text-md font-semibold">People</p>
                  </div>
                
                </div>
                
              </div>
            </div>
            
            <div className=''>
              <Image src={image1} alt="HomePic" width={800} height={800} />
            </div>
        </div>
          </div>
      </nav>
      </header>
  
  );
};

export default MainContent;
