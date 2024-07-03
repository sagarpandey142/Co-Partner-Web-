"use client"
import FavouriteCommon from '../../../../../app/components/commonPage/FavouriteCommon'
import Image from 'next/image'
import React from 'react'
import not_found from "../../../Assets/404.png"
import { useSelector } from 'react-redux'

const Page = () => {
  const {userData}=useSelector((slice)=>slice.userDataSlice)
  return (
    <div className=' p-16  w-[150%]   h-[100%] border-l-[2px] border-gray-200'>
        <p className=' text-slate-800 text-xl font-semibold'>Favourite Project (<span className=' text-slate-600'>{userData?.SavedJobs?.length}</span>)</p>
         {
              userData?.SavedJobs?.length>0 ? (
                <div className=' mt-5'>
                        {
                          userData?.SavedJobs?.map((data:any,index:any)=>{
                              return <FavouriteCommon  key={index} cardData={data}/>
                          })
                      }
              </div>
              ) : (
                <div className=''>
                      <Image src={not_found} className=' w-[20rem] h-[20rem] mx-auto'/>
                 </div>
              )
         }
    </div>
  )
}

export default Page