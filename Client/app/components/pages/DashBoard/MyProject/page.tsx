
"use client"
import React, { useState, useEffect } from 'react'
import DashboardPage from "../../../commonPage/DashboardPage"
import Image from 'next/image'
import not_found from "../../../Assets/404.png"
import { useUser } from '@auth0/nextjs-auth0/client'
import { findProjectByEmail } from '../../../../../app/Services/operations/ProjectHandler'

const Page = ({userData}) => {
    const { user, error, isLoading } = useUser();
    const[projectData,setProjectData]=useState(null);
    const[deleteproject,setdeleteproject]=useState(null);

    // const fetchproject=async()=>{
    //     const response=await findProjectByEmail(user.email);
    //     if(response){
    //          setProjectData(response.data.project)
    //     }
    // }

    // if(user && projectData==null){
    //     fetchproject()
    // }


    useEffect(() => {
        if (user) {
          const fetchProject = async () => {
            try {
              const response = await findProjectByEmail(user.email);
              if (response) {
                setProjectData(response.data.project);
              }
            } catch (error) {
              console.error('Error fetching projects:', error);
            }
          };
    
          fetchProject();
        }
      }, [user]);

  return (
    <div className=' w-[150%] p-20  '>
         <p className=' text-slate-800 text-2xl font-semibold'>Your Project ({projectData?.length})</p>
                            {
                                 Array.isArray(projectData) && projectData?.length === 0 ? (
                                     <div className=''>
                                            <Image src={not_found} alt='img' className=' w-[25rem] h-[25rem] mx-auto'/>
                                     </div>
                                 ) : (
                                        <div className=' mt-3 flex flex-col gap-4'>
                                                    <div className=' mt-3 bg-gray-200 p-2 rounded-lg pl-2 pr-2'>
                                                            <div className=' flex  text-slate-800 text-lg justify-around'>
                                                                    <div>
                                                                        Project
                                                                    </div>
                                                                
                                                                        <div>
                                                                            Date Applied
                                                                        </div>
                                                                        <div>
                                                                            Saved
                                                                        </div>
                                                                        <div>
                                                                            Action
                                                                        </div>
                                                                
                                                            </div>
                                                            
                                                        </div>
                                                        <div>
                                                            {
                                                                projectData?.map((data,index)=>{
                                                                    return <DashboardPage key={index}  cardData={data} deleteicon="true" setdeleteproject={setdeleteproject}/>
                                                                })
                                                            }
                                                        </div>
                                        </div>
                                 )}
    </div>
  )
}

export default Page;