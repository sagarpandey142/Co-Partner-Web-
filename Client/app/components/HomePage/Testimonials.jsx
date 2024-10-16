"use client";
import React, { useEffect, useState } from 'react';
import { FetchAllRating } from '../../Services/operations/RatingAndReview';
import ReactStars from 'react-stars';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Testimonials = () => {
    const [RatingData, setRatingData] = useState([]);

    const fetchAllUserRating = async () => {
        try {
            const response = await FetchAllRating();
            setRatingData(response.data.data);
        } catch (error) {
            console.error("Error fetching ratings:", error);
        }
    };

    useEffect(() => {
        fetchAllUserRating();
    }, []);

    return (
        <div className='bg-gray-200 p-10 h-[30rem] relative'>
            <p className="lg:text-2xl text-xl font-bold flex justify-center items-center text-slate-700">Student&apos;s Testimonials</p>
            <div className=' mx-auto mt-9 relative'>
                {/* Navigation Arrows */}
                <div className='absolute top-1/2 transform -translate-y-1/2 left-0 text-3xl text-gray-500 cursor-pointer z-10 bg-white p-2 rounded-full'>
                    <AiOutlineArrowLeft />
                </div>
                <div className='absolute top-1/2 transform -translate-y-1/2 right-0 text-3xl text-gray-500 cursor-pointer z-10 bg-white p-2 rounded-full'>
                    <AiOutlineArrowRight />
                </div>

                <div className='ml-16'>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    spaceBetween={20} // Adjust the space between slides
                    slidesPerView={3} // Show 3 slides at a time
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {RatingData.map((data, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col gap-6 bg-white rounded-xl p-4 max-w-76'>
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
                                    <div className='text-slate-600 text-sm max-w-[90%]'><div className='text-slate-600 text-sm max-w-[90%]'>
                                        {window.innerWidth >= 1024 // Check if the screen size is large (`lg`) or greater
                                            ? data.review.length > 60 
                                            ? `"${data.review.substring(0, 60)}..."` 
                                            : `"${data.review}"`
                                            : data.review.length > 10 // For smaller screens
                                            ? `"${data.review.substring(0, 10)}..."` 
                                            : `"${data.review}"`}
                                        </div>
                                        </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex lg:flex-row flex-col gap-2 items-center'>
                                        <div>
                                            <img src={data?.User_Profile?.ProfileImage} className='rounded-full h-[2rem] w-[2rem]  object-cover' alt='Profile' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <div className='text-[#007AE9] text-sm'>{data?.User_Profile?.name}</div>
                                            <div className='uppercase text-slate-400 text-xs'>
                                            {window.innerWidth >= 1024 // Check if the screen size is large (`lg`) or greater
                                            ? data?.User_Profile?.Professional_Role.length > 60 
                                            ? `"${data?.User_Profile?.Professional_Role.substring(0, 60)}..."` 
                                            : `"${data?.User_Profile?.Professional_Role}"`
                                            : data?.User_Profile?.Professional_Role.length > 10 // For smaller screens
                                            ? `"${data?.User_Profile?.Professional_Role.substring(0, 10)}..."` 
                                            : `"${data?.User_Profile?.Professional_Role}"`}</div>
                                        </div>
                                    </div>
                                    <div className='lg:text-2xl text-lg text-slate-500 font-semibold'>
                                        <FaQuoteLeft />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
