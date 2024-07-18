"use client"
// import Navbar from '../../api/auth/'
import 'tailwindcss/tailwind.css';
import HomePage from "../pages/HomePage"
import Page from "../PrivacyPolicy/page"
import Footer from '../commonPage/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../HomePage/MainContent';

const Home = () => {
  return (
     <div >
               <NavBar/>
               <HomePage/>
               <Footer/>
              <ToastContainer/>
     </div>
  );
};

export default Home;