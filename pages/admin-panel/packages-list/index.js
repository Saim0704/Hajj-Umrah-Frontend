import React from 'react'
import UnderMaintenance from 'src/components/common/UnderMaintenance'
import { Select, Button, DatePicker, Input } from "antd";
import { FaConciergeBell } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoBusSharp } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";




const index = () => {
    return (
        <>
          <section className='bg-white p-10'>
            <div className='bg-white p-5 drop-shadow-2xl rounded-xl'>
                <hi className='text-xl'>Filter by</hi>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5 py-2'>
                    <div className='grid grid-cols-2 gap-5'>
                     <div>
                   <select id="" name="" class=" border-gray-300 bg-gray-200 rounded-lg w-full mt-2">
                  <option value="">Package Name</option>
                  <option value="">Saudia </option>
                  <option value="">Etihad Airways </option>
                  <option value=""> Airways </option>
                  <option value="">Air Arabia </option>
                </select>
                     </div>

                     <div>
                     <input type="date" placeholder="Departure Date" className="border-gray-300 bg-gray-200 rounded-lg w-full mt-2" />
                     </div>
                    </div>

                    <div className='grid grid-cols-3 gap-5'>
                        <div>
                        <select id="" name="" class=" border-gray-300 bg-gray-200 rounded-lg w-full mt-2">
                  <option value="">Days/Nights</option>
                  <option value="">Saudia </option>
                  <option value="">Etihad Airways </option>
                  <option value=""> Airways </option>
                  <option value="">Air Arabia </option>
                </select>
                        </div>
                        <div>
                        <select id="" name="" class=" border-gray-300 bg-gray-200 rounded-lg w-full mt-2">
                  <option value="">Price range</option>
                  <option value="">Saudia </option>
                  <option value="">Etihad Airways </option>
                  <option value=""> Airways </option>
                  <option value="">Air Arabia </option>
                </select>
                        </div>
                        <div>
                            <button className='bg-[#00A852] text-white py-2 mt-2 w-full rounded-md'><b>Search</b></button>
                        </div>
                    </div>
                </div>
            </div>

            <p className='py-5'>Sort by:- All</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-1 gap-5 px-3 py-5 bg-[#D1FFED] '>
                <div>
                    <img src='/ta-2.png' className='h-full'/>
                </div>
                <div className='col-span-2'>
                    <hi className='text-2xl'><b>Family Umrah Package</b></hi>
                    <p className='mt-2'><b>10 Days</b><span className='text-sm'> duration</span></p>
                    <p>23 June 23 to  7 July 23</p>
                    <p><b>Meerut to Makkah</b></p>
                    <hr className='my-2 h-0.5 bg-[#00A852]'/>
                    <p className='flex items-center'><FaConciergeBell className='text-[#00a852] text-xl'/> Elaf Kinda Hotel, Makkah <IoMdStar className='text-[#FBC522]'/><IoMdStar className='text-[#FBC522]'/><IoMdStar className='text-[#FBC522]'/><IoMdStar className='text-[#FBC522]'/></p>
                    <p className='flex items-center'><GiAirplaneDeparture className='text-[#00a852] text-xl'/> Etihad Airways </p>
                    <p className='flex items-center'><IoBusSharp className='text-[#00a852] text-xl'/> Available </p>
                </div>
                <div className=' relative w-full'>
                    <div className='flex justify-end'><FaFilePdf className='text-red-600 text-3xl'/><IoIosCreate className='text-[#00A852] text-3xl'/><MdDeleteForever className='text-red-600 text-3xl'/></div>
                    <div className='absolute ' style={{bottom: '2px', right: '1px'}}>
                        <p className='text-sm '>DEAL PRICE</p>
                        <p className='text-2xl'><b>₹75,000</b></p>
                        <button className='bg-[#00a852] text-white px-5 py-2 rounded-md'>View Details</button>
                    </div>
                </div>
            </div>

           <div className='relative'>       
            <div className='grid lg:grid-cols-4 md:grid-cols-1 gap-5 px-3 py-5 mt-4 bg-[rgba(0,0,0,0.5)] opacity-50 '>
                <div>
                    <img src='/ta-2.png' className='h-full'/>
                </div>
                <div className='col-span-2'>
                    <hi className='text-2xl'><b>Family Umrah Package</b></hi>
                    <p className='mt-2'><b>10 Days</b><span className='text-sm'> duration</span></p>
                    <p>23 June 23 to  7 July 23</p>
                    <p><b>Meerut to Makkah</b></p>
                    <hr className='my-2 h-0.5 bg-[#00A852]'/>
                    <p className='flex items-center'><FaConciergeBell className='text-[#00a852] text-xl'/> Elaf Kinda Hotel, Makkah <IoMdStar className='text-[#FBC522]'/><IoMdStar className='text-[#FBC522]'/><IoMdStar className='text-[#FBC522]'/><IoMdStar className='text-[#FBC522]'/></p>
                    <p className='flex items-center'><GiAirplaneDeparture className='text-[#00a852] text-xl'/> Etihad Airways </p>
                    <p className='flex items-center'><IoBusSharp className='text-[#00a852] text-xl'/> Available </p>
                </div>
                <div className=' relative w-full'>
                    <div className='flex justify-end'><FaFilePdf className='text-red-600 text-3xl'/><IoIosCreate className='text-[#00A852] text-3xl'/><MdDeleteForever className='text-red-600 text-3xl'/></div>
                    <div className='absolute ' style={{bottom: '2px', right: '1px'}}>
                        <p className='text-sm '>DEAL PRICE</p>
                        <p className='text-2xl'><b>₹75,000</b></p>
                        <button className='bg-[#00a852] text-white px-5 py-2 rounded-md'>View Details</button>
                    </div>
                </div>
            </div>
            <div className='bg-black p-4 w-80 absolute' style={{top: '30%', right: '35%'}}>
                <p className='text-red-600'>Package Expired...</p>
                <div className='flex  text-white'>Want to Edit or Delete<FaFilePdf className='text-white text-3xl'/><IoIosCreate className='text-white text-3xl'/><MdDeleteForever className='text-white text-3xl'/></div>
            </div>
          </div>
            </section>        
        </>
    )
}

export default index

export async function getStaticProps() {
    return {
        props: {
            asLayout: "DefaultLayout",
            withSideBar: true,
        },
    };
}