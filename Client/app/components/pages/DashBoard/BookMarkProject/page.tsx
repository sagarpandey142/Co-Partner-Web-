import DashboardPage from '../../../../../app/components/commonPage/DashboardPage'

import FavouriteCommon from '../../../../../app/components/commonPage/FavouriteCommon'
import Image from 'next/image'
import React from 'react'
import not_found from "../../../Assets/404.png"

const page = (userData) => {
  return (
    <div className=' p-20  w-[160%]   h-[100%]'>
        <p className=' text-slate-800 text-2xl font-semibold'>Favourite Project (<span className=' text-slate-600'>{userData?.SavedJobs.length}</span>)</p>
         {
              userData?.SavedJobs?.length>0 ? (
                <div className=' mt-5'>
                        {
                          userData?.SavedJobs?.map((data,index)=>{
                              return <FavouriteCommon key={index} userdata={userData} Email={userData?.Email}  location={userData?.Location} cardData={data}/>
                          })
                      }
              </div>
              ) : (
                <div className=''>
                      <Image src={not_found} className=' w-[25rem] h-[25rem] mx-auto'/>
                 </div>
              )
         }
    </div>
  )
}

export default page