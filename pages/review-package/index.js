import React from 'react'
import { IoIosArrowDropup } from "react-icons/io";
import { FaBusAlt } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { FaWalking } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { TbArrowNarrowRight } from "react-icons/tb";
import Image from 'next/image';

export default function index() {
  return (
    <>
    <section>
        <div className='bg-[#01391C] w-full p-5 flex justify-between	min-h-[200px]'>
            <hi className='text-2xl text-white'><b>Review Package</b></hi>
            <p className='text-white text-sm'><b>1. TRAVELLER DETAILS   &nbsp;&nbsp;    2. PACKAGE ITINERARY & INCLUSIONS</b></p>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-1 gap-5 p-5' style={{marginTop: '-100px'}}>
            <div className='col-span-3'>
                <div className='bg-[#DDEFEE] p-5'>
                    <h1 className='text-3xl '><b>Ramadan Package | Voco Makkah & Saja Al Madinah</b></h1>
                    <div className='flex py-2'>
                    <p><b>Apr</b>25, 2024</p>
                    <p className='px-3'>12D/13N</p>
                    <p><b>May</b>1, 2024 / From New Delhi</p>
                    </div>
                </div>

                <div className='p-5'>
                    
                    <div className='flex justify-between'>
                    <h1><b>1. Traveller Details</b></h1>
                            <IoIosArrowDropup  style={{color: 'green', fontSize: 'x-large'}}/>
                            </div>

                    <hr className='my-5 h-0.5 bg-[#AAAAAA]'/>
                    
                    <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-4'>
                        <div className='flex items-center'>
                            <label><b>No of travellers</b></label>
                            <input type='text' className='w-16 text-center bg-[#F0F0F0] mx-3'/>
                        </div>
                        <div className='flex items-center col-span-2'>
                            <label><b>No of travellers</b></label>
                            <input type='date' className=' text-center bg-[#F0F0F0] mx-3'/>
                        </div>
                    </div>

                    <div className='p-1 rounded mt-2' style={{border: '2px solid #AAAAAA'}}>
                        <div className='bg-[#D5FAFF] p-2 rounded'>
                        <h1><b>Upload Your Passport  <span className='text-red-600'>*</span></b></h1>
                            <label htmlFor="thumbImages"
                    class="flex flex-col items-center mt-2 justify-center w-80 h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
                      <span className="flex flex-col items-center justify-center">
                        <svg
                          class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16">
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span>
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </span>

                    </div>
                    <input id="thumbImages" type="file" class="invisible"/>
                            </label>

                            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-5 p-5'>
                                <div>
                                <label><b>First Name</b></label>
                                <input className='my-3' type='text'/>
                                </div>

                                <div>
                                <label><b>Middle Name</b></label>
                                <input className='my-3' type='text'/>
                                </div>

                                <div>
                                <label><b>Last Name</b></label>
                                <input className='my-3' type='text'/>
                                </div>
                            </div>

                            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-5 p-5'>
                                <div>
                                <label><b>Date of Birth</b></label>
                                <input className='my-3 w-full' type='date'/>
                                </div>

                                <div>
                                <label><b>Contact Number</b></label>
                                <input className='my-3' type='number'/>
                                </div>

                                <div>
                                <label><b>Date of Expiry</b></label>
                                <input className='my-3 w-full' type='date'/>
                                </div>
                            </div>

                        </div>

                        <div className='bg-[#EEEEEE] p-2 rounded my-5'>
                            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-8'>
                                <div>
                                <h1><b>Upload Your Photo  <span className='text-red-600'>*</span></b></h1>
                            <label htmlFor="thumbImages"
                    class="flex flex-col items-center mt-2 justify-center h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
                      <span className="flex flex-col items-center justify-center">
                        <svg
                          class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16">
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span>
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </span>

                    </div>
                    <input id="thumbImages" type="file" class="invisible"/>
                            </label>
                                </div>

                                <div>
                                <h1><b>Upload Your Pan  <span className='text-red-600'>*</span></b></h1>
                            <label htmlFor="thumbImages"
                    class="flex flex-col items-center mt-2 justify-center h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
                      <span className="flex flex-col items-center justify-center">
                        <svg
                          class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16">
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span>
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </span>

                    </div>
                    <input id="thumbImages" type="file" class="invisible"/>
                            </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className='bg-[#9F9F9F] px-7 py-3 text-white mt-7'><b>+ Add More</b></button>
                    <hr className='my-5 h-0.5 bg-[#AAAAAA]'/>
                    {/* <button className='bg-[#00A852] px-10 py-3 text-white' style={{float: 'inline-end'}}><b>Next</b></button> */}


                 {/* 2nd sec.......start........ */}
                    <div className='flex justify-between mt-5'>
                        <h1><b>2. Package Itinerary & Inclusions</b></h1>
                        <IoIosArrowDropup  style={{color: 'green', fontSize: 'x-large'}}/>
                    </div>

                    <div className='p-5'>
                      <hr className='my-5 h-0.5 bg-[#AAAAAA]'/>
                      <div className='flex'>
                        <p><b>Itinerary:  2 </b>Flights</p>
                        <p className='px-4'><b>2 </b>Hotels</p>
                        <p className='px-4'><b>2 </b>Transfers</p>
                        <p className='px-4'><b>5 </b>Activities</p>
                      </div>
                      <hr className='my-5 h-0.5 bg-[#AAAAAA]'/>
                      <div className='flex justify-between'>
                        <p className='text-xl'>Day 1</p>
                        <p>Sat, 11 May</p>
                      </div>
                      <div className='flex'>
                        <div className='mt-5'>
                          <div className='bg-[#b2d2f3] w-3	h-3 rounded-full	'></div>
                          <div style={{height: '180px', borderLeft: '1px solid black', borderStyle: 'dashed', marginLeft: '5px'}}></div>
                          <div className='bg-[#6b6e70] w-3	h-3 rounded-full	'></div>
                          <div style={{height: '60px', borderLeft: '1px solid black', borderStyle: 'dashed', marginLeft: '5px'}}></div>
                          <div className='bg-[#b2d2f3] w-3	h-3 rounded-full	'></div>
                        </div>

                        <div className='p-3'>
                          <h1 className='text-2xl'><b>Onward Flight</b></h1>
                          <p className='text-[#989898]'>New Delhi to Pukhet | Flight Duration - 04h 35m</p>
                          <div className='flex items-center p-2 mx-2' >
                          <div><img src='/fly-img.png' style={{height: '55px', width:'55px'}}/>
                          <p className='text-center'></p></div>
                          <div className='px-2 mx-3'>
                            <p className='text-xl'><b>IndiGo</b></p>
                            <p className='text-sm text-[#989898]'>6E-1073</p>
                            <p></p>
                          </div>
                          <div className='px-2 mx-3'>
                            <p className='text-xl'><b>IndiGo</b></p>
                            <p className='text-sm text-[#989898]'>6E-1073</p>
                            <p></p>
                          </div>
                          <img src='/fly-travel.png' style={{ maxWidth: '150px' }} className='mx-2' />
                          <div className='px-2 mx-3'>
                            <p className='text-xl'><b>08:35</b></p>
                            <p className='text-sm'>Thu,25 Apr</p>
                            <p className='text-sm text-[#989898]'>New Delhi</p>
                          </div>
                          <div className='px-2  mx-3 text-[#989898]'>
                            <p className='text-xl text-black'><b>Baggage</b></p>
                            <p><b>Cabin:</b> 7 Kgs</p>
                            <p><b>Check-in:</b>20 Kgs</p>
                          </div>
                        </div>
                        <hr className='my-5 h-0.5 bg-[#AAAAAA]'/>
                        <div className='flex items-center'>
                          <h1 className='text-xl'><b>Transfer</b></h1>
                          <FaBusAlt className='text-[#989898] mx-5'/>
                          <p className='text-[#989898] mx-5'>Airport to hotel in Krabi  |  <b>4hrs</b></p>
                        </div>
                        <hr className='my-5 h-0.5 bg-[#AAAAAA]'/>
                        <div>
                        <h1 className='text-xl'><b>Hotel Stay</b></h1>
                        <p className='text-[#989898]'>New Delhi to Pukhet | Flight Duration - 04h 35m</p>
                        </div>
                        <div className='flex items-center justify-between	mt-5'>
                        <img src='/fly-img.png' style={{height: '55px', width:'55px'}}/>
                        <div>
                        <h1 className='text-xl'><b>Avesea Resort Krabi - Holidays Selections</b></h1>
                        <div className='flex'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
                        <p className='text-[#989898]'>Ao Nang</p>
                        </div>
                        <div >
                          <h1 className='text-xl'>Room Type</h1>
                          <p className='text-[#989898] text-sm'>Superior Room * 1</p>
                          <p className='text-[#989898] text-sm'>Breakfast included</p>
                        </div>
                        </div>
                        </div>
                      </div>

                      <div className='flex justify-between mt-10'>
                        <p className='text-2xl'><b>Day 2</b></p>
                        <p>Sun, 12 May</p>
                      </div>
                      <div className='flex mt-3'>
                        <div className='mt-5'>
                          <div className='bg-[#b2d2f3] w-3	h-3 rounded-full	'></div>
                          <div style={{height: '55px', borderLeft: '1px solid black', borderStyle: 'dashed', marginLeft: '5px'}}></div>
                          
                          <div className='bg-[#b2d2f3] w-3	h-3 rounded-full	'></div>
                        </div>

                        <div className='p-3 w-full'>
                          <div className='flex justify-between'>
                            <h1><b>Activity</b></h1>
                            <p className='text-[#989898] flex items-center'><FaWalking  className='mx-3'/>Duration: 6 hrs</p>
                            <h1 className='text-lg'><b>Half-day poda island tour by long tailed</b></h1>
                          </div>
                          <hr className='my-5 h-0.5 bg-[#AAAAAA]'/>
                          <div className='flex justify-between'>
                            <h1><b>Day Meals</b></h1>
                            <p className='text-[#989898] flex items-center'><ImSpoonKnife  className='mx-3'/><b>Breakfast:</b> Included at Avesea Resort Krabi</p>
                            
                          </div>
                          </div>
                      </div>


                      <div className='flex justify-between mt-10'>
                        <p className='text-2xl'><b>Day 3</b></p>
                        <p>Mon, 13 May</p>
                      </div>
                      <div className='flex mt-3'>
                        <div className='mt-5'>
                          <div className='bg-[#b2d2f3] w-3	h-3 rounded-full	'></div>
                          <div style={{height: '55px', borderLeft: '1px solid black', borderStyle: 'dashed', marginLeft: '5px'}}></div>
                          
                          <div className='bg-[#6b6e70] w-3	h-3 rounded-full	'></div>
                          <div style={{height: '55px', borderLeft: '1px solid black', borderStyle: 'dashed', marginLeft: '5px'}}></div>
                          
                          <div className='bg-[#6b6e70] w-3	h-3 rounded-full	'></div>
                          <div style={{height: '170px', borderLeft: '1px solid black', borderStyle: 'dashed', marginLeft: '5px'}}></div>
                          <div className='bg-[#b2d2f3] w-3	h-3 rounded-full	'></div>
                        </div>

                        <div className='p-3 w-full'>
                          <div className='flex justify-between'>
                            <h1><b>Activity</b></h1>
                            <p className='text-[#989898] flex items-center'><FaWalking  className='mx-3'/>Duration: 6 hrs</p>
                            <h1 className='text-lg'><b>Half-day poda island tour by long tailed</b></h1>
                          </div>
                          <hr className='my-5 h-0.5 bg-[#AAAAAA]'/>
                          <div>
                            <p className='text-[#989898]'>Checkout from <b>Hotel in Krabi</b></p>
                          </div>
                          <hr className='my-5 h-0.5 bg-[#AAAAAA]'/>
                          <div>
                        <h1 className='text-xl'><b>Hotel Stay</b></h1>
                        <p className='text-[#989898]'>New Delhi to Pukhet | Flight Duration - 04h 35m</p>
                        </div>
                        <div className='flex items-center justify-between	mt-5'>
                        <img src='/fly-img.png' style={{height: '55px', width:'55px'}}/>
                        <div>
                        <h1 className='text-xl'><b>Avesea Resort Krabi - Holidays Selections</b></h1>
                        <div className='flex'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
                        <p className='text-[#989898]'>Ao Nang</p>
                        </div>
                        <div >
                          <h1 className='text-xl'>Room Type</h1>
                          <p className='text-[#989898] text-sm'>Superior Room * 1</p>
                          <p className='text-[#989898] text-sm'>Breakfast included</p>
                        </div>
                        </div>
                        <hr className='my-5 h-0.5 bg-[#AAAAAA]'/>
                          <div className='flex justify-between'>
                            <h1><b>Day Meals</b></h1>
                            <p className='text-[#989898] flex items-center'><ImSpoonKnife  className='mx-3'/><b>Breakfast:</b> Included at Avesea Resort Krabi</p>
                            
                          </div>
                          </div>
                      </div>

                      <div className='text-center text-blue-400'><a href='#'>View 3 more days Itinerary</a></div>

                      <div>
                        <h1><b>Package Exclusion</b></h1>
                        <hr className='my-5 h-0.5 bg-[#AAAAAA]'/>
                        <p className='flex items-center'><RxCross2 className='text-xl text-red-500 mr-5'/>Package price does not include gala dinner charges applicable on chiristmas New Year's Eve</p>
                        <p className='flex items-center'><RxCross2 className='text-xl text-red-500 mr-5'/>Visa cost is not included in the package cost</p>
                      </div>

                    </div>

                </div>
            </div>

            <div className='shadow-2xl h-fit'>
                <div className='bg-[#DDEFEE] p-5'>
                    <h1 className='text-3xl'><b>₹54,566</b></h1>
                    <p> (Inclusive of GST)</p>
                </div>
                <div className='p-5'>
                    <h1 className='text-xl'><b>Package Breakup</b></h1>
                    <p className='py-1'>Total Basic Cost </p>
                    <p className='py-1'>₹1,44,904</p>
                    <p className='py-1'>Fees & Taxes </p>
                    <p className='py-1'>+ ₹5,428</p>

                    <p className='pt-5 text-lg'><b>Important Information</b></p>
                    <div className='flex'>
                    <input type='checkbox' className='m-2 p-2'/>
                    <p>By clicking on the Continue button below to proceed with the booking, I confirm that I have read , Terms of Service and of Adil Travels.</p>
                    </div>
                    <button className='bg-[#00A852] rounded-full py-3 text-white my-6 w-full'><b>Proceed to Payment</b></button>
                    <button className='bg-[#656565] rounded-full py-3 text-white mb-6 w-full'><b>Booking With Offline Payment</b></button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
