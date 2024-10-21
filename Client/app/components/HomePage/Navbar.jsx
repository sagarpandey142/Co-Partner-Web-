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
import { useDispatch } from 'react-redux';
import { updateclicktrack } from '../../../GlobalRedux/Features/Userdataslices';



const Navbar = () => {
    const { user, error, isLoading } = useUser(); 
    const [showRating,setShowRating]=useState(false);
    const[reviewModal,setreviewModal]=useState(false);
    const dispatch=useDispatch();

    async function CheckUserRatingAndReview() {
      if (user?.email) {
        const responseFromBackend = await CheckUserRating(user.email);
        if(responseFromBackend.data.success==true){
            setShowRating(true)
        }
      } else {
        console.log("some error occured ");
      }
    }

     function HandleAccountClick() {
       dispatch(updateclicktrack(5));
       window.open('https://co-partner-web-zyjv.vercel.app/components/pages/DashBoard/MainPage');
    }

    function HandleProjectClick(){
      dispatch(updateclicktrack(2));
      window.open('https://co-partner-web-zyjv.vercel.app/components/pages/DashBoard/MainPage');
    }
  
    useEffect(() => {
      if (user?.email) {
        CheckUserRatingAndReview();
      }
    }, [user]);

    



  return (
    <div>
         <nav className="flex justify-around items-center bg-gray-200">
        <div className=" flex justify-center items-center p-2">
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
       
               <div>
                   <Link className="inline-flex font-semibold items-center gap-x-2 hover:text-blue-500 text-sm hover:underline text-slate-500" href="https://co-partner-web-zyjv.vercel.app/components/pages/DashBoard/MainPage"    target="_blank" 
  rel="noopener noreferrer">Dashboard</Link>
               </div>
        
          
           </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex font-semibold items-center gap-x-2 hover:text-blue-500 text-sm hover:underline text-slate-500" href="#">Users</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex font-semibold items-center gap-x-2 hover:text-blue-500 text-sm hover:underline text-slate-500 cursor-pointer"  onClick={HandleAccountClick}>Account</a>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex font-semibold items-center gap-x-2 hover:text-blue-500 text-sm hover:underline text-slate-500" onClick={HandleProjectClick}>Projects</a>
          </div>
          
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
            <a className="inline-flex font-semibold items-center gap-x-2 hover:text-blue-500 text-sm hover:underline text-slate-500" href="#">
              Documentation
            </a>
          </div>
        </div>
        <div className='flex items-center gap-2'>
            <FaPhoneVolume className='text-md'/>
            <a className='text-sm text-slate-500'>+123 562902</a>
        </div>
      </nav>


  </div>
  )
}

export default Navbar