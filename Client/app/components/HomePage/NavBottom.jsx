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


      <div className=" max-w-[80%] flex flex-wrap gap-5 p-5 justify-between  items-center mx-auto">
      <div className="flex gap-5">
        <div className="flex justify-between items-center gap-2 ml-6">
          <SiApacheopenoffice className="text-2xl text-blue-600" />
          <a className="md:text-xl text-lg font-bold" href="/" aria-label="Brand">ProjectBuddy</a>
        </div>

        
      </div>

      <div className="hs-dropdown relative inline-flex" data-hs-dropdown-placement="bottom-right">
        <div className="flex flex-row gap-3 items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-evenly">
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