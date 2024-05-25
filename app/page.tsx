
import Image from "next/image";
import { getSession } from "@auth0/nextjs-auth0";
import front from "../components/Assets/front.jpg"
import NavBar from "../components/navbar"
import ProfileClient from "./profile/components/user-client";


export default async function Home() {
  const session = await getSession();
  const user = session?.user;

  console.log(user);
  return (
    
    <div className=''>
      <ProfileClient/>
      <NavBar/>
      <div className='flex flex-row justify-center items-center -mt-2'>
        <div className='flex flex-col w-1/2 gap-10'>
          <p className='text-xl font-bold'>Find a Project that suits your interest & skills.</p>
          <p className="text-base w-2/3">
            Creating a successful project involves defining clear and specific goals, developing a comprehensive plan with timelines and milestones, and maintaining open, regular communication with stakeholders.
          </p>
        </div>
        <div className=''>
          <Image src={front} alt="HomePic" width={300} height={300} />
        </div>
      </div>
      
    </div>
  );
}
