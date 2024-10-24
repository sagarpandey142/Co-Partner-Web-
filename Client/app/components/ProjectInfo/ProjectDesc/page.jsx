"use client"
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import {ApplyProject, FetchProjectById, RemoveSavedProject, addSavedProject, findProjectById} from "../../../Services/operations/ProjectHandler"
import Navbar from '../../HomePage/Navbar'
import { CiBookmark } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import Footer from '../../commonPage/Footer';
import { AiFillExperiment } from "react-icons/ai";
import { IoMapSharp } from "react-icons/io5";
import { FaSuitcase, FaBookmark } from "react-icons/fa6";
import {  GetUserDetail } from '../../../Services/operations/ProfileHandler';
import { ToastContainer, toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { updateProjectDescriptionData } from '../../../../GlobalRedux/Features/ProjectSlice'
import MainCard from '../../commonPage/MainCard'
import { useUser } from "@auth0/nextjs-auth0/client";
import NavBottom from '../../HomePage/NavBottom'



const Page = () => {
  const searchParams = useSearchParams();
  const [projectData, setProjectData] = useState(null);
  const[userdata,setUserdata]=useState(null);
  const[applied,setapplied]=useState(false);
  const projectId = searchParams.get("projectid");
  const [isSaved, setIsSaved] = useState(false);
  const dispatch=useDispatch();
  const projectPublished = useSelector((state) => state.ProjectSlice.ProjectPublished);
  const[loading,setloading]=useState(false);
  const[ProjectPublishedFlag,setProjectPublishedFlag]=useState(false);
   const router= useRouter();
   const { user, error, isLoading } = useUser();
  useEffect(() => {
       getProjectDetails();
      
  }, []);
 


  const getProjectDetails = async () => {
    setloading(true);
    try {
      if (projectId) {
        const backendResponse = await findProjectById(projectId);
        setProjectData(backendResponse.data.project);
        dispatch(updateProjectDescriptionData(backendResponse?.data?.project))
      }
    } catch (error) {
      console.error('Error fetching project details:', error);
    }
   setloading(false);
  };

  const findUserDetail = async () => {
    if(projectData.profileId.Email==user.email ){
      console.log("hii")
         setProjectPublishedFlag(true)
    }
  };

  

  if(user && ProjectPublishedFlag==false){
       findUserDetail();
  }


  const handleSavedProject = async (projectId) => {
    
    try {
      if (isSaved) {
        await RemoveSavedProject( projectId,user?.email);
        setIsSaved(false);
        toast.success("Project Removed SuccessFully")
      } else {
        await addSavedProject( projectId,user?.email);
        setIsSaved(true);
        toast.success("Project Saved SuccessFully")
      }
    } catch (error) {
      console.error('Error updating saved projects:', error);
    }
  };

  const handleApplyProject=async()=>{
     const response=await ApplyProject(user?.email,projectId);
     if(response?.data?.message == "Project already applied"){
      setapplied(true)
      toast.error("Project Already Applied")
      return;
     }
     if(response?.data?.message == "You cannot apply to a project you've created."){
      setapplied(true)
      toast.error("You cannot apply to a project you've created.")
      return;
     }
     
     setapplied(true);
  }
  
  const handlearrowclick=()=>{
       router.push("/components/ProjectInfo/SearchProject")
  }

  const setissavedafterUserData=()=>{
    const issaved=userdata?.SavedJobs?.some(project =>
        project._id==projectId);
    setIsSaved(issaved);
  }

  const setisAppliedafterUserData=()=>{
    const isApplied=userdata?.AppliedProject?.some(project =>
        project._id==projectId);
      setapplied(isApplied);
  }

  useEffect(()=>{
     setissavedafterUserData();
     setisAppliedafterUserData();
  },[userdata])



 
  return (
    <div className='w-full'>
      <Navbar />
      <NavBottom/>
      {/*spinner*/}
      {
                loading==true && (
                  <div className="fixed inset-0 flex justify-center items-center h-screen bg-gray-100 bg-opacity-90 z-50">
                      <iframe src="https://lottie.host/embed/3854ae56-d940-4e39-b00a-90c6d18a90f2/j4pg2cwMEq.json" style={{ width: '300px', height: '300px' }}></iframe>
                  </div>
                )
         }
      <div className='bg-gray-200 p-5'>
        <div className='flex flex-wrap w-8/12 mx-auto justify-between'>
          <div className='font-bold text-md'>Job Details</div>
          <div className='font-semibold text-md text-slate-400 flex flex-wrap'>
            Home / Find Job / {projectData?.Category} / <div className='text-black'>Job Details</div>
          </div>
        </div>
      </div>
      <div className='mt-20 w-8/12 mx-auto'>
        {/* Top section */}
        <div className='flex justify-between flex-wrap gap-2'>
          <div>
            {/* Image placeholder */}
            <div></div>
            <div className='flex flex-col gap-1'>
              <p className='text-slate-900 font-bold text-2xl'>{projectData?.projectName}</p>
              <div className='flex gap-2 items-center flex-wrap'>
                <p className='text-slate-600 text-md'>By {projectData?.profileId?.name}</p>
                <p className='bg-green-600 text-white font-semibold px-3 py-2 rounded-md'>{projectData?.BasicDetail?.projectLength} Months</p>
                <p className='bg-pink-200 text-pink-400 px-2 py-2 font-bold rounded-lg'>Featured</p>
              </div>
            </div>
          </div>
          <div className={`flex gap-3 items-center ${ProjectPublishedFlag==true ? "hidden": "visible"} `}>
            <div className='bg-blue-200 px-4 py-4 rounded-lg cursor-pointer' onClick={() => handleSavedProject(projectData._id)}>
              {isSaved ? <FaBookmark className='text-2xl text-blue-700 font-bold' /> : <CiBookmark className='text-2xl text-blue-700 font-bold' />}
            </div>
            <button className='bg-[#007AE9] py-3 px-6 text-white font-semibold rounded-lg flex items-center gap-2' onClick={handleApplyProject}>
              <p>{!applied ? "Apply Now " : "Applied"}</p>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className='mt-10 flex gap-2   flex-col-reverse md:flex-row'>
          {/* Project description */}
          <div className='sm:w-[60%] flex flex-col gap-3'>
            <p className='text-md text-slate-900 font-bold'>Project Description</p>
            <p className='text-slate-600 text-md border  w-12/12  sm:w-10/12'>{projectData?.projectDescription}</p>
            <div className='mt-4 flex flex-col gap-2'>
              <p className='text-md text-slate-600 font-bold flex gap-2'>
                More About <div className='text-slate-900'>{projectData?.profileId?.name}</div>
              </p>
              <p className='text-slate-600 text-md w-10/12'>{projectData?.profileId?.User_Bio}</p>
            </div>
            <div className='ml-3 mt-2 flex flex-col gap-2 border-[3px] border-slate-300 rounded-lg p-3 w-10/12'>
              <p className='text-md text-slate-900 font-bold flex items-center gap-2'>
                <FaArrowRight /> His Technical Skills
              </p>
              <div className='flex gap-2 flex-wrap'>
                {projectData?.profileId?.TechStack?.map((data, index) => (
                  <div key={index} className='bg-slate-300 p-2 px-3 rounded-lg text-green-800 font-semibold'>
                    {data}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:gap-3 gap-10 md:w-[35%] w-[80%]'>
            <div className='border-[3px] border-slate-300 flex flex-col md:flex-row  p-2 rounded-lg'>
              <div className='flex flex-col justify-center items-center mx-auto p-3 w-[50%]'>
                <AiFillExperiment className='text-3xl text-[#007AE9]' />
                <p className='mx-auto text-sm text-slate-900 font-bold'>Level of Experience</p>
                <p className='text-sm text-green-700 font-semibold uppercase'>{projectData?.BasicDetail?.LevelExperience}</p>
              </div>
              <div className='flex flex-col justify-center items-center mx-auto p-3 w-[50%] md:border-l-[2px]   border-t-[2px] border-slate-300'>
                <IoMapSharp className='text-3xl text-[#007AE9]' />
                <p className='mx-auto text-md text-slate-900 font-bold'>Job Location</p>
                <p className='text-md text-slate-500 uppercase'>{projectData?.profileId?.Location ? projectData?.profileId?.Location : "India"}</p>
              </div>
            </div>
            {/* Key skills required */}
            <div className='flex flex-col gap-2 border-[3px] border-slate-300 rounded-lg p-3'>
              <p className='text-md text-slate-900 font-bold gap-2'>Key Technical Skills Needed</p>
              <div className='flex gap-2 flex-wrap'>
                {projectData?.Skill?.map((data, index) => (
                  <div key={index} className='bg-slate-300 p-2 px-3 rounded-lg text-green-800 font-semibold'>
                    {data}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
              {
                   projectPublished.length>2? (
                        <div className='  mt-10 flex flex-col justify-between '>
                        <p className='text-2xl text-slate-900 font-bold'>Related Jobs</p>
                         <div className=' flex  items-center'>
                              <MainCard CardData={projectPublished.slice(0,2)} />
                              <FaArrowRight className=' text-2xl text-blue-700  font-semibold cursor-pointer' onClick={handlearrowclick}/>
                         </div>
                      </div>
                   ) : (
                      <div></div>
                   )
              }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
