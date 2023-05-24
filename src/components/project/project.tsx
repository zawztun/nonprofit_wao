// import Image from "next/image";
// import React from "react";
// import type { Projects } from "@/types/home";

// const lists = [1];

// const project = ({ projects }: Projects) => {
//   console.log(projects);
//   return (
//     <div className="flex flex-col gap-8 pt-8 font-serif border bg-theme_project">
//       <div className="flex flex-col gap-2 theme-container lg:flex-row lg:justify-between lg:items-center">
//         <div className="flex flex-col gap-2 lg:basis-[80%]">
//           <span className="text-red-500 text-[11px]">Our Courses</span>
//           <h2 className="text-3xl font-semibold w-[70%]">
//             Our Causes You can help lots of people by donating little.
//           </h2>
//         </div>

//         <button className="px-6 py-3 text-sm text-white rounded-full bg-theme_orange max-w-max max-h-12">
//           More Courses
//         </button>
//       </div>
//       <div className="flex flex-col gap-8 bg- primary lg:flex-row theme-container lg:overflow-x-auto lg:gap-8">
//         {lists.map((li) => (
//           <div key={li} className="flex gap-8">
//             <div className="flex flex-col gap-4 lg:min-w-[300px] lg:min-h-[400px]">
//               <Image
//                 src="/pic2.png"
//                 alt=""
//                 width={350}
//                 height={550}
//                 className="object-cover aspect-video lg:aspect-square"
//               />
//               <div className="flex flex-col gap-4 px-4">
//                 <h3 className="text-xl text-gray-600 ">
//                   Big charity: build school for poor children
//                 </h3>
//                 <div className="flex">
//                   <div className="w-[50%] h-[3px] bg-red-500 "></div>
//                   <div className="w-[50%] h-[3px] bg-gray-300 "></div>
//                 </div>
//                 <div className="flex justify-between gap-2 ">
//                   <span>Raised - 5M</span>
//                   <span className="text-red-500">Goal - $10M</span>
//                 </div>
//                 <button className="px-6 py-3 text-sm text-white bg-black rounded-full max-w-max">
//                   Donate
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default project;
