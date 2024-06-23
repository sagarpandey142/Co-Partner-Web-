
"use client"
import React, { useEffect, useState } from 'react'
import DashboardPage from "../../../commonPage/DashboardPage"
import Image from 'next/image'
import not_found from "../../../Assets/404.png"
import { useUser } from '@auth0/nextjs-auth0/client'
import { DeleteProject, findProjectByEmail } from '../../../../Services/operations/ProjectHandler'
import toast from 'react-hot-toast' 

const Page = () => {
    const { user, error, isLoading } = useUser();
    const[projectData,setProjectData]=useState([]);
    const[deleteprojects,setdeleteproject]=useState(null);

    const fetchproject=async()=>{
        const response=await findProjectByEmail(user.email);
        if(response){
             setProjectData(response.data.project)
        }
    }

    if(user && projectData.length==0){
        fetchproject()
    }
  
    const deleteProject=async()=>{
        const response=await DeleteProject(user.email,deleteprojects);
        if(response)
            {
                toast.success("Project Deleted SuccessFully Please Reload")
                setdeleteproject(null);
            }
    }

    if(deleteprojects!=null){
         deleteProject();
    }
  return (
    <div className=' w-[150%] p-20  '>
         <p className=' text-slate-800 text-2xl font-semibold'>Your Project ({projectData?.length})</p>
                            {
                                     projectData == null ? (
                                     <div className=''>
                                            <Image alt='image' src={not_found} className=' w-[25rem] h-[25rem] mx-auto'/>
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

export default Page