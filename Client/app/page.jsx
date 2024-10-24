
import Image from "next/image";
import { getSession } from "@auth0/nextjs-auth0";
import MainContent from "./components/HomePage/MainContent";
import Footer from "./components/commonPage/Footer"
import Vacancy from "./components/HomePage/Vacancy"
import Working from "./components/HomePage/Working";
import Category from "./components/HomePage/Category";
import FeaturedProject from "./components/HomePage/FeaturedProject";
import Testimonials from "./components/HomePage/Testimonials";
import "./globals.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      <ToastContainer/>
    </div>
  );
}
