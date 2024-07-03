// "use client"
// import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
// import React, { useState, useEffect } from 'react';
// import FetchProject from "../../Services/operations/ProjectHandler";
// import { updateProjectSlice } from "../../../GlobalRedux/Features/ProjectSlice";
// import { useDispatch, useSelector } from "react-redux";
// import MainCard from './MainCard';
// import { MdCancel } from "react-icons/md";
// import { CiSearch } from "react-icons/ci";
// import { IoLocationSharp } from "react-icons/io5";
// import { MdMyLocation } from "react-icons/md";
// import { LuFilter } from "react-icons/lu";
// import PopularSearches from '../../components/ArrayUsable/PopularSearches';
// import { IndustryArray, ProjectLength } from "../../components/ArrayUsable/IndustrySrray";
// import { Checkbox, FormControlLabel } from "@mui/material";
// import { SkillRequired } from "../ArrayUsable/SkillArray";
// import SkillButton from "../commonPage/SkillButton";
// import Switch from '@mui/material/Switch';
// import not_found from "../Assets/404.png";
// import Image from "next/image";

// type Project = {
//   projectName: string;
//   projectDescription: string;
//   profileId: {
//     Location: string;
//   };
//   Category: string;
//   BasicDetail: {
//     projectLength: string;
//   };
//   Skill: string[];
//   createdAt: string;
// };

// type Skill = {
//   name: string;
//   icon: string;
// };

// const Featured: React.FC = () => {
//   const [filterOpen, setFilterOpen] = useState(false);
//   const [ProjectPublished, setProjectPublished] = useState<Project[]>([]);
//   const [FilterBasesOnTitle, setFilterBasesOnTitle] = useState("");
//   const [FilterBasesOnLocation, setFilterBasesOnLocation] = useState("");
//   const [loading, setLoading] = useState(false);
//   const locations = ["Delhi, India", "Odisha, India", "Mumbai, India", "Bangalore, India", "Chennai, India"];
//   const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
//   const dispatch = useDispatch();
//   const [filterdata, setFilterData] = useState({
//     Industry: "",
//     ProjectLength: "",
//     ifRecentSelected: false,
//     techStack: [] as string[],
//   });

//   const getAllprojectPublishes = async () => {
//     setLoading(true);
//     const responseromBackend = await FetchProject();
//     setProjectPublished(responseromBackend?.data?.projects);
//     dispatch(updateProjectSlice(responseromBackend?.data?.projects));
//     setLoading(false);
//   }

//   const getSuggestions = (value: string): string[] => {
//     const inputValue = value.trim().toLowerCase();
//     const inputLength = inputValue.length;
//     return inputLength === 0 ? [] : locations.filter(loc =>
//       loc.toLowerCase().slice(0, inputLength) === inputValue
//     );
//   };

//   const onSuggestionsClearRequested = () => {
//     setLocationSuggestions([]);
//   };

//   const onLocationChange = (event: React.ChangeEvent<HTMLInputElement>, { newValue }: { newValue: string }) => {
//     setFilterBasesOnLocation(newValue);
//   };

//   const renderSuggestion = (suggestion: string) => (
//     <div>
//       {suggestion}
//     </div>
//   );

//   const setProjectPublishedBasedOnFilter = () => {
//     if (FilterBasesOnTitle === "") {
//       return;
//     } else {
//       let filtered = ProjectPublished?.filter((project) => {
//         const projectName = project?.projectName?.toLowerCase();
//         const projectDesc = project?.projectDescription?.toLowerCase();
//         const keyword = FilterBasesOnTitle?.toLowerCase();
//         return projectName.includes(keyword) || projectDesc.includes(keyword);
//       });

//       const locationKeyword = FilterBasesOnLocation.toLowerCase();
//       const BasesOnLocation = ProjectPublished?.filter((project) => {
//         return locationKeyword ? project?.profileId?.Location.toLowerCase().includes(locationKeyword) : true;
//       });

//       if (filtered.length <= 0) return;

//       setProjectPublished([...filtered, ...BasesOnLocation, ...ProjectPublished]);
//     }
//   }

//   const filterBasesonFilterData = () => {
//     let filtered = [...ProjectPublished];
//     let filteredByIndustry: Project[] = [];
//     let filteredByProjectLength: Project[] = [];
//     let filteredByTechStack: Project[] = [];
//     let filteredByRecent: Project[] = [];

//     if (filterdata.Industry) {
//       filteredByIndustry = filtered.filter((project) => project?.Category === filterdata.Industry);
//     }

//     if (filterdata.ProjectLength) {
//       filteredByProjectLength = filtered.filter((project) => project?.BasicDetail.projectLength === filterdata.ProjectLength);
//     }

//     if (filterdata.techStack.length > 0) {
//       filteredByTechStack = filtered.filter((project) =>
//         filterdata.techStack.every((tech) => project?.Skill.includes(tech))
//       );
//     }

//     if (filterdata.ifRecentSelected) {
//       filteredByRecent = filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
//     }
//     setFilterOpen(false);
//     setProjectPublished([...filteredByIndustry, ...filteredByProjectLength, ...filteredByTechStack, ...filteredByRecent]);
//   }

//   useEffect(() => {
//     getAllprojectPublishes();
//   }, []);

//   return (
//     <div className='w-full '>
//       {/* spinner */}
//       {
//         loading && (
//           <div className="fixed inset-0 flex justify-center items-center h-screen bg-gray-100 bg-opacity-90 z-50">
//             <iframe src="https://lottie.host/embed/3854ae56-d940-4e39-b00a-90c6d18a90f2/j4pg2cwMEq.json" style={{ width: '300px', height: '300px' }}></iframe>
//           </div>
//         )
//       }

//       {/* not found page */}
//       {
//         ProjectPublished?.length === 0 ? (
//           <div className=''>
//             <Image src={not_found} className=' w-[25rem] h-[25rem] mx-auto' alt="Not Found" />
//           </div>
//         ) : (
//           <div className="  ">
//             <div className='w-8/12 mx-auto mt-7' >
//             </div>

//             {/* Filter Overlay */}
//             {filterOpen && (
//               <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-md z-50 ">
//                 <div className="absolute w-[24rem] h-full transform  bg-white  rounded-xl overflow-scroll">
//                   <div className="flex justify-between p-6">
//                     <div className=" text-md font-semibold text-slate-800">Filters</div>
//                     <MdCancel className=" text-2xl font-semibold text-slate-800 cursor-pointer" onClick={() => {
//                       setFilterOpen(false);
//                     }} />
//                   </div>

//                   {/* Display selected filters */}
//                   {(filterdata.Industry || filterdata.ProjectLength || filterdata.techStack.length > 0 || filterdata.ifRecentSelected) &&
//                     <div className=" p-4 mt-4">
//                       <div className="text-md font-semibold">Selected Filters:</div>
//                       <div className="mt-2 flex gap-2 flex-wrap">
//                         {filterdata.Industry && <div className="bg-slate-200 text-slate-800  w-fit h-fit p-2 rounded-lg font-semibold"> {filterdata.Industry}</div>}
//                         {filterdata.ProjectLength && <div className="bg-slate-200 text-slate-800  w-fit h-fit p-2 rounded-lg font-semibold">{filterdata.ProjectLength}</div>}
//                         {filterdata.techStack.length > 0 && (
//                           <div className=" mt-2">
//                             <div className=" text-slate-800 text-md font-semibold">Selected Tech Stack</div>
//                             {filterdata.techStack.map((data, index) => (
//                               <div key={index} className="bg-slate-200 text-slate-800 w-fit h-fit p-2 rounded-lg font-semibold">{data }</div>
//                             ))}
//                           </div>
//                         )}
//                         {filterdata.ifRecentSelected && <div className="bg-slate-200 text-slate-800  w-fit h-fit p-2 rounded-lg font-semibold">Recent Projects</div>}
//                       </div>
//                     </div>
//                   }

//                   {/* Filter Options */}
//                   <div className=" p-6 border-b-2 border-slate-300">
//                     <div className="text-md text-[#007AE9] font-semibold">Industry</div>
//                     <div className=" flex flex-wrap gap-1">
//                       {IndustryArray.map((data: string, index: number) => (
//                         <div className={`mt-2 cursor-pointer `} key={index} onClick={() => {
//                           setFilterData({ ...filterdata, Industry: data });
//                         }}>
//                           <div className={`text-md font-semibold ${filterdata.Industry === data ? "bg-blue-200 p-2 rounded-lg text-[#007AE9]" : ""}`}>{data}</div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className=" mt-4 p-6  border-b-2 border-slate-300">
//                     <div className="text-md text-[#007AE9] font-semibold">Project Type</div>
//                     <div>
//                       {ProjectLength.map((data: string, index: number) => (
//                         <div className="mt-1 flex items-center cursor-pointer" key={index} onClick={() => {
//                           setFilterData({ ...filterdata, ProjectLength: data });
//                         }}>
//                           <Checkbox />
//                           <div className="text-md text-slate-800 font-semibold">{data}</div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className=" p-6 border-b-2 border-slate-300">
//                     <div className="text-md text-[#007AE9] font-semibold">Select Tech Stack</div>
//                     <div className="flex flex-wrap gap-1">
//                       {SkillRequired?.map((data: Skill, index: number) => (
//                         <div className="mt-2 items-center cursor-pointer" key={index} onClick={() => {
//                           setFilterData({ ...filterdata, techStack: [...filterdata.techStack, data.name] });
//                         }}>
//                           <SkillButton key={index} text={data.name} flag={true} />
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className=" mt-2 p-3 flex justify-between">
//                     <button className=" flex  items-center">
//                       <FormControlLabel
//                         control={
//                           <Switch
//                             color="primary"
//                             value="dynamic-class-name"
//                             onChange={(e) => setFilterData({ ...filterdata, ifRecentSelected: e.target.checked })}
//                           />
//                         }
//                         label="Recent Project"
//                       />
//                     </button>
//                     <button className=" bg-[#007AE9]  rounded-xl p-2 py-4 px-4 text-white font-semibold" onClick={() => {
//                       filterBasesonFilterData();
//                     }}>Apply Filters</button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Main cards */}
//             <MainCard CardData={ProjectPublished} />
//           </div>
//         )}
//     </div>
//   );
// };

// export default Featured;
