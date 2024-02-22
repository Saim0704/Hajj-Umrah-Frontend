// import React from "react";
// import { FaWifi } from "react-icons/fa6";
// import { MdOutlineLocalLaundryService } from "react-icons/md";
// import { MdOutlineFreeBreakfast } from "react-icons/md";
// import { MdOutlineLunchDining } from "react-icons/md";
// import { MdOutlineDinnerDining } from "react-icons/md";
// import { MdOutlineDomain } from "react-icons/md";
// import { MdOutlineLocalTaxi } from "react-icons/md";
// import { MdOutlineBathtub } from "react-icons/md";
// import { MdAcUnit } from "react-icons/md";

// const Accommodation = () => {
//   return (
//     <>
//       {/* <div className="p-5">
//         <div className="bg-white p-4 rounded-xl shadow-md">
//           <form className="form-ui">
//             <div class="flex  mt-4">
//               <div class="flex items-center mr-4">
//                 <input
//                   id="inline-radio"
//                   type="radio"
//                   value=""
//                   name="inline-radio-group"
//                 />
//                 <label for="inline-radio" className="mb0 pl-2">
//                   Makkah Only
//                 </label>
//               </div>
//               <div class="flex items-center mr-4">
//                 <input
//                   id="inline-radio"
//                   type="radio"
//                   value=""
//                   name="inline-radio-group"
//                 />
//                 <label for="inline-radio" class="mb0 pl-2">
//                   Makkah Madeena
//                 </label>
//               </div>
//             </div>
//             <div className="flex">
//               <hr class="h-px my-8 bg-gray-200 border-0 w-full dark:bg-gray-700" />
//             </div>

//             <div className="grid gap-6 mb-6 md:grid-cols-2">
//               <div>
//                 <label for="last_name">Hotel Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Specify the Hotel Name"
//                   required=""
//                   value=""
//                 />
//               </div>
//               <div>
//                 <label for="last_name">Destination Address</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Specify the Address "
//                   required=""
//                   value=""
//                 />
//               </div>
//             </div>

//             <div className="grid gap-6 mb-6 md:grid-cols-3 pt-2">
//               <div>
//                 <label for="last_name">Star Rating</label>

//                 <select id="" name="">
//                   <option value="">7 Star </option>
//                   <option value="">5 Star </option>
//                   <option value="">4 Star </option>
//                   <option value="">3 Star </option>
//                   <option value="">2 Star </option>
//                   <option value="">1 Star </option>
//                 </select>
//               </div>
//               <div>
//                 <label for="last_name">Distance From Haram</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="2Km far from Haram"
//                   required=""
//                   value=""
//                 ></input>
//               </div>
//               <div>
//                 <label for="last_name">Room Types</label>
//                 <select id="" name="">
//                   <option value="">Standard </option>
//                   <option value="">Deluxe</option>
//                   <option value="">Studio </option>
//                   <option value=""> Connecting Rooms </option>
//                   <option value="">Suites</option>
//                   <option value="">Presidential</option>
//                 </select>
//               </div>
//             </div>

//             <label for="last_name">Room Facilities</label>
//             <div class="flex pt-2">
//               <div class="flex items-center mr-4">
//                 <input id="inline-2-checkbox" type="checkbox" value="" />
//                 <label for="inline-2-checkbox" className="mb0 font-imp">
//                   Wifi
//                 </label>
//                 <FaWifi className="ml-1 text-gray-500" />
//               </div>
//               <div class="flex items-center mr-4">
//                 <input id="inline-2-checkbox" type="checkbox" value="" />
//                 <label for="inline-2-checkbox" className="mb0 font-imp">
//                   Laundry
//                 </label>
//                 <MdOutlineLocalLaundryService className="ml-1 text-xl text-gray-500" />
//               </div>
//               <div class="flex items-center mr-4">
//                 <input id="inline-2-checkbox" type="checkbox" value="" />
//                 <label for="inline-2-checkbox" className="mb0 font-imp">
//                   Breakfast
//                 </label>
//                 <MdOutlineFreeBreakfast className="ml-1 text-xl text-gray-500" />
//               </div>

//               <div class="flex items-center mr-4">
//                 <input id="inline-2-checkbox" type="checkbox" value="" />
//                 <label for="inline-2-checkbox" className="mb0 font-imp">
//                   Lunch
//                 </label>
//                 <MdOutlineLunchDining className="ml-1 text-xl text-gray-500" />
//               </div>
//               <div class="flex items-center mr-4">
//                 <input id="inline-2-checkbox" type="checkbox" value="" />
//                 <label for="inline-2-checkbox" className="mb0 font-imp">
//                   Dinner
//                 </label>

//                 <MdOutlineDinnerDining className="ml-1 text-xl text-gray-500" />
//               </div>

//               <div class="flex items-center mr-4">
//                 <input id="inline-2-checkbox" type="checkbox" value="" />
//                 <label for="inline-2-checkbox" className="mb0 font-imp">
//                   City view
//                 </label>
//                 <MdOutlineDomain className="ml-1 text-xl text-gray-500" />
//               </div>

//               <div class="flex items-center mr-4">
//                 <input id="inline-2-checkbox" type="checkbox" value="" />
//                 <label for="inline-2-checkbox" className="mb0 font-imp">
//                   Free parking
//                 </label>
//                 <MdOutlineLocalTaxi className="ml-1 text-xl text-gray-500" />
//               </div>

//               <div class="flex items-center mr-4">
//                 <input id="inline-2-checkbox" type="checkbox" value="" />
//                 <label for="inline-2-checkbox" className="mb0 pl-2 font-imp">
//                   Bath Tub
//                 </label>
//                 <MdOutlineBathtub className="ml-1 text-xl text-gray-500" />
//               </div>

//               <div class="flex items-center mr-4">
//                 <input id="inline-2-checkbox" type="checkbox" value="" />
//                 <label for="inline-2-checkbox" className="mb0 pl-2 font-imp">
//                   Air conditioning
//                 </label>
//                 <MdAcUnit className="ml-1 text-xl text-gray-500" />
//               </div>
//             </div>

//             <div className="w-full mt-10">
//               <label for="last_name">Gallery (Upload multiple files)</label>
//               <input class="" id="multiple_files" type="file" multiple />
//             </div>

//             <div className="w-full flex pt-4">
//               <div className="w-1/2">
//                 <button
//                   type="button"
//                   class="btn-bark"
//                   onClick={() => router.back()}
//                 >
//                   Back
//                 </button>
//               </div>
//               <div className="w-1/2 text-right">
//                 <button type="button" class="btn-light">
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   class="btn-green"
//                   onClick={() => router.push("/admin/create-package/gallery")}
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div> */}
//       <div className="p-5">
//         <div className="bg-white p-4 rounded-xl shadow-md">
//           <form className="form-ui">

//             <div className="grid gap-9 mb-3 md:grid-cols-12">
//               <div class="md:col-span-9">
//                 <label for="last_name"> Hotel Name</label>
//                 <input
//                   class="bg-[#EDEDED] h-12 rounded-lg border-hidden"
//                   type="text"
//                   name=""

//                   required />
//               </div>

//               <div class="md:col-span-3">

//                 <label for="last_name">Acc Class</label>

//                 <select id="" name="" className="bg-[#EDEDED] h-12 rounded-lg border-hidden">
//                   <option value="">7 Star </option>
//                   <option value="">5 Star </option>
//                   <option value="">4 Star </option>
//                   <option value="">3 Star </option>
//                   <option value="">2 Star </option>
//                   <option value="">1 Star </option>
//                 </select>

//               </div>

//             </div>

//             <div className="grid gap-9 mb-3 md:grid-cols-12 ">
//               <div className="md:col-span-6" >
//                 <label for="last_name">Address</label>
//                 <input
//                   className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
//                   type="text"
//                   name=""
//                   required />
//               </div>
//               <div className="md:col-span-3">
//                 <label for="last_name">Distance from Kaaba</label>
//                 <select id="" name="" className="bg-[#EDEDED] h-12 rounded-lg border-hidden">
//                   <option>1</option>
//                   <option>2</option>
//                   <option>3</option>
//                   <option>4</option>
//                   <option>5</option>
//                 </select>
//               </div>
//               <div className="md:col-span-3">
//                 <label for="last_name">Distance from Boundary</label>
//                 <select className="bg-[#EDEDED] h-12 rounded-lg border-hidden">
//                   <option>1</option>
//                   <option>2</option>
//                   <option>3</option>
//                   <option>4</option>
//                   <option>5</option>
//                 </select>
//               </div>


//             </div>
//             <div className="grid gap-9 mb-3 md:grid-cols-12 ">
//               <div className="md:col-span-6">
//                 <label for="last_name">Hotel Photos</label>
//                 <div className="grid gap-2 mb-3 md:grid-cols-12 ">

//                   <div className="md:col-span-3">
//                     <label
//                       for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
//                       <div class="flex p-7 flex-col items-center justify-center ">

//                         <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
//                           <span class="font-semibold">Broswer</span>
//                         </p>
//                       </div>
//                     </label>
//                   </div>

//                   <div className="md:col-span-3">
//                     <label
//                       for="dropzone-file" className="bg-[#EDEDED]  rounded-lg" >
//                       <div class="flex flex-col items-center justify-center ">

//                         <p class="mb-2 text-sm p-7 text-gray-500 dark:text-gray-400">
//                           <span class="font-semibold">Broswer</span>
//                         </p>
//                       </div>
//                     </label>
//                   </div>
//                   <div className="md:col-span-3">
//                     <label
//                       for="dropzone-file" className="bg-[#EDEDED]  rounded-lg" >
//                       <div class="flex flex-col items-center justify-center ">

//                         <p class="mb-2 p-7 text-sm text-gray-500 dark:text-gray-400">
//                           <span class="font-semibold ">Broswer</span>
//                         </p>
//                       </div>
//                     </label>
//                   </div>
//                   <div className="md:col-span-3">
//                     <label
//                       for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
//                       <div class="flex flex-col items-center justify-center">

//                         <p class="mb-2 text-sm p-7 text-gray-500 dark:text-gray-400">
//                           <span class="font-semibold">+</span>
//                         </p>
//                       </div>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="md:col-span-3">
//                 <label for="last_name">Date From</label>
//                 <div class="relative max-w-sm">
//                   <input type="date" className="bg-[#EDEDED] h-12 rounded-lg border-hidden" />
//                 </div>
//               </div>
//               <div className="md:col-span-3">
//                 <label>Date To</label>
//                 <div class="relative max-w-sm">
//                   <input type="date" className="bg-[#EDEDED] h-12 rounded-lg border-hidden" />
//                 </div>
//               </div>

//             </div>
//             <div className="grid gap-9 mb-3 md:grid-cols-12 ">
//               <div className="md:col-span-3">
//                 <label for="last_name"> Room Type</label>
//                 <select className="bg-[#EDEDED] h-12 rounded-lg border-hidden" >
//                   <option>11</option>
//                   <option>11</option>
//                   <option>11</option>
//                   <option>11</option>
//                   <option>11</option>
//                 </select>
//               </div>
//               <div className="md:col-span-3">
//                 <label for="last_name">Room Type</label>
//                 <select className="bg-[#EDEDED] h-12 rounded-lg border-hidden" >
//                   <option>11</option>
//                   <option>11</option>
//                   <option>11</option>
//                   <option>11</option>
//                   <option>11</option>
//                 </select>
//               </div>
//               <div className="md:col-span-6">
//                 <label for="last_name">Amenities</label>
//                 <div className="flex pt-2">
//                   <div class="flex items-center mr-4">
//                     <input type="checkbox" value="" className="bg-[#EDEDED] py-2 rounded-lg " />
//                     <label className=""  >
//                       Wifi
//                     </label>
//                   </div>
//                   <div class="flex items-center mr-4">
//                     <input type="checkbox" value="" />
//                     <label >
//                       Laundry
//                     </label>
//                   </div>
//                   <div class="flex items-center mr-4">
//                     <input id="inline-2-checkbox" type="checkbox" value="" />
//                     <label >
//                       Gym
//                     </label>
//                   </div>
//                   <div class="flex items-center mr-4">
//                     <input id="inline-2-checkbox" type="checkbox" value="" />
//                     <label >
//                       Swimming Pool
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="grid gap-9 mb-3 md:grid-cols-12 ">
//               <div className="md:col-span-12">
//                 <label for="last_name">Hotel Photos</label>
//                 <div className="grid gap-9 mb-3 md:grid-cols-12 ">
//                   <div className="md:col-span-2">
//                     <label
//                       for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
//                       <div class="flex flex-col p-7 items-center justify-center ">
//                         <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
//                           <span class="font-semibold">Broswer</span>
//                         </p>
//                       </div>
//                     </label>
//                   </div>
//                   <div className="md:col-span-2">
//                     <label
//                       for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
//                       <div class="flex flex-col p-7 items-center justify-center ">

//                         <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
//                           <span class="font-semibold">Broswer</span>
//                         </p>
//                       </div>
//                     </label>
//                   </div>
//                   <div className="md:col-span-2">
//                     <label
//                       for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
//                       <div class="flex flex-col items-center justify-center ">

//                         <p class="mb-2 text-sm p-7 text-gray-500 dark:text-gray-400">
//                           <span class="font-semibold">Broswer</span>
//                         </p>
//                       </div>
//                     </label>
//                   </div>
//                   <div className="md:col-span-2">
//                     <label
//                       for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
//                       <div class="flex flex-col items-center justify-center ">

//                         <p class="mb-2 text-sm p-7 text-gray-500 dark:text-gray-400">
//                           <span class="font-semibold">Broswer</span>
//                         </p>
//                       </div>
//                     </label>
//                   </div>
//                   <div className="md:col-span-2">
//                     <label
//                       for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
//                       <div class="flex flex-col items-center justify-center ">

//                         <p class="mb-2 text-sm text-gray-500 p-7 dark:text-gray-400">
//                           <span class="font-semibold">Broswer</span>
//                         </p>
//                       </div>

//                     </label>
//                   </div>
//                   <div className="md:col-span-2">
//                     <label
//                       for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
//                       <div class="flex p-7 flex-col items-center justify-center ">

//                         <p class="mb-2 text-sm text-gray-800 dark:text-gray-400">
//                           <span class="font-semibold">+</span>
//                         </p>
//                       </div>
//                     </label>
//                   </div>

//                 </div>
//               </div>
//               <div className="md:col-span-6 flex pt-2">

//                 <div className="md:col-span-2">
//                   <div class="flex items-center mr-4">
//                     <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
//                     <label >
//                       Breakfast
//                     </label>
//                   </div>
//                 </div>
//                 <div className="md:col-span-2">
//                   <div class="flex items-center mr-4">
//                     <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
//                     <label >
//                       Lunch
//                     </label>
//                   </div>
//                 </div>
//                 <div className="md:col-span-2">
//                   <div class="flex items-center mr-4">
//                     <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
//                     <label >
//                       Dinner
//                     </label>
//                   </div>
//                 </div>
//               </div>


//               <div className="md:col-span-3 flex h-12 justify-center border border-gray-400 rounded-xl">
//                 <div class="flex items-center mr-4">
//                   <input
//                     id="inline-radio"
//                     type="radio"
//                     value=""
//                     name="inline-radio-group"
//                     className="bg-[#EDEDED]"
//                   />
//                   <label for="inline-radio" class="mb0 pl-2">
//                     Buffet
//                   </label>
//                 </div>
//                 <div class="flex items-center mr-4">
//                   <input
//                     id="inline-radio"
//                     type="radio"
//                     value=""
//                     name="inline-radio-group"
//                     className="bg-[#EDEDED]"
//                   />
//                   <label for="inline-radio" class="mb0 pl-2">
//                     Ala carte
//                   </label>
//                 </div>
//               </div>

//             </div>
//             <div class="flex justify-center">
//               <label for="dropzone-file" class="bg-gray-300  mt-12 rounded-lg flex items-center">
//                 <div class="w-20 h-20 text-center">
//                   <p class="text-3xl text-gray-800 p-5 dark:text-gray-400 font-semibold">+</p>
//                   <input id="dropzone-file" type="file" class="invisible" />
//                 </div>

//               </label>
//             </div>

//             <div className="w-full flex pt-4">
//               <div className="w-1/2">
//                 <button
//                   type="button"
//                   class="btn-bark"
//                   onClick={() => router.back()}
//                 >
//                   Back
//                 </button>
//               </div>
//               <div className="w-1/2 text-right">
//                 <button type="button" class="btn-light">
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   class="btn-green"
//                   onClick={() => router.push("/admin/create-package/gallery")}
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Accommodation;



import React from "react";
import { FaWifi } from "react-icons/fa6";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdOutlineLunchDining } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";
import { MdOutlineDomain } from "react-icons/md";
import { MdOutlineLocalTaxi } from "react-icons/md";
import { MdOutlineBathtub } from "react-icons/md";
import { MdAcUnit } from "react-icons/md";
import styles from "../../../../styles/Sidebar.module.css";

const Accommodation = () => {
  return (
    <>
      <div className="p-5">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <form className="form-ui ">
            <div className="font-bold text-3xl mb-6">
              <h2>Accommodation in Makkah</h2>
            </div>

            <div className="grid gap-9 mb-3 md:grid-cols-12">
              <div class="md:col-span-9">
                <label for="last_name"> Hotel Name</label>
                <input
                  class="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                  type="text"
                  name=""

                  required />
              </div>

              <div class="md:col-span-3">

                <label for="last_name">Acc Class</label>

                <select id="" name="" className="bg-[#EDEDED] h-12 rounded-lg border-hidden">
                  <option value="">7 Star </option>
                  <option value="">5 Star </option>
                  <option value="">4 Star </option>
                  <option value="">3 Star </option>
                  <option value="">2 Star </option>
                  <option value="">1 Star </option>
                </select>

              </div>

            </div>

            <div className="grid gap-9 mb-3 md:grid-cols-12 ">
              <div className="md:col-span-6" >
                <label for="last_name">Address</label>
                <input
                  className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                  type="text"
                  name=""
                  required />
              </div>
              <div className="md:col-span-3">
                <label for="last_name">Distance from Kaaba</label>
                <select id="" name="" className="bg-[#EDEDED] h-12 rounded-lg border-hidden">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="md:col-span-3">
                <label for="last_name">Distance from Boundary</label>
                <select className="bg-[#EDEDED] h-12 rounded-lg border-hidden">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>


            </div>
            <div className="grid gap-9 mb-3 md:grid-cols-12 ">
              <div className="md:col-span-6">
                <label for="last_name">Hotel Photos</label>
                <div className="grid gap-2 mb-3 md:grid-cols-12 ">

                  <div className="md:col-span-3">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex p-7 flex-col items-center justify-center ">

                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Broswer</span>
                        </p>
                      </div>
                    </label>
                  </div>

                  <div className="md:col-span-3">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]  rounded-lg" >
                      <div class="flex flex-col items-center justify-center ">

                        <p class="mb-2 text-sm p-7 text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Broswer</span>
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="md:col-span-3">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]  rounded-lg" >
                      <div class="flex flex-col items-center justify-center ">

                        <p class="mb-2 p-7 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold ">Broswer</span>
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="md:col-span-3">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex flex-col items-center justify-center">

                        <p class="mb-2 text-sm p-7 text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">+</span>
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <label for="last_name">Date From</label>
                <div class="relative max-w-sm">
                  <input type="date" className="bg-[#EDEDED] h-12 rounded-lg border-hidden" />
                </div>
              </div>
              <div className="md:col-span-3">
                <label>Date To</label>
                <div class="relative max-w-sm">
                  <input type="date" className="bg-[#EDEDED] h-12 rounded-lg border-hidden" />
                </div>
              </div>

            </div>
            <div className="flex">
              <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>
            <div className="grid gap-9 mb-3 md:grid-cols-12 ">
              <div className="md:col-span-3">
                <label for="last_name"> Room Type</label>
                <select className="bg-[#EDEDED] h-12 rounded-lg border-hidden" >
                  <option>11</option>
                  <option>11</option>
                  <option>11</option>
                  <option>11</option>
                  <option>11</option>
                </select>
              </div>
              <div className="md:col-span-3">
                <label for="last_name">Room Type</label>
                <select className="bg-[#EDEDED] h-12 rounded-lg border-hidden" >
                  <option>11</option>
                  <option>11</option>
                  <option>11</option>
                  <option>11</option>
                  <option>11</option>
                </select>
              </div>
              <div className="md:col-span-6">
                <label for="last_name">Amenities</label>
                <div className="flex pt-2">
                  <div class="flex items-center mr-4">
                    <input type="checkbox" value="" />
                    <label className=""  >
                      Wifi
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input type="checkbox" value="" />
                    <label >
                      Laundry
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" />
                    <label >
                      Gym
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" />
                    <label >
                      Swimming Pool
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-9 mb-3 md:grid-cols-12 ">
              <div className="md:col-span-12">
                <label for="last_name">Hotel Photos</label>
                <div className="grid gap-9 mb-3 md:grid-cols-12 ">
                  <div className="md:col-span-2">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex flex-col p-7 items-center justify-center ">
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Broswer</span>
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex flex-col p-7 items-center justify-center ">

                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Broswer</span>
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex flex-col items-center justify-center ">

                        <p class="mb-2 text-sm p-7 text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Broswer</span>
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex flex-col items-center justify-center ">

                        <p class="mb-2 text-sm p-7 text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Broswer</span>
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex flex-col items-center justify-center ">

                        <p class="mb-2 text-sm text-gray-500 p-7 dark:text-gray-400">
                          <span class="font-semibold">Broswer</span>
                        </p>
                      </div>

                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex p-7 flex-col items-center justify-center ">

                        <p class="mb-2 text-sm text-gray-800 dark:text-gray-400">
                          <span class="font-semibold">+</span>
                        </p>
                      </div>
                    </label>
                  </div>

                </div>
              </div>



            </div>

            <div className="flex">
              <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>
            <label>Food</label>
            <div className="grid gap-9 mb-3 md:grid-cols-12">

              <div className="md:col-span-10 flex justify-start  pt-2" >

                <div className="md:col-span-2">
                  <div class="flex  items-end	 mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label >
                      Breakfast
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div class="flex items-end mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label >
                      Lunch
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div class="flex items-end mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label >
                      Dinner
                    </label>
                  </div>
                </div>
                <div className="md:col-span-3 flex ml-4   px-14 h-12 justify-center border border-gray-400 rounded-xl">
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="bg-[#EDEDED]"
                    />
                    <label for="inline-radio" class="mb0 pl-2">
                      Buffet
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="bg-[#EDEDED]"
                    />
                    <label for="inline-radio" class="mb0 pl-2">
                      Ala carte
                    </label>
                  </div>
                </div>
              </div>


            </div>
            <div className="flex">
              <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>
            <div class="flex justify-center">
              <label for="dropzone-file" class="bg-gray-300  mt-12 rounded-lg flex items-center">
                <div class="w-20 h-20 text-center">
                  <p class="text-3xl text-gray-800 p-5 dark:text-gray-400 font-semibold">+</p>
                  <input id="dropzone-file" type="file" class="invisible" />
                </div>

              </label>
            </div>
            <div className="flex">
              <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>
            <div className="w-full flex pt-4">
              <div className="w-1/2">
                <button
                  type="button"
                  class="btn-bark"
                  onClick={() => router.back()}
                >
                  Back
                </button>
              </div>
              <div className="w-1/2 text-right">
                <button type="button" class="btn-light">
                  Save
                </button>
                <button
                  type="button"
                  class="btn-green"
                  onClick={() => router.push("/admin/create-package/gallery")}
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="p-5">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <form className="form-ui">
            <div className="font-bold text-3xl mb-6">
              <h2>Accommodation in Madinah</h2>
            </div>

            <div className="grid gap-9 mb-3 md:grid-cols-12">
              <div class="md:col-span-9">
                <label for="last_name"> Hotel Name</label>
                <input
                  class="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                  type="text"
                  name=""

                  required />
              </div>

              <div class="md:col-span-3">

                <label for="last_name">Acc Class</label>

                <select id="" name="" className="bg-[#EDEDED] h-12 rounded-lg border-hidden">
                  <option value="">7 Star </option>
                  <option value="">5 Star </option>
                  <option value="">4 Star </option>
                  <option value="">3 Star </option>
                  <option value="">2 Star </option>
                  <option value="">1 Star </option>
                </select>

              </div>

            </div>

            <div className="grid gap-9 mb-3 md:grid-cols-12 ">
              <div className="md:col-span-6" >
                <label for="last_name">Address</label>
                <input
                  className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                  type="text"
                  name=""
                  required />
              </div>
              <div className="md:col-span-3">
                <label for="last_name">Distance from Prophet Tomb</label>
                <select id="" name="" className="bg-[#EDEDED] h-12 rounded-lg border-hidden">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="md:col-span-3">
                <label for="last_name">Distance from Boundary</label>
                <select className="bg-[#EDEDED] h-12 rounded-lg border-hidden">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>


            </div>
            <div className="grid gap-9 mb-3 md:grid-cols-12 ">
              <div className="md:col-span-6">
                <label for="last_name">Hotel Photos</label>
                <div className="grid gap-2 mb-3 md:grid-cols-12 ">

                  <div className="md:col-span-3">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex p-7 flex-col items-center justify-center ">

                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Broswer</span>
                        </p>
                      </div>
                    </label>
                  </div>

                  <div className="md:col-span-3">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]  rounded-lg" >
                      <div class="flex flex-col items-center justify-center ">

                        <p class="mb-2 text-sm p-7 text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Broswer</span>
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="md:col-span-3">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]  rounded-lg" >
                      <div class="flex flex-col items-center justify-center ">

                        <p class="mb-2 p-7 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold ">Broswer</span>
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="md:col-span-3">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex flex-col items-center justify-center">

                        <p class="mb-2 text-sm p-7 text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">+</span>
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <label for="last_name">Date From</label>
                <div class="relative max-w-sm">
                  <input type="date" className="bg-[#EDEDED] h-12 rounded-lg border-hidden" />
                </div>
              </div>
              <div className="md:col-span-3">
                <label>Date To</label>
                <div class="relative max-w-sm">
                  <input type="date" className="bg-[#EDEDED] h-12 rounded-lg border-hidden" />
                </div>
              </div>

            </div>
            <div className="flex">
              <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>
            <div className="grid gap-9 mb-3 md:grid-cols-12 ">
              <div className="md:col-span-3">
                <label for="last_name"> Room Type</label>
                <select className="bg-[#EDEDED] h-12 rounded-lg border-hidden" >
                  <option>11</option>
                  <option>11</option>
                  <option>11</option>
                  <option>11</option>
                  <option>11</option>
                </select>
              </div>
              <div className="md:col-span-3">
                <label for="last_name">Room Type</label>
                <select className="bg-[#EDEDED] h-12 rounded-lg border-hidden" >
                  <option>11</option>
                  <option>11</option>
                  <option>11</option>
                  <option>11</option>
                  <option>11</option>
                </select>
              </div>
              <div className="md:col-span-6">
                <label for="last_name">Amenities</label>
                <div className="flex pt-2">
                  <div class="flex items-center mr-4">
                    <input type="checkbox" value="" className="bg-[#EDEDED] py-2 rounded-lg " />
                    <label className=""  >
                      Wifi
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input type="checkbox" value="" />
                    <label >
                      Laundry
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" />
                    <label >
                      Gym
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" />
                    <label >
                      Swimming Pool
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-9 mb-3 md:grid-cols-12 ">
              <div className="md:col-span-12">
                <label for="last_name">Hotel Photos</label>
                <div className="grid gap-9 mb-3 md:grid-cols-12 ">
                  <div className="md:col-span-2">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex flex-col p-7 items-center justify-center ">
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Broswer</span>
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex flex-col p-7 items-center justify-center ">

                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Broswer</span>
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex flex-col items-center justify-center ">

                        <p class="mb-2 text-sm p-7 text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Broswer</span>
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex flex-col items-center justify-center ">

                        <p class="mb-2 text-sm p-7 text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Broswer</span>
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex flex-col items-center justify-center ">

                        <p class="mb-2 text-sm text-gray-500 p-7 dark:text-gray-400">
                          <span class="font-semibold">Broswer</span>
                        </p>
                      </div>

                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      for="dropzone-file" className="bg-[#EDEDED]   rounded-lg" >
                      <div class="flex p-7 flex-col items-center justify-center ">

                        <p class="mb-2 text-sm text-gray-800 dark:text-gray-400">
                          <span class="font-semibold">+</span>
                        </p>
                      </div>
                    </label>
                  </div>

                </div>
              </div>



            </div>

            <div className="flex">
              <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>
            <label>Food</label>
            <div className="grid gap-9 mb-3 md:grid-cols-12">

              <div className="md:col-span-10 flex justify-start  pt-2" >

                <div className="md:col-span-2">
                  <div class="flex  items-end	 mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label >
                      Breakfast
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div class="flex items-end mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label >
                      Lunch
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div class="flex items-end mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label >
                      Dinner
                    </label>
                  </div>
                </div>
                <div className="md:col-span-3 flex ml-4   px-14 h-12 justify-center border border-gray-400 rounded-xl">
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="bg-[#EDEDED]"
                    />
                    <label for="inline-radio" class="mb0 pl-2">
                      Buffet
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="bg-[#EDEDED]"
                    />
                    <label for="inline-radio" class="mb0 pl-2">
                      Ala carte
                    </label>
                  </div>
                </div>
              </div>


            </div>
            <div className="flex">
              <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>
            <div class="flex justify-center">
              <label for="dropzone-file" class="bg-gray-300  mt-12 rounded-lg flex items-center">
                <div class="w-20 h-20 text-center">
                  <p class="text-3xl text-gray-800 p-5 dark:text-gray-400 font-semibold">+</p>
                  <input id="dropzone-file" type="file" class="invisible" />
                </div>

              </label>
            </div>
            <div className="flex">
              <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>
            <div className="w-full flex pt-4">
              <div className="w-1/2">
                <button
                  type="button"
                  class="btn-bark"
                  onClick={() => router.back()}
                >
                  Back
                </button>
              </div>
              <div className="w-1/2 text-right">
                <button type="button" class="btn-light">
                  Save
                </button>
                <button
                  type="button"
                  class="btn-green"
                  onClick={() => router.push("/admin/create-package/gallery")}
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Accommodation;
