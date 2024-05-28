import { getSession } from "@auth0/nextjs-auth0";
import ProfileClient from "./components/user-client";
import { redirect } from "next/navigation";
import NavBar from '../../app/components/commonPage/Navbar'
import Image from "next/image"
import MainContent from "../components/commonPage/MainContent";

const Profile = async () => {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect("/");
  }
  return (
    <div className="flex flex-col w-full gap-5 ">
       {/* <ProfileClient /> */}
        <NavBar/>
        <MainContent/>
        
    </div>
  );
};

export default Profile;
