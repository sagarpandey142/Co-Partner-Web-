
import Image from "next/image";
import { getSession } from "@auth0/nextjs-auth0";
import front from "./components/Assets/front.jpg"
import ProfileClient from "./profile/components/user-client";
import { Router } from "next/router";
import MainContent from "./components/HomePage/MainContent";
import RatingsAndReviewsPage from "./components/commonPage/RatingsAndReview";
import Featured from './components/commonPage/Featured'
import Footer from "./components/commonPage/Footer"
import ProjectCard from "./components/commonPage/ProjectCard"
import Vacancy from "./components/HomePage/Vacancy"
import Working from "./components/HomePage/Working";
import Category from "./components/HomePage/Category";
import FeaturedProject from "./components/HomePage/FeaturedProject";
import Testimonials from "./components/HomePage/Testimonials";


export default async function Home() {
  const session = await getSession();
  const user = session?.user;


  console.log(user);
  return (
    
    <div className=''>
      {/* <ProfileClient/> */}

      <MainContent/>
      <Vacancy/>
      <Working/>
      <Category/>
      <FeaturedProject/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
