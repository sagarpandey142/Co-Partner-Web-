"use client"
import DashboardPage from '../../../commonPage/DashboardPage';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsSuitcaseLgFill } from 'react-icons/bs';
import { CiBookmarkMinus } from 'react-icons/ci';
import { FaArrowRight } from "react-icons/fa";
import not_found from "../../../Assets/404.png";
import { useDispatch, useSelector } from 'react-redux';
import { updateclicktrack } from '../../../../../GlobalRedux/Features/Userdataslices';

const Page = ( ) => {
   const {userData}=useSelector((slice)=>slice.userDataSlice)
   const dispatch=useDispatch();
  const router = useRouter();
  const handleNavigate = () => {
    dispatch(updateclicktrack(5));
  };

  return (
    <div className="p-16 lg:w-[130%] md:w-[70%] sm:w-[40%] h-[100%] border-l-[2px] border-gray-200">
      <p className="text-slate-800 text-2xl font-semibold">Welcome, {userData?.name} 🎉</p>
      <p className="mt-2 text-slate-600 text-md">Here is your daily activities and project alerts</p>
      <div className="lg:w-12/12 md:7/12 sm:5/12 mt-8 gap-3 flex ">
        {/* Applied project */}
        <div className="bg-orange-200 flex justify-between items-center p-2 gap-5 rounded-xl px-3">
          <div className="flex flex-col p-3">
            <p className="text-md text-slate-800 font-semibold">{userData?.AppliedProject?.length}</p>
            <p className="text-slate-600 text-md font-semibold">Applied Projects</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <BsSuitcaseLgFill className="text-3xl text-orange-700" />
          </div>
        </div>

        {/* Favorite project */}
        <div className="bg-gray-300 flex items-center p-3 gap-5 rounded-xl px-5">
          <div className="flex flex-col">
            <p className="text-2xl text-slate-800 font-semibold">{userData?.SavedJobs?.length}</p>
            <p className="text-slate-600 text-md font-semibold">Favorite Projects</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <CiBookmarkMinus className="text-3xl text-yellow-700" />
          </div>
        </div>

        {/* Project Alerts */}
        <div className="bg-green-300 flex items-center gap-6 p-1 rounded-xl px-5">
          <div className="flex flex-col">
            <p className="text-2xl text-slate-800 font-semibold">{userData?.Alerts?.length}</p>
            <p className="text-slate-600 text-md font-semibold">Total Alerts</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <CiBookmarkMinus className="text-3xl text-green-700" />
          </div>
        </div>
      </div>

      {/* Compliments */}
      <div className=" mt-4 bg-red-400 p-6 rounded-xl font-semibold flex gap-2 items-center">
        <div>
          <img src={userData?.ProfileImage}  className=" rounded-full h-[3rem] w-[4rem]  object-cover -mt-5" />
        </div>
        <div className="flex gap-4 rounded-full">
          <div className="flex flex-col gap-2">
            <p className="text-white font-semibold text-sm">Welcome to our community! We&apos;re excited to have you with us and look forward to seeing you thrive</p>
            <p className="text-white font-semibold text-sm">Complete your profile to unlock more opportunities and connect with like-minded professionals</p>
          </div>
        </div>
        <div className="bg-white  p-3  rounded-xl cursor-pointer" onClick={handleNavigate}>
          <p className="text-red-500 flex flex-row items-center  ">
            <p className=' text-sm '>Edit Profile</p>
            <FaArrowRight />
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-7">
        <div className="flex justify-between">
          <p className="text-md text-slate-700 font-semibold">Recently Applied</p>
          <p className="text-slate-400 text-md gap-2 flex items-center">View all
            <FaArrowRight />
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="mt-3 bg-gray-200 p-2 rounded-lg pl-2 pr-2">
            <div className="flex text-slate-800 text-md justify-between ">
              <div className='pl-8'>Project</div>
             <div className=' flex  w-[55%] justify-around'>
              <div>Status</div>
              <div>Action</div>
            </div>
            </div>
          </div>
          <div>
            {
              Array.isArray(userData?.AppliedProject) && userData.AppliedProject.length === 0 ? (
                <div>
                  <Image src={not_found} alt="Not Found" className="w-[20rem] h-[20rem] mx-auto" />
                </div>
              ) : (
                <div>
                  {
                    userData?.AppliedProject?.map((data, index) => {
                      return <DashboardPage key={index} location={userData?.Location} cardData={data} />;
                    })
                  }
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
