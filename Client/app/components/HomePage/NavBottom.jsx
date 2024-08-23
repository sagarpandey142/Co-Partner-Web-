import { useUser } from '@auth0/nextjs-auth0/client';
import {FaPhoneVolume} from "react-icons/fa"
import {SiApacheopenoffice} from "react-icons/si"
import React, { useEffect, useState } from 'react'
import {SignupButton} from '../signup-button'
import { LoginButton } from '../login-button';
import { LogoutButton } from '../logout-button';
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { CheckUserRating } from '../../Services/operations/RatingAndReview';
import ReviewSidebarModal from './RatingAndReview';
import Link from 'next/link';



const NavBottom = () => {
    const { user, error, isLoading } = useUser(); 
    const [showRating,setShowRating]=useState(false);
    const[reviewModal,setreviewModal]=useState(false);

    async function CheckUserRatingAndReview() {
      if (user?.email) {
        const responseFromBackend = await CheckUserRating(user.email);
        if(responseFromBackend.data.success==true){
            setShowRating(true)
        }
      } else {
        console.log("Usome error occured ");
      }
    }
  
    useEffect(() => {
      if (user?.email) {
        CheckUserRatingAndReview();
      }
    }, [user]);

    



  return (
    <div>


      <div className="flex gap-5 p-5 justify-around items-center">
      <div className="flex gap-5">
        <div className="flex justify-between items-center gap-2 ml-6">
          <SiApacheopenoffice className="text-2xl text-blue-600" />
          <a className="text-xl font-bold" href="/" aria-label="Brand">ProjectBuddy</a>
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
        <div className="flex flex-row gap-3 items-center">
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
           <div>{
                showRating &&  <MdOutlineGeneratingTokens className=' text-2xl text-blue-500  cursor-pointer' onClick={()=>{
                   setreviewModal(true)
                }}/>
             } 
           </div>
           <div>{
                 reviewModal && <ReviewSidebarModal setreviewModal={setreviewModal}/>
            }</div>
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
  </div>
  )
}

export default NavBottom;