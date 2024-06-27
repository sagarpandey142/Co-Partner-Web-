"use client"
import React from 'react';
import MainContent from "./MainContent"
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import {SignupButton} from '../signup-button'
import { LoginButton } from '../login-button';
import { LogoutButton } from '../logout-button';
import { IoCallSharp } from "react-icons/io5";
import { SiApacheopenoffice } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";
import Image from 'next/image'

const NavBar = () => {
  const { user, error, isLoading } = useUser(); 
  const router = useRouter();
  return (
    <header className="">
      <nav className="">

      <nav className="flex justify-around items-center bg-gray-200">
        <div className=" flex justify-center items-center p-2">
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex font-semibold items-center gap-x-2 hover:text-blue-500 text-sm hover:underline text-slate-500" href="#">Dashboard</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex font-semibold items-center gap-x-2 hover:text-blue-500 text-sm hover:underline text-slate-500" href="#">Users</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex font-semibold items-center gap-x-2 hover:text-blue-500 text-sm hover:underline text-slate-500" href="#">Account</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex font-semibold items-center gap-x-2 hover:text-blue-500 text-sm hover:underline text-slate-500" href="#">Projects</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex font-semibold items-center gap-x-2 hover:text-blue-500 text-sm hover:underline text-slate-500" href="#">Calendar</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex font-semibold items-center gap-x-2 hover:text-blue-500 text-sm hover:underline text-slate-500" href="#">
              Documentation
              
            </a>
          </div>
        </div>
        <div className='flex items-center gap-2'>
            <FaPhoneVolume className='text-md'/>
            <a className='text-sm text-slate-500'>8509157398</a>
        </div>
      </nav>

      <div className="flex gap-5 p-5 justify-around items-center">
  <div className="flex gap-5">
    <div className="flex justify-between items-center gap-2 ml-6">
      <SiApacheopenoffice className="text-2xl text-blue-600" />
      <a className="text-xl font-bold" href="#" aria-label="Brand">ProjectBuddy</a>
    </div>

    <div className="hidden sm:flex items-center">
      <label htmlFor="country" className="sr-only">Country</label>
      <select id="country" name="country" className="py-2 px-3 border border-slate-200 rounded-lg text-sm mr-3">
        <option value="india" selected>India</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
        <option value="canada">Canada</option>
        {/* Add more options as needed */}
      </select>

      <label htmlFor="icon" className="sr-only">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pointer-events-none pl-4">
          <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <input type="text" id="icon" name="icon" className="py-2 px-40 ps-10 block w-full border border-slate-200 rounded-lg text-sm" placeholder="Search Projects, Keyword" />
      </div>
    </div>
  </div>

  <div className="hs-dropdown relative inline-flex" data-hs-dropdown-placement="bottom-right">
    <div className="flex flex-row gap-2">
      <div className="flex gap-4 justify-evenly">
        {!user && !isLoading && (
          <>
            <SignupButton />
            <LoginButton />
          </>
        )}
        {user && !isLoading && (
          <>
            <LogoutButton />
          </>
        )}
      </div>
    </div>

    {/* {user ? (
      <div className="flex gap-2 ml-3">
        <img
          src={user.picture}
          alt={user.name}
          className="hs-dropdown-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
          onClick={() => router.push('/components/pages/DashBoard/MainPage')}
        />
      </div>
    ) : (
      <div>.</div>
    )} */}
  </div>
</div>

        <div className="w-10/12 ml-36 flex justify-around items-center mx-auto py-20">
      
            <div className='flex flex-col gap-5'>
              <p className='text-4xl text-slate-800 font-semibold max-w-[70%]'>Find a Project that suits your interest & skills.</p>
              <p className="text-slate-400 text-md max-w-[70%]">
                Creating a successful project involves defining clear and specific goals, developing a comprehensive plan with timelines and milestones.
              </p>
              <button className="mt-10 bg-blue-600 text-white max-w-[30%] px-4 py-2 rounded-md hover:bg-blue-700 border-2 border-blue-600 transition-colors duration-300 text-center whitespace-nowrap" onClick={()=>router.push('/createProject')}>Post A Project...</button>
            </div>
            <div className=''>
              <Image src="https://img.freepik.com/premium-vector/illustration-woman-working-computer-office-concept-blue-colors_484720-1306.jpg" alt="HomePic" width={500} height={600} />
            </div>
          </div>

        
      </nav>
      </header>
  
  );
};

export default NavBar;
