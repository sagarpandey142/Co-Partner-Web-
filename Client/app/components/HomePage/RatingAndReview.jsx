import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ReactStars from 'react-stars';
import IconBtn from '../commonPage/IconBtn';

import { useSelector } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import { useUser } from '@auth0/nextjs-auth0/client';
import { GetUserDetail } from '../../Services/operations/ProfileHanlder';
import { CreateRating } from '../../Services/operations/RatingAndReview';
import toast from 'react-hot-toast';


const ReviewSidebarModal= ({ setreviewModal }) => {
  const{user}=useUser();
  const[data,setdata]=useState([]);
  const { register, formState: { errors }, getValues, handleSubmit, setValue } = useForm();
  useEffect(() => {
    setValue('userExperience', '');
    setValue('User_Rating', 0);
  }, [setValue]);

  const ratingChanged = (data) => {
    console.log('rating value', data);
    setValue('User_Rating', data);
  };

  const FetchUser=async()=>{
       const responseFromBackend=await GetUserDetail(user?.email);
       setdata(responseFromBackend.data.response)
  }

  const SubmitHandler=async(e)=>{
    e.preventDefault();
    const values = getValues();
    const { User_Rating, userExperience } = values;
      const responseFromRating=await CreateRating(user.email,User_Rating,userExperience)
      if(responseFromRating.data.success==true){
        setreviewModal(false);
        toast.success("Rating Created SuccessFully")
      }
  }


  useEffect(()=>{
     if(user?.email){
         FetchUser();
     }
  },[user])



  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto  bg-opacity-10 backdrop-blur-sm mb-10">
      <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-slate-400 bg-gray-300">
        {/*modal header*/}
        <div className="flex items-center justify-between rounded-t-lg bg-richblack-700 p-5">
          <p className="text-xl font-semibold text-slate-600 ">Add A review</p>
          <button onClick={() => setreviewModal(false)}>
            <RxCross2 className="text-2xl text-richblack-5" />
          </button>
        </div>
        {/*modal body*/}
        <div className="p-6">
          <div className="flex items-center justify-center gap-x-4">
            <img
              src={data?.ProfileImage}
              alt='user Image'
              className="aspect-square w-[50px] rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-richblack-5">{user?.name}</p>
              <p className="text-sm text-richblack-5">Posting Publicly</p>
            </div>
          </div>

          {/*form*/}
          <form  className="mt-6 flex flex-col items-center" onSubmit={SubmitHandler}>
            {/*rating*/}
            <ReactStars
              count={5}
              size={24}
              color2={'#ffd700'}
              onChange={ratingChanged}
            />

            {/*user Experience*/}
            <div className="flex w-11/12 flex-col space-y-2">
              <label className="text-sm text-slate-700">Add Your Experience <sup className="text-pink-500 text-md">*</sup></label>
              <input
                id="userExperience"
                name="userExperience"
                placeholder="Add Your Experience"
                {...register('userExperience', { required: true })}
                className="form-style resize-x-none min-h-[130px] w-full outline-none bg-gray-200 text-start p-2 "
              />
              {errors.userExperience && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                  <p>Please Add Your Experience</p>
                </span>
              )}
            </div>
            {/*button*/}
            <div className="mt-6 flex w-11/12 justify-end gap-x-2">
              <button
                onClick={() => setreviewModal(false)}
                className="flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900"
              >
                Cancel
              </button>
              <IconBtn text="Save" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewSidebarModal;
