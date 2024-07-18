import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import "../../../app/globals.css"

type Profile = {
  Professional_Role: string;
  ProfileImage: string;
  name: string;
  Location?: string;
};

type Project = {
  _id: string;
  projectName: string;
  projectDescription: string;
  profileId: Profile;
  Category: string;
  BasicDetail: {
    projectLength: string;
  };
  Skill: string[];
  createdAt: string;
};

type MainCardProps = {
  CardData: Project[];
};

const HomePageCard: React.FC<MainCardProps> = ({ CardData = [] }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const cardsPerPage: number = 6; // Show 6 cards per page
  const indexOfLastCard: number = currentPage * cardsPerPage;
  const indexOfFirstCard: number = indexOfLastCard - cardsPerPage;
  const currentCards: Project[] = CardData.slice(indexOfFirstCard, indexOfLastCard);
  const router = useRouter(); 

 

  const createQueryString = (name: string, value: string): string => {
    const params = new URLSearchParams();
    params.set(name, value);
    return params.toString();
  };

  const handlePageNavigation = (projectid: string) => {
    router.push('components/ProjectInfo/ProjectDesc' + "?" + createQueryString("projectid", projectid))
  }
  
  return (
    <div className='w-11/12 mx-auto mt-9'>
      <div className='w-12/12 flex flex-wrap gap-3 justify-start'>
        {currentCards.slice(0.9).map((data: Project, index: number) => {
          const actualIndex: number = indexOfFirstCard + index;
          return (
            <div key={actualIndex} className='bg-white w-[25rem] p-2 flex flex-col cursor-pointer'>
              <div className='rounded-b-lg border-[1px] border-slate-300 rounded-lg '>
                <div className='w-11/12 mt-4'>
                  <div className='mt-2 flex flex-col gap-2 ml-7'>
                    <div className='text-md text-slate-800 font-bold w-11/12'>{truncateString(data?.projectName,30)}</div>
                     <div className=' flex gap-2 items-center'>
                         <div className=' bg-green-100 px-2 py-2 rounded-xl'>
                               <p className='text-sm text-green-600'>{data?.BasicDetail.projectLength}</p>
                         </div>
                         <div>
                              <p className=' text-slate-500 text-sm flex gap-1'>Level Of Experience : <div className='text-slate-800 font-bold'>{data.BasicDetail.LevelExperience}</div></p>
                         </div>
                     </div>
                  </div>
                  <div className='flex justify-between mt-4 text-md font-semibold mb-4 ml-7'>
                    <div className='flex gap-2 items-center'>
                      <div>
                        <img src={data?.profileId?.ProfileImage} className='rounded-full h-[2rem] w-[2rem] object-cover' alt='Image'/>
                      </div>
                      <div className='flex flex-col gap-1 text-sm'>
                        <div className='text-[#007AE9]'>{data?.profileId?.name}</div>
                        <div className='uppercase text-slate-400'>{data?.profileId?.Location ?? "India"}</div>
                      </div>
                    </div>
                    <div className='flex items-center text-[#007AE9] text-md'>
                      <div className='pr-3' onClick={() => { handlePageNavigation(data._id) }}>Read More</div>
                      <FaArrowRight/>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  };

export default HomePageCard;
