import React, { useEffect, useState } from 'react'
import { IoShareSocialOutline } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { VscCalendar } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { MdFlight } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/router';
import QRCode from 'qrcode.react';
import { useMutation } from 'react-query';
import fetcher from 'src/dataProvider';
import { Alert, Spin } from 'antd';
import axios from 'axios';

const index = () => {

  const router = useRouter();
  const { slug } = router.query;
  const packageUrl = `${process.env.NEXT_PUBLIC_DEPLOYED_SERVER}/package-detail/${slug}`;
  const [packageDetails, setPackageDetails] = useState("")
  const [spinner, setSpinner] = useState(false)


  const getCloudImages = async (url) => {
    const serviceName = 'adil-travels';
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Service-Name': serviceName,
        'Object-Name': url
      }
    };
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_CLOUD_URL}/upload/get-multiple`, config);
      return response.data.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }


  const { mutate: getPackageDetails } = useMutation(
    () => fetcher.get(`/v1/package-details/${slug}`),
    {
      onSuccess: async (res) => {
        let packageData = res.data;
        try {
          const gallery = await getCloudImages(packageData?.gallery?.galleryImages);
          const header = await getCloudImages(packageData?.gallery?.headerImages);
          const thumb = await getCloudImages(packageData?.gallery?.thumbImages);
          if (packageData.gallery) {
            packageData.gallery.galleryImages = gallery;
            packageData.gallery.headerImages = header;
            packageData.gallery.thumbImages = thumb;
          };
          if (Array.isArray(packageData?.accomodation?.makkah)) {
            for (let i = 0; i < packageData?.accomodation?.makkah?.length; i++) {
              const makkahItem = packageData.accomodation.makkah[i];
              const makkahRoomGallery = await getCloudImages(makkahItem.roomGallery);
              const makkahHotelGallery = await getCloudImages(makkahItem.hotelGallery);
              makkahItem.roomGallery = makkahRoomGallery;
              makkahItem.hotelGallery = makkahHotelGallery;
            };
          }
          if (Array.isArray(packageData?.accomodation?.madeena)) {
            for (let i = 0; i < packageData?.accomodation?.madeena?.length; i++) {
              const madeenaItem = packageData?.accomodation?.madeena[i];
              const madeenaRoomGallery = await getCloudImages(madeenaItem.roomGallery);
              const madeenaHotelGallery = await getCloudImages(madeenaItem.hotelGallery);
              madeenaItem.roomGallery = madeenaRoomGallery;
              madeenaItem.hotelGallery = madeenaHotelGallery;
            }
          }
          setPackageDetails(packageData);
          setSpinner(false)
        } catch (error) {
          console.error('Error:', error);
        }
      },
      onError: ({ response }) => {
        console.log(response.data.message);
        alert(response.data.message);
      },
    }
  );

  useEffect(() => {
    setSpinner(true)
    if (slug) {
      getPackageDetails();
    }
  }, [slug])

  console.log(packageDetails, "getPackageDetails")

  return (
    <>
      <Spin tip="Loading..." spinning={spinner}>
        <section class="relative">
          {
            packageDetails?.gallery?.headerImages
              ?
              <img src={packageDetails?.gallery?.headerImages[0].secure_url} /> 
              :
              <img src='/detailpage.png' />
          }
          <div class="absolute bottom-3	left-5">
            <p class="text-[#94E27C] text-lg"><b>{packageDetails?.durationDays}Days/{packageDetails?.durationNights}Nights</b> </p>
            <h1 class="text-7xl text-white pb-4">{packageDetails?.name}</h1>
          </div>
        </section>

        <section className='bg-[#EFEFEF] p-5'>
          <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-6'>
            <div className='col-span-2 flex'>
              <div className='px-3 py-2 mx-2' style={{ borderBottom: '2px solid #109A79' }}>Detail</div>
              <div className='px-3 py-2 mx-2' >Itinerary</div>
              <div className='px-3 py-2 mx-2' >Media</div>
            </div>

            <div className='flex justify-around'>
              <div className=' flex justify-center items-center	' ><IoShareSocialOutline className='text-3xl bg-white p-1 rounded-2xl mx-2' /> Share this tour</div>
              <div className=' flex justify-center items-center	'><GoArrowSwitch className='text-3xl bg-white p-1 rounded-2xl mx-2' /> Add to Compare</div>
            </div>
          </div>
        </section>


        <section className='bg-white p-5'>
          <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-3'>
            <div className='col-span-2 px-2'>
              <div className='grid md:grid-cols-4  gap-3'>
                <div className='col-span-3'>
                  <h1 className='text-2xl '><b>Tour Details</b></h1>
                  <p>{packageDetails?.description}</p>
                </div>

                <div className='justify-self-center	'>
                  <QRCode value={packageUrl} size={112} />
                  <p className='text-center'><b>Scan to Book</b></p>
                </div>
              </div>

              <div className='px-4 my-3'>
                <hr class="h-px bg-gray-200 border-0 w-full dark:bg-gray-700" />
                <p className='flex py-3'><FaMapMarkedAlt className='text-2xl mr-3' /><b>Places Covered:</b> Makkah  -  Madinah</p>
                <hr class="h-px bg-gray-200 border-0 w-full dark:bg-gray-700" />
              </div>

              <div className='my-3'>
                <h1 className='bg-[#00A852] text-white p-4 text-xl'><b>Package Highlights (Includes Following)</b></h1>
                <div className='grid lg:grid-cols-5 sm:grid-cols-1'>
                  <div className='bg-[#F2F2F2] p-3' style={{ borderBottom: '1px solid #fff' }}><b>Duration</b></div>
                  <div className='col-span-4 p-3' style={{ borderBottom: '1px solid #f2f2f2' }}>{packageDetails?.durationDays}Days/{packageDetails?.durationNights}Nights</div>
                </div>
                <div className='grid lg:grid-cols-5 sm:grid-cols-1'>
                  <div className='bg-[#F2F2F2] p-3' style={{ borderBottom: '1px solid #fff' }}><b>Visa Fee </b></div>
                  <div className='col-span-4 p-3' style={{ borderBottom: '1px solid #f2f2f2' }}>Yes</div>
                </div>
                <div className='grid lg:grid-cols-5 sm:grid-cols-1'>
                  <div className='bg-[#F2F2F2] p-3' style={{ borderBottom: '1px solid #fff' }}><b>Air Ticket </b></div>
                  <div className='col-span-4 p-3' style={{ borderBottom: '1px solid #f2f2f2' }}><b>AirIndia:</b>  (Direct) <b>Luggage:</b> (30KG)</div>
                </div>
                <div className='grid lg:grid-cols-5 sm:grid-cols-1'>
                  <div className='bg-[#F2F2F2] p-3' style={{ borderBottom: '1px solid #fff' }}><b className='text-xl'>Transport </b> <br /> <b>Jeddah to Makkah </b></div>
                  <div className='col-span-4 p-3' style={{ borderBottom: '1px solid #f2f2f2' }}>By Car</div>
                </div>
                <div className='grid lg:grid-cols-5 sm:grid-cols-1'>
                  <div className='bg-[#F2F2F2] p-3' style={{ borderBottom: '1px solid #fff' }}><b className=''>Makkah to Madinah </b></div>
                  <div className='col-span-4 p-3' style={{ borderBottom: '1px solid #f2f2f2' }}>By Bus</div>
                </div>
                <div className='grid lg:grid-cols-5 sm:grid-cols-1'>
                  <div className='bg-[#F2F2F2] p-3' style={{ borderBottom: '1px solid #fff' }}><b className=''>Accomodation </b></div>
                  <div className='col-span-4 p-3' style={{ borderBottom: '1px solid #f2f2f2' }}>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5'>
                      <div>
                        <p className='text-xl'><b>Makkah</b></p>
                        <div className='rounded border-2 border-gray-300	p-3'>
                          <p><b>Fatah Hotel (3 Days)</b></p>
                          <p className='flex'>
                            <FaStar className='mx-1' />
                            <FaStar className='mx-1' />
                            <FaStar className='mx-1' />
                          </p>
                          <p className='text-sm py-2'>Distance from Center - 500 M</p>
                          <p className='text-sm py-2'><b>No of Beds: 2</b></p>
                          <p className='flex items-center	'><IoFastFood /><b>Food: 3 Time Buffet</b></p>
                        </div>
                      </div>
                      <div>
                        <p className='text-xl'><b>Madinah</b></p>
                        <div className='rounded border-2 border-gray-300	p-3'>
                          <p><b>Fatah Hotel (3 Days)</b></p>
                          <p className='flex'>
                            <FaStar className='mx-1' />
                            <FaStar className='mx-1' />
                            <FaStar className='mx-1' />
                          </p>
                          <p className='text-sm py-2'>Distance from Center - 500 M</p>
                          <p className='text-sm py-2'><b>No of Beds: 2</b></p>
                          <p className='flex items-center	'><IoFastFood /><b>Food: 3 Time Buffet</b></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid lg:grid-cols-5 sm:grid-cols-1'>
                  <div className='bg-[#F2F2F2] p-3' style={{ borderBottom: '1px solid #fff' }}><b className=''>Sightseeing </b></div>
                  <div className='col-span-4 p-3' style={{ borderBottom: '1px solid #f2f2f2' }}>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5'>
                      <div>
                        <p className='text-xl'><b>Makkah</b></p>
                        <div className='rounded border-2 border-gray-300	p-3'>
                          <p className='flex items-center'><IoIosArrowForward /><b> Location 1</b></p>
                          <p className='flex items-center'><IoIosArrowForward /><b> Location 1</b></p>
                          <p className='flex items-center'><IoIosArrowForward /><b> Location 1</b></p>
                          <p className='flex items-center'><IoIosArrowForward /><b> Location 1</b></p>
                          <p className='flex items-center'><IoIosArrowForward /><b> Location 1</b></p>

                        </div>
                      </div>
                      <div>
                        <p className='text-xl'><b>Madinah</b></p>
                        <div className='rounded border-2 border-gray-300	p-3'>
                          <p className='flex items-center'><IoIosArrowForward /><b> Location 1</b></p>
                          <p className='flex items-center'><IoIosArrowForward /><b> Location 1</b></p>
                          <p className='flex items-center'><IoIosArrowForward /><b> Location 1</b></p>
                          <p className='flex items-center'><IoIosArrowForward /><b> Location 1</b></p>
                          <p className='flex items-center'><IoIosArrowForward /><b> Location 1</b></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className='text-2xl'><b>Itinerary</b></h1>
              <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5 bg-[#efefef] p-4 my-3'>
                <div>Day 1 - Arrival in Delhi</div>
                <div>INCLUDED: 1 Flight &nbsp;  1 Hotel  &nbsp; 1 Transfer  &nbsp;  2 Activities</div>
              </div>
              <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <div className='p-3'>
                <p className='flex items-center'><MdFlight className='mr-2' />Flight from New Delhi to Jeddah 01h 30m</p>
                <div className='flex items-center p-2 mx-2' style={{ borderLeft: '1px solid black', borderStyle: 'dashed' }}>
                  <div><img src='/fly-img.png' /><p className='text-center'>6E-6554</p></div>
                  <div className='px-2'>
                    <p><b>08:35</b></p>
                    <p>Thu,25 Apr</p>
                    <p>New Delhi</p>
                  </div>
                  <img src='/fly-travel.png' style={{ maxWidth: '150px' }} className='mx-2' />
                  <div className='px-2 text-end'>
                    <p><b>08:35</b></p>
                    <p>Thu,25 Apr</p>
                    <p>New Delhi</p>
                  </div>
                  <div className='px-2  mx-3'>
                    <p><b>Baggage</b></p>
                    <p><b>Cabin:</b> 7 Kgs(1 piece only)</p>
                    <p><b>Check-in:</b>15 Kgs (1 piece only)</p>
                  </div>
                </div>
                <p className='flex items-center'><MdFlight className='mr-2' />Airport to hotel in Jeddah</p>
                <div className='flex items-center my-3'>
                  <FaCar className='text-6xl mx-5' />
                  <div className='px-2  mx-5'>
                    <p><b>Private Transfer</b></p>
                    <p>Swift, Etios or Similar</p>
                    <p><b>Facilities:</b>3 seater | AC | 2 luggage bags| First Aid.</p>
                  </div>
                </div>
              </div>

              <hr class="h-px bg-gray-200 border-0 w-full dark:bg-gray-700 mt-3" />

              <div className='p-3'>
                <p><b>Check-in to Hotel in Jeddah @ 1 PM</b></p>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-10 mt-3'>
                  <div>
                    <img src='/ta-2.png' />
                  </div>
                  <div>
                    <p className='bg-[#00A852] text-sm py-2 px-6 rounded-3xl w-fit	text-white'>Hotel</p>
                    <p className='text-xl py-1'><b>Hotel  Palace </b></p>
                    <p>Sat, 27 Apr 2024 - Mon, 29 Apr 2024</p>
                    <a href="#" className='text-blue-600'>View Detail</a>
                  </div>

                </div>
              </div>

              <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5 bg-[#efefef] p-4 my-3'>
                <div>Day 2 - Checkout from Hotel in Jeddah</div>
                <div>INCLUDED: 1 Hotel &nbsp;  1 Transfer  &nbsp; 1 Transfer  &nbsp;  1 Activities</div>
              </div>
              <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className='flex items-center my-3'>
                <FaCar className='text-6xl mx-5' />
                <div className='px-2  mx-5'>
                  <p><b>Private Transfer</b></p>
                  <p>Swift, Etios or Similar</p>
                  <p><b>Facilities:</b>3 seater | AC | 2 luggage bags| First Aid.</p>
                </div>
              </div>

              <hr class="h-px bg-gray-200 border-0 w-full dark:bg-gray-700 mt-6" />

              <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5 bg-[#efefef] p-4 my-3 mt-5'>
                <div>Day 3 - Visit Jeddah</div>
                <div>INCLUDED: 1 Hotel &nbsp;  1 Transfer  &nbsp; 1 Transfer  &nbsp;  1 Activities</div>
              </div>
              <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


              <hr class="h-px bg-gray-200 border-0 w-full dark:bg-gray-700 mt-6" />


              <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5 bg-[#efefef] p-4 my-3'>
                <div>Day 4 - Departure in Jeddah</div>
                <div>INCLUDED: 1 Hotel &nbsp;  1 Transfer  &nbsp; 1 Transfer  &nbsp;  1 Activities</div>
              </div>
              <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className='p-3'>
                <p className='flex items-center'><MdFlight className='mr-2' />Flight from New Delhi to Jeddah 01h 30m</p>
                <div className='flex items-center p-2 mx-2' style={{ borderLeft: '1px solid black', borderStyle: 'dashed' }}>
                  <div><img src='/fly-img.png' /><p className='text-center'>6E-6554</p></div>
                  <div className='px-2'>
                    <p><b>08:35</b></p>
                    <p>Thu,25 Apr</p>
                    <p>New Delhi</p>
                  </div>
                  <img src='/fly-travel.png' style={{ maxWidth: '150px' }} className='mx-2' />
                  <div className='px-2 text-end'>
                    <p><b>08:35</b></p>
                    <p>Thu,25 Apr</p>
                    <p>New Delhi</p>
                  </div>
                  <div className='px-2  mx-3'>
                    <p><b>Baggage</b></p>
                    <p><b>Cabin:</b> 7 Kgs(1 piece only)</p>
                    <p><b>Check-in:</b>15 Kgs (1 piece only)</p>
                  </div>
                </div>
                <p className='flex items-center'><MdFlight className='mr-2' />Airport to hotel in Jeddah</p>
                <div className='flex items-center my-3'>
                  <FaCar className='text-6xl mx-5' />
                  <div className='px-2  mx-5'>
                    <p><b>Private Transfer</b></p>
                    <p>Swift, Etios or Similar</p>
                    <p><b>Facilities:</b>3 seater | AC | 2 luggage bags| First Aid.</p>
                  </div>
                </div>
              </div>

              <hr class="h-px bg-gray-200 border-0 w-full dark:bg-gray-700 mt-6" />

              <div>
                <h1 className='text-2xl'><b>Gallery</b></h1>
                <div className='flex items-center mt-5'>

                  <p><IoIosArrowBack className='p-1 m-1 rounded-full bg-[#00A852] text-white text-2xl' /></p>
                  <img src='/cta-bg.jpg' />
                  <p><IoIosArrowForward className='p-1 m-1 rounded-full bg-[#00A852] text-white text-2xl' /></p>
                </div>
              </div>




            </div>

            <div>
              <div className='shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)]'>
                <div className='bg-[#DDEFEE] py-4 px-6'>
                  <h1><b className='text-3xl'>₹{packageDetails?.cost}</b> per person*</h1>
                  <p>*Excluding applicable taxes</p>
                </div>
                <div className='bg-white py-4 px-6'>
                  <p className='flex  items-center'><VscCalendar className='text-2xl mr-3' />25 Apr - 01 May</p>
                </div>

                <div className='px-4'>
                  <hr class="h-px bg-gray-200 border-0 w-full dark:bg-gray-700" />
                </div>

                <div className='bg-white py-4 px-6'>
                  <button className='bg-[#00A852] text-xl px-4 py-3 w-full text-white text-center rounded-3xl'><b>Proceed to Book Online</b></button>
                </div>

              </div>

              <div className='bg-[#FFF1D3] py-4 px-6 mt-3'>
                <h1><b className='text-2xl'>Why book with us</b></h1>
                <p className='flex py-4 items-center'><FaCheck className='text-2xl mr-3' />WE OFFER DAILY TOURS</p>
                <p className='flex py-4 items-center'><FaCheck className='text-2xl mr-3' />FLY FROM  11 CITIES OF INDIA</p>
                <p className='flex py-4 items-center'><FaCheck className='text-2xl mr-3' />BETTER TOUR ARRANGEMENTS</p>
                <p className='flex py-4 items-center'><FaCheck className='text-2xl mr-3' />HIGHEST STANDARD OF SERVICES</p>
                <p className='flex py-4 items-center'><FaCheck className='text-2xl mr-3' />QUALITY ACCOMMODATIONS</p>
                <p className='flex py-4 items-center'><FaCheck className='text-2xl mr-3' />TRUST & SAFETY</p>
              </div>
            </div>

          </div>

        </section>
      </Spin>
    </>
  )
}

export default index