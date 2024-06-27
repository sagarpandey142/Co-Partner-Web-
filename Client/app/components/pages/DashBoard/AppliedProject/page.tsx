// import React from 'react';
// import DashboardPage from "../../../commonPage/DashboardPage";
// import Image from 'next/image';
// import not_found from "../../../Assets/404.png";



// const Page = ({ userData = [] }) => {
//   return (
//     <div className='w-[150%] p-20'>
//       <p className='text-slate-800 text-2xl font-semibold'>Applied Project ({userData?.AppliedProject.length})</p>
//       {Array.isArray(userData?.AppliedProject) && userData.AppliedProject.length === 0 ? (
//         <div>
//           <Image src={not_found} alt='img' className='w-[25rem] h-[25rem] mx-auto' />
//         </div>
//       ) : (
//         <div className='mt-3 flex flex-col gap-4'>
//           <div className='mt-3 bg-gray-200 p-2 rounded-lg pl-2 pr-2'>
//             <div className='flex text-slate-800 text-lg justify-around'>
//               <div>Project</div>
//               <div>Date Applied</div>
//               <div>Saved</div>
//               <div>Action</div>
//             </div>
//           </div>
//           <div>
//             {userData?.AppliedProject?.map((data, index) => (
//               <DashboardPage location={userData?.Location} cardData={data}  />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Page;
