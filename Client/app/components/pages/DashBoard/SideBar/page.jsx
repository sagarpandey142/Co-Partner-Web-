"use client";
import React from 'react';
import { MdOutlineLibraryBooks, MdOutlineSettings } from 'react-icons/md';
import { BsSuitcaseLgFill } from 'react-icons/bs';
import { CiBookmarkMinus } from 'react-icons/ci';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import  DashboardArray  from '../../../ArrayUsable/CandidateDashArray';
import { LuBadgePlus } from "react-icons/lu";
import { IoCopyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { updateclicktrack } from '../../../../../GlobalRedux/Features/Userdataslices';

// Create a mapping of icon names to icon components
const iconMap = {
  MdOutlineLibraryBooks,
  BsSuitcaseLgFill,
  CiBookmarkMinus,
  HiOutlineBellAlert,
  MdOutlineSettings,
  LuBadgePlus,
  IoCopyOutline
};

const Page = () => {
  const dispatch = useDispatch();
  const { clicktrack } = useSelector((state)=> state.userDataSlice); // Define RootState inline

  const handleclicktrack = (index) => {
    dispatch(updateclicktrack(index));
  };

  return (
    <div className=' w-[19rem]  overflow-hidden '>
      <p className=' mt-8 text-slate-600 uppercase text-md font-semibold'>Candidate Dashboard</p>
      <div className=' flex flex-col  mt-5'>
        {DashboardArray.map((data, index) => {
          const IconComponent = iconMap[data.icon];
          return (
            <div key={index} onClick={() => handleclicktrack(index)} className={`flex gap-4 items-center p-4 pl-2 font-semibold cursor-pointer ${clicktrack === index ? "bg-blue-100 text-blue-700 border-l-[4px] border-blue-600" : "text-slate-600 "}`}>
              <div className='text-2xl'>{IconComponent && <IconComponent />}</div>
              <div className='text-md'>{data.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
