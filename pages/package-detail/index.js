import React from 'react'
import { IoShareSocialOutline } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";



const index = () => {
  return (
    <>
    <section class="relative">
      <img src='detailpage.png'/>
          <div class="absolute bottom-3	left-5">
          <p class="text-[#94E27C] text-lg"><b>13 Nights / 12Days</b> </p> 
              <h1 class="text-7xl text-white pb-4">Ramadan Package</h1>
          </div>
        </section>

        <section className='bg-[#EFEFEF] p-5'>
          <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-6'>
            <div className='col-span-2 flex'>
              <div className='px-3 py-2 mx-2' style={{borderBottom: '2px solid #109A79'}}>Detail</div>
              <div className='px-3 py-2 mx-2' style={{borderBottom: '2px solid #109A79'}}>Itinerary</div>
              <div className='px-3 py-2 mx-2' style={{borderBottom: '2px solid #109A79'}}>Media</div>
            </div>

            <div className='flex justify-around'>
            <div className=' flex justify-center items-center	' ><IoShareSocialOutline /> Share this tour</div>
              <div className=' flex justify-center items-center	'><GoArrowSwitch /> Add to Compare</div>
            </div>
          </div>

        </section>
    </>
  )
}

export default index