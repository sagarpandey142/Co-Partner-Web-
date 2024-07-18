'use client';

import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { IoIosTime } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { RiDeleteBack2Line } from "react-icons/ri";

interface BasicDetail {
  projectLength: number; // Adjust the type based on actual data structure
}

interface CardData {
  _id: string;
  projectName: string;
  BasicDetail: BasicDetail;
}

interface DashboardPageProps {
  cardData: CardData;
  Location?: string;
  deleteicon?: boolean;
  setdeleteproject?: (id: string) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({
  cardData,
  Location = "India",
  deleteicon = false,
  setdeleteproject,
}) => {
  const router = useRouter();

  const handleNavigate = (projectid: string) => {
    const queryString = new URLSearchParams({ projectid }).toString();
    router.push(`/components/ProjectInfo/ProjectDesc?${queryString}`);
  };

  return (
    <div className='flex justify-around items-center border-b-[2px] border-slate-300 p-2 mb-5'>
      <div>
        <div className='flex '>
          <p className='text-sm text-slate-800 font-semibold max-w-[70%]'>{cardData?.projectName}</p>
        </div>
        <div className='text-slate-500 text-md flex gap-2'>
          <p className='flex gap-2 items-center text-md'>
            <CiLocationOn />
            {Location}
          </p>
          <p className='flex gap-2 items-center text-md'>
            <IoIosTime />
            {cardData?.BasicDetail?.projectLength} Months
          </p>
        </div>
      </div>
      <div className='text-md text-slate-600'>
        Feb 2 2019 19:28
      </div>
      <div className='flex gap-2 items-center text-md text-green-600 font-bold'>
        <TiTick />
        Active
      </div>
      <div className='flex items-center gap-3'>
        <div
          className='cursor-pointer bg-gray-200 text-blue-700 font-semibold h-fit p-3 rounded-lg text-md flex items-center gap-2'
          onClick={() => {
            handleNavigate(cardData._id);
          }}
        >
          View Detail
          <FaArrowRight />
        </div>
        {deleteicon && setdeleteproject && (
          <div
            className='bg-red-100 rounded-lg p-5'
            onClick={() => {
              setdeleteproject(cardData._id);
            }}
          >
            <RiDeleteBack2Line className='text-red-500 font-semibold text-2xl' />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
