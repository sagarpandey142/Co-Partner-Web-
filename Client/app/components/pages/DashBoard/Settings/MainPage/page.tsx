"use client"
import React, { useState } from 'react';
import { TabsArray } from '../../../../ArrayUsable/TabsArray';
import Personalpage from "../Personal/Personalpage"
import ProfilePage from "../Profile/page"
import Socialpage from "../Socialinks/page"
import ProfileSetting from "../ProfileSetting/page"
import { useUser } from '@auth0/nextjs-auth0/client';
import { useSelector } from 'react-redux';



const Page = (  ) => {
    const [clickable, setClickable] = useState(0);
    const {userData}=useSelector((slice)=>slice.userDataSlice)
    return (
        <div>
            <div className='p-20 w-[120%] h-[100%]'>
                <p className='text-slate-800 text-2xl font-semibold'>Settings</p>
                {/* Tabs */}
                <div className='mt-6 flex gap-10 border-b-[3px] border-slate-300 pb-3'>
                    {TabsArray.map((data, index) => (
                        <div
                            key={index}
                            onClick={() => setClickable(index)}
                            className={`flex gap-2 items-center text-xl cursor-pointer transition-all duration-300 ease-in-out ${clickable === index ? "text-blue-700 font-semibold " : "text-slate-500 border-transparent"}`}
                        >
                            <div>{React.createElement(data.icon, { className: "" })}</div>
                            <p>{data.name}</p>
                        </div>
                    ))}
                </div>
                {/*main info*/}
                <div>
                     {
                         clickable===0 ? (
                             <div>
                                  <Personalpage />
                             </div>
                         ) : (
                             clickable==1 ? (
                                 <ProfilePage />
                             ) : (
                                clickable==2 ? (
                                    <Socialpage/>
                                ) : (
                                     <ProfileSetting />
                                )
                             )
                         ) 
                     }
                </div>
            </div>
        </div>
    );
}

export default Page;
