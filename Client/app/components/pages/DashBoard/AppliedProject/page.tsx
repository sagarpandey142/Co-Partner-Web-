import React from 'react';
import DashboardPage from "../../../commonPage/DashboardPage";
import Image from 'next/image';
import not_found from "../../../Assets/404.png";
import { useSelector } from 'react-redux';





const Page =  (  ) => {
  
  const {userData}= useSelector((state)=>state.userDataSlice)
  return (
    <div className='w-[140%] p-16 border-l-[3px] border-gray-200'>
      <p className='text-slate-800 text-xl font-semibold'>Applied Project ({userData?.AppliedProject?.length})</p>
      {userData.AppliedProject?.length === 0 ? (
        <div>
          <Image src={not_found} alt='img' className='w-[20rem] h-[20rem] mx-auto' />
        </div>
      ) : (
        <div className='mt-3 flex flex-col gap-4'>
          <div className='mt-3 bg-gray-200 p-2 rounded-lg pl-2 pr-2'>
            <div className='flex text-slate-800 text-md justify-around'>
              <div>Project</div>
              <div className=' flex  w-[45%] justify-around'>
              <div>Date Applied</div>
              <div>Saved</div>
              <div>Action</div>
            </div>
            </div>
          </div>
          <div>
            {userData?.AppliedProject?.map((data, index) => {
            return <div key={index}>
                        <DashboardPage  location={userData?.Location} cardData={data}  />
              </div>
           })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
