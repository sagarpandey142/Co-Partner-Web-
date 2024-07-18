// 'use client';

// import React from 'react';
// import FavouriteCommon from '../../../commonPage/FavouriteCommon';
// import Image from 'next/image';
// import not_found from '../../../Assets/404.png';

// interface JobData {
//   id: string;
//   title: string;
//   description: string;
//   // Add other relevant fields
// }

// interface UserData {
//   id: string;
//   email: string;
//   name: string;
//   location: string;
//   SavedJobs?: JobData[];
//   AppliedProject?: any[];  // Define more specific types if needed
//   // Add other fields as necessary
// }

// interface PageProps {
//   userData: UserData;
// }

// const Page: React.FC<PageProps> = ({ userData }) => {
//   return (
//     <div className='p-16 w-[150%] h-[100%] border-l-[2px] border-gray-200'>
//       <p className='text-slate-800 text-xl font-semibold'>
//         Favourite Project (<span className='text-slate-600'>{userData?.SavedJobs?.length}</span>)
//       </p>
//       {userData?.SavedJobs?.length > 0 ? (
//         <div className='mt-5'>
//           {userData?.SavedJobs?.map((data, index) => (
//             <FavouriteCommon key={index} cardData={data} />
//           ))}
//         </div>
//       ) : (
//         <div className=''>
//           <Image src={not_found} className='w-[20rem] h-[20rem] mx-auto' alt="Not Found" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Page;

import React from 'react'

const Page = () => {
  return (
    <div>page</div>
  )
}

export default Page
