import Image from "next/image";
import React from "react";
import LocalTransport from "src/components/feature/packageCreation/LocalTransport";
import Steps from "src/components/feature/packageCreation/steps";
import { FaStar } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { GoArrowBoth } from "react-icons/go";
const Index = () => {
    return (
        // <Steps activeStep="Preview & Submit">
        <div className="container bg-white">
            <div className="row">
                <h1 style={{ background: '#06603C', color: 'white', padding: '15px', fontSize: '23px', fontWeight: '600' }}>Preview of  Umrah Package</h1>
                <div className="p-5">
                    <h2 className="text-2xl"><b>Basic Details</b></h2>
                    <div className="grid gap-4 md:grid-cols-5 sm:grid-cols-1 mt-3">
                        <div>
                            <p>Package Name</p>
                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>GROUP PACKAGE</p>
                        </div>
                        <div>
                            <p>Package Cost</p>
                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>INR 77,000</p>
                        </div>
                        <div>
                            <p>Select Duration</p>
                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>6Days/5Nights</p>
                        </div>
                        <div>
                            <p>No. of Days</p>
                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>6 Days </p>
                        </div>
                        <div>
                            <p>No. of Nights</p>
                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>5 Nights </p>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                        <div>
                            <p><u>Choose Date</u></p>
                            <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1 mt-3">
                                <div>
                                    <p>From</p>
                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>12/07/2023</p>
                                </div>
                                <div>
                                    <p>To</p>
                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>22/07/2023</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p><u>Destination Points</u></p>
                            <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1 mt-3">
                                <div>
                                    <p>From</p>
                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>Meerut, UP</p>
                                </div>
                                <div>
                                    <p>To</p>
                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>Makkah</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                        <div>
                            <p><u>Additional Destination Points after Umrah</u></p>
                            <div className="mt-3">
                                <div>
                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>Madeena</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p><u>No. of persons for the Umrah Package</u></p>
                            <div className="mt-3">
                                <div>
                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>8</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p>Package Details</p>
                        <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <hr className="my-5"></hr>
                    <h2 className="text-xl"><b>Gallery</b></h2>
                    <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-1 mt-2">
                        <div>
                            <p className="py-2">Add Thumb Image</p>
                            <Image src="/cta-bg.jpg" width={250} height={250} style={{ height: '105px' }} />
                        </div>
                        <div className="col-span-3">
                            <p className="py-2">Gallery</p>
                            <div className="grid gap-4 md:grid-cols-6 sm:grid-cols-2">
                                <div>
                                    <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                                </div>
                                <div>
                                    <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                                </div>
                                <div>
                                    <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                                </div>
                                <div>
                                    <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                                </div>
                                <div>
                                    <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                                </div>
                                <div>
                                    <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-1 mt-2">
                        <div>
                            <p className="py-2">Add Header Image</p>
                            <Image src="/cta-bg.jpg" width={250} height={250} style={{ height: '105px' }} />
                        </div>
                        <div className="col-span-3">
                            <p className="py-2">Gallery</p>
                            <div className="grid gap-4 md:grid-cols-6 sm:grid-cols-2">
                                <div>
                                    <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className="my-10"></hr>
                    <h2 className="text-2xl"><b>Flight Details</b></h2>
                    <h2 className="text-lg my-2"><u>Air Ticket Type</u></h2>
                    <h2 className="text-xl "><b>ROUND TRIP</b></h2>
                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                        <div>

                            <div>
                                <div>
                                    <p>Airline Carrier</p>
                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>ETIHAD AIRWAYS</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <p>Airline Carrier Class</p>
                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>Economy</p>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                        <div>

                            <div>
                                <div>
                                    <p>No. of Travellers</p>
                                    <p className="mt-2 text-2xl font-bold	decoration-neutral-500	" style={{ color: '#737373' }}> 03</p>
                                </div>

                            </div>
                        </div>
                        <div>

                            <div>
                                <div>
                                    <p>No. of Adults</p>
                                    <p className="mt-2 text-2xl font-bold	decoration-neutral-500	" style={{ color: '#737373' }}> 02</p>
                                </div>

                            </div>
                        </div>
                        <div>

                            <div>
                                <div>
                                    <p>No. of Childrens</p>
                                    <p className="mt-2 text-2xl font-bold	decoration-neutral-500	" style={{ color: '#737373' }}> 01</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                        <div>

                            <div>
                                <div>
                                    <p>From</p>
                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}><b>New Delhi</b> DEL <br /> Indira Gandhi International Airport</p>
                                </div>

                            </div>
                        </div>
                        <div>

                            <div>
                                <div>
                                    <p>To</p>
                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}><b>Jeddah </b> JED <br /> King Abdulaziz International Airport</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                        <div>

                            <div>
                                <div>
                                    <p>Departure Date</p>
                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}><b>12 July </b> Wed, 2023</p>
                                </div>

                            </div>
                        </div>
                        <div>

                            <div>
                                <div>
                                    <p>Return Date</p>
                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}><b>22 July </b> Wed, 2023</p>
                                </div>

                            </div>
                        </div>
                        <div>

                            <div>
                                <div>
                                    <p>Luggage Allowed</p>
                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>30 Kgs.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <hr className="my-10"></hr>
                    <h2 className="text-2xl"><b>Accomodation / Hotels</b></h2>
                    <h2 className="text-xl my-2">MAKKAH  & MADEENA</h2>
                    <h2 className="text-xl "><b>Makkah</b></h2>
                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                        <div>

                            <div>
                                <div>
                                    <p>Hotel Name</p>
                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>Elaf Kinda Hotel</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <p>Destination Address</p>
                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>Al Mesial Street, Next to Clock Tower, 99999* <br /> Makkah, Saudi Arabia </p>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                        <div>

                            <div>
                                <div>
                                    <p>Hotel Class/Star</p>
                                    <p className="mt-2 flex text-sm	decoration-neutral-500	" style={{ color: '#737373' }}><FaStar style={{ color: '#f7f30b', fontSize: '25px' }} /><FaStar style={{ color: '#f7f30b', fontSize: '25px' }} /><FaStar style={{ color: '#f7f30b', fontSize: '25px' }} /></p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <p>Distance From HARAM</p>
                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>2Km far from HARAM </p>
                        </div>
                        <div>
                            <p>Room Types</p>
                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>Private, Deluxe </p>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1 mt-5">
                        <div>

                            <div>
                                <div>
                                    <p>Services avail</p>
                                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                                        <div>
                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />Wifi</p>
                                        </div>
                                        <div>
                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />Laundry</p>
                                        </div>
                                        <div>
                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />Dinner</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <p className="py-5 font-bold">Add Photos</p>
                    <div className="grid gap-4 md:grid-cols-5 sm:grid-cols-2">
                        <div>
                            <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                        </div>
                        <div>
                            <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                        </div>
                        <div>
                            <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                        </div>
                        <div>
                            <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                        </div>
                        <div>
                            <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                        </div>

                    </div>
                    <hr className="my-10"></hr>
                    <h2 className="text-xl "><b>Madeena</b></h2>
                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                        <div>

                            <div>
                                <div>
                                    <p>Hotel Name</p>
                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>Elaf Kinda Hotel</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <p>Destination Address</p>
                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>Al Mesial Street, Next to Clock Tower, 99999* <br /> Makkah, Saudi Arabia </p>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                        <div>

                            <div>
                                <div>
                                    <p>Hotel Class/Star</p>
                                    <p className="mt-2 flex text-sm	decoration-neutral-500	" style={{ color: '#737373' }}><FaStar style={{ color: '#f7f30b', fontSize: '25px' }} /><FaStar style={{ color: '#f7f30b', fontSize: '25px' }} /><FaStar style={{ color: '#f7f30b', fontSize: '25px' }} /><FaStar style={{ color: '#f7f30b', fontSize: '25px' }} /></p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <p>Distance From MASJID NABAWI</p>
                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>2Km far from HARAM </p>
                        </div>
                        <div>
                            <p>Room Types</p>
                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>Private, Deluxe </p>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1 mt-5">
                        <div>

                            <div>
                                <div>
                                    <p>Services avail</p>
                                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                                        <div>
                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />Wifi</p>
                                        </div>
                                        <div>
                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />Laundry</p>
                                        </div>
                                        <div>
                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />Dinner</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <p className="py-5 font-bold">Add Photos</p>
                    <div className="grid gap-4 md:grid-cols-5 sm:grid-cols-2">
                        <div>
                            <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                        </div>
                        <div>
                            <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                        </div>
                        <div>
                            <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                        </div>
                        <div>
                            <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                        </div>
                        <div>
                            <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                        </div>

                    </div>
                    <hr className="my-10"></hr>
                    <h2 className="text-xl "><b>Local Site Visits/Ziyarat</b></h2>
                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                        <div>

                            <div>
                                <div>
                                    <p>Sightseeing Place</p>
                                    <p className="mt-2 text-xl	flex">Jeddah    <GoArrowBoth className="text-3xl mx-3" />    Makkah</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <p>Travel By</p>
                            <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1">
                                <div>
                                    <p className="mt-2 text-xl	decoration-neutral-500	" style={{ color: '#737373' }}>Bus</p>
                                </div>
                                <div>
                                    <p className="mt-2 text-xl	decoration-neutral-500	" style={{ color: '#737373' }}>Metro</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                        <div>

                            <div>
                                <div>
                                    <p className="mt-2 text-xl	flex"> Makkah     <GoArrowBoth className="text-3xl mx-3" />  Jeddah  </p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1">
                                <div>
                                    <p className="mt-2 text-xl	decoration-neutral-500	" style={{ color: '#737373' }}>Bus</p>
                                </div>
                                <div>
                                    <p className="mt-2 text-xl	decoration-neutral-500	" style={{ color: '#737373' }}>Metro</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="py-5 font-bold">Add Photos</p>
                    <div className="grid gap-4 md:grid-cols-5 sm:grid-cols-2">
                        <div>
                            <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                        </div>
                        <div>
                            <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                        </div>
                        <div>
                            <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                        </div>
                        <div>
                            <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                        </div>
                        <div>
                            <Image src="/cta-bg.jpg" width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
        // </Steps>
    );
};
export default Index;
export async function getStaticProps() {
    return {
        props: {
            asLayout: "DefaultLayout",
            withSideBar: true,
        },
    };
}