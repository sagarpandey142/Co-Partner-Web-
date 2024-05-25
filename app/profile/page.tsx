import { getSession } from "@auth0/nextjs-auth0";
import ProfileClient from "./components/user-client";
import { redirect } from "next/navigation";
import Navbar from "../../components/navbar"
import front from "../../components/Assets/front.jpg"
import Image from "next/image"

const Profile = async () => {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect("/");
  }
  return (
    <div className="flex w-full gap-5 ">
       <ProfileClient />
        <Navbar/>
        <div className='flex flex-row justify-center items-center '>
        <div className='flex flex-col gap-10'>
          <p className='text-xl font-bold'>Find a Project that suits your interest & skills.</p>
          <p className="text-base">
            Creating a successful project involves defining clear and specific goals, developing a comprehensive plan with timelines and milestones, and maintaining open, regular communication with stakeholders. Foster teamwork and leverage diverse skills within the team, prioritize quality through rigorous testing and control, and remain flexible to adapt to changes and challenges as they arise.
          </p>
        </div>
        <div className=''>
          <Image src={front} alt="HomePic" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
