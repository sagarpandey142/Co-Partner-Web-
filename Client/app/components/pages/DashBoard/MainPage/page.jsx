"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from "../SideBar/page"
import NavBar from '../../../HomePage/Navbar'
import OverView from "../OverView/page"
import AppliedProject from "../AppliedProject/page"
import {  GetUserDetail } from '../../../../Services/operations/ProfileHandler'
import BookmarkProject from "../BookMarkProject/page"
import Setting from "../Settings/MainPage/page"
import { useUser } from '@auth0/nextjs-auth0/client'
import CreateProject from "../CreateProject/page"
import Myproject from "../MyProject/Page"
import { useDispatch, useSelector } from 'react-redux'
import { updateclicktrack, updateUserDataSlice } from '../../../../../GlobalRedux/Features/Userdataslices'
import NavBottom from '../../../HomePage/NavBottom'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'


const Page = () => {
  const { clicktrack } = useSelector(state=>state.userDataSlice); 
  console.log("click",clicktrack)
  const [userData, setUserData] = useState(null);
  const [loading, setloading] = useState(false);
  const { user, error, isLoading } = useUser();
  const dispatch=useDispatch();
  const router=useRouter();
  const getUserDetails = async () => {
    try {
      setloading(true);
        const userDetailResponse = await GetUserDetail(user?.email);
        dispatch(updateUserDataSlice(userDetailResponse.data.response));
        setUserData(userDetailResponse.data.response);
        setloading(false);
    } catch (error) {
      console.error('Error fetching user details:', error);
      setloading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user?.email == null) {
        toast.error("Please Sign In First");
        router.push("/");
        return;
      } else if (user && userData === null) {
        getUserDetails();
      }
    }, 6000);

    // Clean up the timer if the component is unmounted or user/userData changes
    return () => clearTimeout(timer);
  }, [user, userData]);

  return (
    <div className='overflow-hidden'>
      <NavBar />
      <NavBottom/>
      {
        loading ? (
          <div className="fixed inset-0 flex justify-center items-center h-screen bg-gray-100 bg-opacity-90 z-50">
            <iframe src="https://lottie.host/embed/3854ae56-d940-4e39-b00a-90c6d18a90f2/j4pg2cwMEq.json" style={{ width: '300px', height: '300px' }}></iframe>
          </div>
        ) : (
          <div className='mt-2 border-t-[2px] border-slate-300 overflow-hidden '>
            <div className='w-8/12 mx-auto flex  gap-2'>
            <div className=''>
              <Sidebar />
            </div>
              <div className=''>
                {
                  clicktrack === 0 ? (
                    <OverView  />
                  ) : clicktrack === 1 ? (
                      <CreateProject/>
                  ) : (
                    clicktrack==2 ? (
                      <Myproject  />
                    ) : (
                      clicktrack==3 ? (
                        <AppliedProject  />
                      ) : (
                         clicktrack==4 ? (
                          <BookmarkProject />
                         ) : (
                          <Setting />
                         )
                      )
                    )
                  )
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Page;
