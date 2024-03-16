import React from 'react'
import { IoMdStar } from "react-icons/io";
import { FaConciergeBell } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosMailUnread } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";


const index = () => {
  return (
    <>
      <section className='bg-white'>
        <h1 className='text-center text-3xl py-4'><b>Adil Travels of India </b></h1>
        <div>
            <img src='/Header-img/umrah.jpg' className='w-full h-[32rem] object-cover	'/>
            <h1 className='text-white text-center py-4 text-4xl bg-[#01391C]'><b>Ramadan Package | Voco Makkah & Saja Al Madinah</b></h1>
        </div>
        <div className='p-10 mx-10'>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-10'>
                <div className='px-5 py-7 rounded-lg flex shadow-xl border-slate-400 border-2 items-center'>
                    <img src='/pdf-img/image 547.png'/>
                    <div className='px-5'>
                        <h1 className='text-3xl'><b>21 Days</b></h1>
                        <p>25 Apr - 01 May</p>
                    </div>
                </div>

                <div className='px-5 py-7 rounded-lg flex shadow-xl border-slate-400 border-2 items-center'>
                    <img src='/pdf-img/image 548.png'/>
                    <div className='px-5'>
                        <h1 className='text-3xl'><b>83000</b></h1>
                        <p>Per Pax</p>
                    </div>
                </div>

                <div className='px-5 py-7 rounded-lg flex shadow-xl border-slate-400 border-2 items-center'>
                    <img src='/pdf-img/image 549.png'/>
                    <div className='px-5'>
                        <h1 className='text-3xl'><b>Indigo Airline</b></h1>
                        <p><b>Indigo</b> (Direct Flight) Luggage (30KG)</p>
                    </div>
                </div>
                
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-10 mt-5'>
                <div className='rounded-lg shadow-xl border-slate-400 border-2'>
                    <h1 className='text-white text-center py-3 text-xl bg-[#06605B]' style={{borderTopLeftRadius: '6px',  borderTopRightRadius: '6px'}}><b>Accommodation</b></h1>
                    <div className='p-5 mx-10'>
                        <div className='grid grid-cols-4 gap-10 p-3'>
                            <div className='justify-self-center'>
                            <img src='/pdf-img/image 551.png' className='w-12 '/>
                            </div>
                            <div className='justify-self-center'>
                            <img src='/pdf-img/image 552.png' className='w-12 '/>
                            </div>
                            <div className='justify-self-center'>
                            <img src='/pdf-img/image 553.png' className='w-12 '/>
                            </div>
                            <div className='justify-self-center'>
                            <img src='/pdf-img/image 554.png' className='w-12 '/>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-10 p-3'>
                            <div className='justify-self-center'>
                            <img src='/pdf-img/image 555.png' className='w-12 '/>
                            </div>
                            <div className='justify-self-center'>
                            <img src='/pdf-img/image 556.png' className='w-12 '/>
                            </div>
                            <div className='justify-self-center'>
                            <img src='/pdf-img/image 557.png' className='w-12 '/>
                            </div>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4 m-5'>
                        <div className='rounded-lg border-slate-400 border-2'>
                        <h1 className='text-white text-center py-3 text-xl bg-black' style={{borderTopLeftRadius: '6px',  borderTopRightRadius: '6px'}}><b>Makkah</b></h1>
                        <p className='text-center py-2'><b>Fatah Hotel (3 Days)</b></p>
                        <div className='flex justify-center'>
                        <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
                        </div>
                        <p className='text-sm text-center py-2'>Distance from Center - 500 M</p>
                        <hr className='m-3'/>
                        <p className='text-center'><b>No of Beds: 2</b></p>
                        <hr className='m-3'/>
                        <p className='text-center flex justify-center items-center'><FaConciergeBell /> &nbsp; <b>Food: 3 Time Buffet</b></p>
                        </div>
                        <div className='rounded-lg border-slate-400 border-2'>
                        <h1 className='text-white text-center py-3 text-xl bg-black' style={{borderTopLeftRadius: '6px',  borderTopRightRadius: '6px'}}><b>Madinah</b></h1>
                        <p className='text-center py-2'><b>Fatah Hotel (3 Days)</b></p>
                        <div className='flex justify-center'>
                        <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
                        </div>
                        <p className='text-sm text-center py-2'>Distance from Center - 500 M</p>
                        <hr className='m-3'/>
                        <p className='text-center'><b>No of Beds: 2</b></p>
                        <hr className='m-3'/>
                        <p className='text-center flex justify-center items-center'><FaConciergeBell /> &nbsp; <b>Food: 3 Time Buffet</b></p>
                        </div>
                    </div>
                </div>

                <div className='rounded-lg shadow-xl border-slate-400 border-2 bg-[#F6F6F6]'>
                    <h1 className='text-white text-center py-3 text-xl bg-[#06605B]' style={{borderTopLeftRadius: '6px',  borderTopRightRadius: '6px'}}><b>Local Ziarat</b></h1>
                    <div className='grid grid-cols-2 gap-4 p-5 mx-6'>
                        <div>
                            <h1 className='text-[#06605B] text-2xl mb-3'><b> Makkah</b></h1>
                            <p className='flex items-center my-2'><FaCheck className='text-[#a5eb78] mr-3 text-xl'/>Great Mosque of Mecca</p>
                            <p className='flex items-center my-2'><FaCheck className='text-[#a5eb78] mr-3 text-xl'/>Black Stone</p>
                            <p className='flex items-center my-2'><FaCheck className='text-[#a5eb78] mr-3 text-xl'/>Safa to Marwa</p>
                            <p className='flex items-center my-2'><FaCheck className='text-[#a5eb78] mr-3 text-xl'/>Al-Balad</p>
                            <p className='flex items-center my-2'><FaCheck className='text-[#a5eb78] mr-3 text-xl'/>Kaaba</p>
                            <p className='flex items-center my-2'><FaCheck className='text-[#a5eb78] mr-3 text-xl'/>Jabal al-Nour</p>
                            <p className='flex items-center my-2'><FaCheck className='text-[#a5eb78] mr-3 text-xl'/>King Fahd's Fountain</p>
                        </div>

                        <div>
                            <h1 className='text-[#06605B] text-2xl mb-3'><b> Madinah</b></h1>
                            <p className='flex items-center my-2'><FaCheck className='text-[#a5eb78] mr-3 text-xl'/>Al Masjid an Nabawi </p>
                            <p className='flex items-center my-2'><FaCheck className='text-[#a5eb78] mr-3 text-xl'/>Masjid Quba</p>
                            <p className='flex items-center my-2'><FaCheck className='text-[#a5eb78] mr-3 text-xl'/>Mount Uhud</p>
                            <p className='flex items-center my-2'><FaCheck className='text-[#a5eb78] mr-3 text-xl'/>Dar Al Madinah Museum</p>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-10 mt-5'>
             <div className='rounded-lg shadow-xl border-slate-400 border-2 py-10'>
                <div className='' style={{textAlign: '-webkit-center'}}>
                <img src='/icons/package/scanner-img.png' className='border-slate-400 border mb-3 w-40	'/>
                <p>Scan Now</p>
                <p><b>For Online  Booking</b></p>
                </div>
             </div>

             <div className='rounded-lg shadow-xl border-slate-400 border-2 py-10'>
                <div className='' style={{textAlign: '-webkit-center'}}>
                <img src='/icons/package/scanner-img.png' className='border-slate-400 border mb-3 w-40	'/>
                <p>Scan Now</p>
                <p><b>For Offline  Booking</b></p>
                </div>
             </div>
            </div>
        </div>

        <div className='bg-[#01391C] p-4 grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
            <div className='flex items-center text-white text-xl justify-center	'><AiOutlineGlobal style={{color: 'black', background: 'white', borderRadius: '20px', padding: '2px', fontSize: 'xx-large'}}/> <p className='px-3'><b>www.adiltravels.com</b></p></div>

            <div className='flex items-center text-white text-xl justify-center	'><IoIosMailUnread style={{color: 'black', background: 'white', borderRadius: '20px', padding: '2px', fontSize: 'xx-large'}}/> <p className='px-3'><b>adiltravels786@gmail.com</b></p></div>

            <div className='flex items-center text-white text-xl justify-center	'><FaWhatsapp style={{color: 'black', background: 'white', borderRadius: '20px', padding: '2px', fontSize: 'xx-large'}}/> <p className='px-3'><b>+91-9971640786</b></p></div>

            <div className='flex items-center text-white text-xl justify-center	'><LuPhoneCall style={{color: 'black', background: 'white', borderRadius: '20px', padding: '2px', fontSize: 'xx-large'}}/> <p className='px-3'><b>+91-9811419906</b></p></div>
        </div>
      </section>
    </>
  )
}

export default index