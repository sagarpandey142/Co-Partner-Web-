
import Image from "next/image";
import { getSession } from "@auth0/nextjs-auth0";
import front from "./components/Assets/front.jpg"
import NavBar from "./components/commonPage/Navbar"
import ProfileClient from "./profile/components/user-client";
import { Router } from "next/router";
import MainContent from "./components/commonPage/MainContent";
import RatingsAndReviewsPage from "./components/commonPage/RatingsAndReview";
import TechStack from "./components/commonPage/TechStack"
import Featured from './components/commonPage/Featured'
import Footer from "./components/commonPage/Footer"
import ProjectCard from "./components/commonPage/ProjectCard"
import Category from "./components/commonPage/category"


export default async function Home() {
  const session = await getSession();
  const user = session?.user;


  console.log(user);
  return (
    
    <div className=''>
      {/* <ProfileClient/> */}
      <NavBar/>
      <MainContent/>
      <TechStack/>
      <Category/>
      <RatingsAndReviewsPage/>
      <Featured/>
      <ProjectCard />
      <Footer/>
      
      
    </div>
  );
}
