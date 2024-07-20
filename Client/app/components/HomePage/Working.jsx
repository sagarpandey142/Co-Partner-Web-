"use client";

import React from 'react';
import Xarrow from 'react-xarrows';
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoCloudUploadSharp } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";

const Working = () => {
  return (
    <div className='bg-gray-200 p-10 h-[32rem] flex flex-col justify-center items-center'>
      <p className='text-2xl text-slate-700 flex justify-center font-bold'>How Project Buddy Works</p>
      <div className='flex justify-center items-center gap-32 mt-11 '>
        <div id="element1" className='flex flex-col gap-3 items-center justify-center'>
          <div className='bg-white w-fit p-3 mx-auto rounded-full'>
            <FaUserPlus className='text-blue-600 text-3xl mx-auto' />
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-lg text-slate-800 mx-auto font-bold'>Create Account</h2>
            <p className='text-md text-slate-500 mx-auto'>Step 1: Fill out your details</p>
          </div>
        </div>
        <div id="element2" className='flex flex-col p-8 rounded-lg gap-3 bg-white'>
          <div className='bg-blue-700 w-fit p-3 mx-auto rounded-full'>
            <IoCloudUploadSharp className='text-white text-4xl' />
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-lg text-slate-800 mx-auto font-bold'>Upload CV/Resume</h2>
            <p className='text-md text-slate-500 mx-auto'>Step 2: Upload Your Resume</p>
          </div>
        </div>
        <div id="element3" className='flex flex-col gap-3'>
          <div className='bg-white w-fit p-3 mx-auto rounded-full'>
            <FaSearchPlus className='text-blue-600 text-2xl' />
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className=' text-lg text-slate-800 mx-auto font-bold'>Find Suitable Project</h2>
            <p className='text-md text-slate-500 mx-auto'>Step 3: Find a project</p>
          </div>
        </div>
        <div id="element4" className='flex flex-col gap-3'>
          <div className='bg-white w-fit p-3 mx-auto rounded-full'>
            <IoCheckmarkDoneCircleSharp className='text-blue-600 text-3xl' />
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className=' text-lg text-slate-800 mx-auto font-bold'>Apply Project</h2>
            <p className='text-md text-slate-500 mx-auto'>Step 4: Apply The Project</p>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Working;
