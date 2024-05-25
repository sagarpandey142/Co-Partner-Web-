"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { SignupButton } from "@/components/signup-button";
import { LoginButton } from "@/components/login-button";
import { LogoutButton } from "@/components/logout-button";
import Link from 'next/link';
import { BsBagDashFill } from "react-icons/bs";
import CountrySelect from './commonPage/CountrySelect'; 
import React, { useState } from "react";

const NavBar = () => {
  const [selectedCountry, setSelectedCountry] = useState(''); 
  const [jobTitle, setJobTitle] = useState('');
  const { user, error, isLoading } = useUser(); 

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4 text-gray-700 items-center">
      <div className="flex gap-20 justify-around">
        <ul className="p-3 rounded-md flex flex-row text-sm gap-6 bg-gray-200 w-full">
          <li>
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/find-job">
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/employers">
              <span>About us</span>
            </Link>
          </li>
          <li>
            <Link href="/candidates">
              <span>Contackt Us</span>
            </Link>
          </li>
          <li>
            <Link href="/customer-support">
              <span>Customer Support</span>
            </Link>
          </li>
        </ul>
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

      <div className=' flex items-center justify-between mt-2 gap-20'>
        <div className='flex items-center gap-3'>
          <BsBagDashFill style={{ color: '007AE9', fontSize: '22px' }} />
          <p className='font-bold text-xl text-slate-800'>Copartner</p>
        </div>
    
      
          <div className='rounded-md p-1'>
            <CountrySelect />
          </div>

          <div>
            <input 
              className='border-[2px] border-slate-300 px-20 py-2 w-[15rem] outline-none rounded-lg' 
              placeholder='Search...' 
              value={jobTitle} 
              onChange={handleJobTitleChange} 
            />
          </div>
     


        
      </div>
    </div>
  );
};

export default NavBar;
