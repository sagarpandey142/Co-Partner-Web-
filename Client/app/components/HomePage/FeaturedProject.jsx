"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import FetchProject from '../../Services/operations/ProjectHandler';
import MainCard from '../commonPage/MainCard';
import HomePageCard from '../commonPage/HomePageCard';
import { useRouter } from 'next/navigation';


const FeaturedProject = () => {
    const[ProjectPublished,setProjectPublished]=useState([])
    const router=useRouter();
    const getAllprojectPublishes=async()=>{
        const responseromBackend=await FetchProject();
        setProjectPublished(responseromBackend?.data?.projects)
   }
   
   useEffect(()=>{
       getAllprojectPublishes();
   },[])
   console.log("project",ProjectPublished?.length)
  return (
    <div className=' '>
       {
           ProjectPublished?.length>0 ? (
                <div className='p-20'>
                <div className='flex  justify-between items-center'>
                    <p className=' text-2xl text-slate-800 font-bold'>Featured Projects</p>
                        <div className=' flex gap-2  items-center text-blue-600 cursor-pointer' onClick={()=>{
                            router.push("/components/ProjectInfo/SearchProject")
                        }}>
                            <p className=' '>View All</p>
                            <FaArrowRight/>
                        </div>
                    </div>
                    <HomePageCard CardData={ProjectPublished}/>
                </div>
           ) : (
               <div>
                    
               </div>
           )
       }
    </div>
  )
}

export default FeaturedProject