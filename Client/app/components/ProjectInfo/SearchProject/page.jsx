
 "use client"

import { MdCancel } from "react-icons/md";
import React,{useEffect, useState} from 'react'
import { CiSearch } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5"
import { MdMyLocation } from "react-icons/md";
import { LuFilter } from "react-icons/lu";
import PopularSearches from '../../ArrayUsable/PopularSearches';
import FetchProject from "../../../Services/operations/ProjectHandler"
import MainCard from '../../commonPage/MainCard';
import {IndustryArray,ProjectLength} from "../../ArrayUsable/IndustrySrray"
import { Checkbox, FormControlLabel } from "@mui/material";
import  {SkillRequired} from "../../ArrayUsable/SkillArray"
import SkillButton from "../../commonPage/SkillButton";
import Switch from '@mui/material/Switch';
import Autosuggest from 'react-autosuggest';
import { useDispatch, useSelector } from "react-redux";
import { updateProjectSlice } from "../../../../GlobalRedux/Features/ProjectSlice";
import Navbar from "../../HomePage/Navbar";
import Footer from "../../commonPage/Footer";
import Image from "next/image";
import not_found from "../../Assets/404.png"
import NavBottom from "../../HomePage/NavBottom";

const Page = () => {
   
    const[filterOpen,setFilterOpen]=useState(false);
    const[ProjectPublished,setProjectPublished]=useState([])
    const[FilterBasesOnTitle,setFilterBasesOnTitle]=useState("");
    const[FilterBasesOnLocation,setFilterBasesOnLocation]=useState("")
    const[loading,setloading]=useState(false);
    const locations = ["Delhi, India", "Odisha, India", "Mumbai, India", "Bangalore, India", "Chennai, India"];
    const [locationSuggestions, setLocationSuggestions] = useState([]);
    const dispatch=useDispatch();
    const [filterdata,setFilterData]=useState({
      Industry:"",
      ProjectLength:"",
      ifRecentSelected:false,
      techStack:[],
    });
   
  
    const getAllprojectPublishes=async()=>{
         setloading(true);
         const responseromBackend=await FetchProject();
         setProjectPublished(responseromBackend?.data?.projects)
         dispatch(updateProjectSlice(responseromBackend?.data?.projects))
         setloading(false);
    }

    const onSuggestionsFetchRequested = ({ value }) => {
      setLocationSuggestions(getSuggestions(value));
  };

  const getSuggestions = (value) => {
   const inputValue = value.trim().toLowerCase();
   const inputLength = inputValue.length;
   return inputLength === 0 ? [] : locations.filter(loc =>
       loc.toLowerCase().slice(0, inputLength) === inputValue
      );
   };

  const onSuggestionsClearRequested = () => {
      setLocationSuggestions([]);
  };
    
    const onLocationChange = (event, { newValue }) => {
      setFilterBasesOnLocation(newValue);
  };
  
  const renderSuggestion = (suggestion) => (
   <div >
       {suggestion}
   </div>
);


function setProjectPublishedBasedOnFilter() {
   if (FilterBasesOnTitle === "") {
       return;
   } else {
       const keyword = FilterBasesOnTitle.toLowerCase();
       const locationKeyword = FilterBasesOnLocation.toLowerCase();

       let filtered = ProjectPublished?.filter((project) => {
           const projectName = project?.projectName?.toLowerCase();
           const projectDesc = project?.projectDescription?.toLowerCase();
           return projectName.includes(keyword) || projectDesc.includes(keyword);
       });

       let BasesOnLocation = ProjectPublished?.filter((project) => {
           return locationKeyword ? project?.profileId?.Location.toLowerCase().includes(locationKeyword) : true;
       });

       if (filtered.length <= 0) return;

       const combinedProjects = [...filtered, ...BasesOnLocation, ...ProjectPublished];
       
       // Create a new Set to ensure uniqueness
       const uniqueProjects = Array.from(new Set(combinedProjects.map(project => project._id)))
                                   .map(id => combinedProjects.find(project => project._id === id));
       
       setProjectPublished(uniqueProjects);
   }
}

   
function filterBasesonFilterData() {
   let filtered = [...ProjectPublished];
   let filteredByIndustry = [];
   let filteredByProjectLength = [];
   let filteredByTechStack = [];
   let filteredByRecent = [];
 
   if (filterdata.Industry) {
       filteredByIndustry = filtered.filter((project) => project?.Category === filterdata.Industry);
   }
 
   if (filterdata.ProjectLength) {
       filteredByProjectLength = filtered.filter((project) => project?.BasicDetail.projectLength === filterdata.ProjectLength);
   }
 
   if (filterdata.techStack.length > 0) {
       filteredByTechStack = filtered.filter((project) =>
           filterdata.techStack.every((tech) => project?.Skill.includes(tech))
       );
   }
  
   if (filterdata.ifRecentSelected) {
       filteredByRecent = filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
   }

   const combinedProjects = [...ProjectPublished, ...filteredByIndustry, ...filteredByProjectLength, ...filteredByTechStack, ...filteredByRecent];

   // Create a new Set to ensure uniqueness
   const uniqueProjects = Array.from(new Set(combinedProjects.map(project => project._id)))
                               .map(id => combinedProjects.find(project => project._id === id));

   setFilterOpen(false);
   setProjectPublished(uniqueProjects);
}

    useEffect(()=>{
       getAllprojectPublishes();
    },[])



   
  return (
     <div className='w-full '>
           <Navbar/>
           <NavBottom/>
           <div className=' bg-gray-200 p-5'>
                      <div className=' flex w-8/12 mx-auto justify-between'>
                         <div className='font-bold text-sm'>Find Projects</div>
                         <div className='font-bold text-sm'>Home/Find Project</div>
                      </div>
           </div>

         {/*spinner*/}
            {
               loading==true && (
                  <div className="fixed inset-0 flex justify-center items-center h-screen bg-gray-100 bg-opacity-90 z-50">
                        <iframe src="https://lottie.host/embed/3854ae56-d940-4e39-b00a-90c6d18a90f2/j4pg2cwMEq.json" style={{ width: '300px', height: '300px' }}></iframe>
                  </div>
               )
            }

            {/* not found page*/}
            {
                ProjectPublished?.length==0 ? (
                  <div className=''>
                      <Image src={not_found} alt="img" className=' w-[25rem] h-[25rem] mx-auto'/>
                   </div>
                ) : (
                     <div className="  ">
                              <div className='w-8/12 mx-auto mt-7' >
                              <div className='flex gap-3 border-[2px] border-slate-300 p-1 rounded-xl'> 
                                    <div className=' flex items-center gap-3 text-md border-r-[3px] border-slate-300  w-[50%] '>
                                       <CiSearch className=' text-xl text-[#007AE9]' />
                                       <input placeholder='Search by : job title,position,KeyWords...' value={FilterBasesOnTitle} onChange={(e)=>{
                                          setFilterBasesOnTitle(e.target.value)
                                       }
                                       
                                       }  className='outline-none text-slate-800 text-xl'
                                       onKeyDown={(e)=>{
                                          if(e.key=='Enter'){
                                             setProjectPublishedBasedOnFilter();
                                          }
                                       }}/>
                                    </div>
                                    <div className=' flex items-center gap-3 text-md w-[50%] '>
                                       <IoLocationSharp className=' text-3xl text-[#007AE9]'/>
                                    <Autosuggest
                                       suggestions={locationSuggestions}
                                       onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                                       onSuggestionsClearRequested={onSuggestionsClearRequested}
                                       getSuggestionValue={(suggestion) => suggestion}
                                       renderSuggestion={renderSuggestion}
                                       inputProps={{
                                          placeholder: 'City, state or zip code',
                                          value: FilterBasesOnLocation,
                                          onChange: onLocationChange,
                                          className: 'outline-none w-full'
                                       }}
                                    />
                                       <MdMyLocation className=' text-3xl text-[#007AE9] ml-28' />
                                    </div>
                                 
                                    <button onClick={() => setFilterOpen(!filterOpen)} className=' border-[3px] border-slate-300 p-3 px-5 py-2 rounded-xl bg-gray-300 font-bold flex gap-2 items-center '>
                                       <LuFilter/>
                                       <div>Filters</div>
                                    </button>
                                    <button className=' border-2 p-3 px-10 py-3 rounded-xl bg-[#007AE9] text-white font-bold ' onClick={setProjectPublishedBasedOnFilter}>
                                       Search 
                                    </button>
                              </div>

                              <div className=' mt-4 flex gap-3'>
                                 <div className='text-slate-400 text-md'>Popular Searches:</div>
                                 {
                                       PopularSearches.slice(0,9).map((data,index)=>(
                                             <div key={index} className='font-semibold cursor-pointer' onClick={()=>{
                                                setFilterBasesOnTitle(data);
                                             }}>
                                                <div  className=' text-md text-slate-500'>{data}</div>
                                             </div>
                                       ))
                                 }
                              </div>
                 
                  
                              </div>

                                 {/* Filter Overlay */}
                                 {filterOpen==true && (
                                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-md z-50 ">
                                       <div className="absolute w-[24rem] h-full transform  bg-white  rounded-xl overflow-scroll">
                                             <div className="flex justify-between p-6">
                                                   <div className=" text-md font-semibold text-slate-800">Filters</div>
                                                   <MdCancel className=" text-2xl font-semibold text-slate-800 cursor-pointer" onClick={()=>{
                                                      setFilterOpen(false);
                                                   }}/>
                                             </div>
                                          
                                             {/* Display selected filters */}
                                             { (filterdata.Industry || filterdata.ProjectLength || filterdata.techStack.length > 0 || filterdata.ifRecentSelected) &&
                                                <div className=" p-4 mt-4">
                                                   <div className="text-md font-semibold">Selected Filters:</div>
                                                   <div className="mt-2 flex gap-2 flex-wrap">
                                                      {filterdata.Industry && <div className="bg-slate-200 text-slate-800  w-fit h-fit p-2 rounded-lg font-semibold"> {filterdata.Industry}</div>}
                                                      {filterdata.ProjectLength && <div  className="bg-slate-200 text-slate-800  w-fit h-fit p-2 rounded-lg font-semibold">{filterdata.ProjectLength}</div>}
                                                      {filterdata.techStack.length > 0 && (
                                                            <div className=" mt-2">
                                                               <div className=" text-slate-800 text-md font-semibold">Selected Tech Stack</div>
                                                             <div className=" flex gap-2">
                                                               {filterdata.techStack.map((tech, index) => (
                                                                  <div  className="bg-slate-200 text-slate-800  w-fit h-fit p-2 rounded-lg font-semibold" key={index}>{tech}</div>
                                                               ))}
                                                            </div>
                                                            </div>
                                                      )}
                                                      {filterdata.ifRecentSelected && <div className="bg-slate-200 text-slate-800  w-fit h-fit p-2 rounded-lg font-semibold">Recent Projects</div>}
                                                   </div>
                                                </div>
                                          } 
                                                            
                                             {/*indutry*/}
                                             <div className=" mt-4 p-6  border-b-2 border-slate-300">
                                                   <div className="text-md text-[#007AE9] font-semibold">Industry</div>
                                                   <div className=" ">
                                                      {
                                                         IndustryArray.map((data,index)=>(
                                                               <div className={`mt-2  cursor-pointer `} key={index} onClick={()=>{
                                                                  setFilterData({...filterdata,Industry:data})
                                                               }}>
                                                                     <div className={`text-md  font-semibold ${filterdata.Industry==data ? "bg-blue-200  p-2 rounded-lg text-[#007AE9]" : ""}`}>{data}</div>
                                                               </div>
                                                         ))
                                                      }
                                                   </div>
                                             </div>

                                             {/*Project type*/}
                                             <div className=" mt-4 p-6  border-b-2 border-slate-300">
                                                <div  className="text-md text-[#007AE9] font-semibold">Project Type</div>
                                                <div>
                                                      { 
                                                            ProjectLength.map((data,index)=>(
                                                               <div className="mt-1  flex  items-center cursor-pointer" key={index} onClick={()=>{
                                                                  setFilterData({...filterdata,ProjectLength:data})
                                                               }}>
                                                                     <Checkbox/>
                                                                     <div className="text-md text-slate-800 font-semibold">{data}</div>
                                                               </div>
                                                         ))
                                                      }
                                                </div>
                                             </div>

                                             {/*tech stack*/}
                                             <div className="  p-4  border-b-2 border-slate-300">
                                                      <div  className="text-md text-[#007AE9] font-semibold">Select Tech Stack</div>
                                                      <div className=" flex flex-wrap gap-1">
                                                            {
                                                               SkillRequired?.map((data,index)=>(
                                                                  <div className="mt-2    items-center cursor-pointer" key={index} onClick={()=>{
                                                                     setFilterData({...filterdata,techStack: [...filterdata.techStack, data.name]})
                                                                  }}>
                                                                        <SkillButton key={index} text={data.name} flag={true} />
                                                                  </div>
                                                            ))
                                                            }
                                                      </div>
                                             </div>

                                             {/*button*/}
                                             <div className=" mt-2 p-3 flex justify-between">
                                                   <button className=" flex  items-center">
                                                   <FormControlLabel
                                                         control={
                                                            <Switch
                                    
                                                            color="primary"
                                                            value="dynamic-class-name"
                                                            />
                                                         }
                                                         label="Recent Project"
                                                         />
                                                
                                                   </button>
                                                   <button className=" bg-[#007AE9]  rounded-xl p-2 py-4 px-4 text-white font-semibold" onClick={()=>{
                                                         filterBasesonFilterData()
                                                   }}>Apply Filters</button>
                                             </div>
                                       </div>
                                    </div>
                                 )}

                                 {/*main cards*/}
                                 <MainCard CardData={ProjectPublished}/>

                                 {/*footer*/}
                                 <Footer/>
                     </div>
                )}                     
     </div> 
  )
}

export default Page