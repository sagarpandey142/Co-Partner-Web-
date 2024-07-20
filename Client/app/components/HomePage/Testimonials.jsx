"use client";
import React, { useEffect, useState } from 'react';
import { FetchAllRating } from '../../Services/operations/RatingAndReview';
import ReactStars from 'react-stars';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { GetUserDetail } from '../../Services/operations/ProfileHanlder';
import { useUser } from '@auth0/nextjs-auth0/client';



const Testimonials = () => {
    const [RatingData, setRatingData] = useState([]);
    const [Userdata, setUserdata] = useState('');
    const { user } = useUser();

    const fetchAllUserRating = async () => {
        try {
            const response = await FetchAllRating();
            setRatingData(response.data.data);
        } catch (error) {
            console.error("Error fetching ratings:", error);
        }
    };

    const findUserDetail = async () => {
        try {
            const response = await GetUserDetail(user.email);
            setUserdata(response?.data?.response);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    useEffect(() => {
        fetchAllUserRating();
    }, []);

    useEffect(() => {
        if (user?.email) {
            findUserDetail();
        }
    }, [user]);

    return (
        <div className='bg-gray-200 p-10 h-[30rem]'>
           <p className="text-2xl font-bold flex justify-center items-center text-slate-700">Student&apos;s Testimonials</p>
            <div
               
                className='max-w-3xl mx-auto mt-9'
            >
                {RatingData.map((data, index) => (
                    <div key={index} className='swiper-slide flex flex-col gap-6 bg-white rounded-xl w-[23rem] h-[12rem] p-4'>
                        <div>
                            <ReactStars
                                count={5}
                                value={data.rating}
                                size={25}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                            <div className='text-slate-600 text-sm max-w-[90%]'>{`"${data.review}"`}</div>
                        </div>
                        <div className='flex justify-between items-center mt-5'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={Userdata?.ProfileImage} className='rounded-full h-[2rem] w-[2rem] object-cover' alt='Profile' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='text-[#007AE9] text-sm'>{Userdata?.name}</div>
                                    <div className='uppercase text-slate-400 text-sm'>{Userdata?.Professional_Role}</div>
                                </div>
                            </div>
                            <div className='text-2xl text-slate-500 font-semibold'>
                                <FaQuoteLeft />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
