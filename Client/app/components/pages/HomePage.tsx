import front from '../../Assets/front.jpg';
import Image from 'next/image';
import Navbar from '../commonPage/Navbar';

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <div className='flex gap-5 w-8/12 mx-auto '>
                <div className='flex flex-row  items-center w-3/4'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-xl  text-slate-700 font-semibold'>Find a Project that suits your interest & skills.</p>
                        <p>Creating a successful project involves defining clear and specific goals, developing a comprehensive plan with timelines and milestones, and maintaining open, regular communication with stakeholders. Foster teamwork and leverage diverse skills within the team, prioritize quality through rigorous testing and control, and remain flexible to adapt to changes and challenges as they arise.</p>
                    </div>
                    {/* <div className='w-1/2'>
                        <Image src={front} alt="HomePic" width={500} height={500} />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
