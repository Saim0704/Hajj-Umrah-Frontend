import Image from "next/image";
import React, { useEffect, useState } from "react";
import LocalTransport from "src/components/feature/packageCreation/LocalTransport";
import Steps from "src/components/feature/packageCreation/steps";
import { FaStar } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { GoArrowBoth } from "react-icons/go";
import { useMutation } from "react-query";
import fetcher from "src/dataProvider";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Rate, Spin } from 'antd';
import axios from "axios";
import Swal from "sweetalert2";
import { setBasic_Details } from "src/redux/actions";
import { setFlight_Details } from "src/redux/actions";
import { setGallery } from "src/redux/actions";
import { setAccommodation } from "src/redux/actions";
import { setLocalTransport } from "src/redux/actions";
import { setTourItinerary    } from "src/redux/actions";




const Index = () => {
    const [previewData, setPreviewData] = useState({})
    const router = useRouter();
    const dispatch = useDispatch();
    const SaveId = useSelector(state => state?.user?.basic_Details?.basic_Detail?._id);
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

    const { mutate: getDetailsToPreview } = useMutation(
        () => fetcher.get(`/v1/package/${SaveId}`, "raw"),
        {
            onSuccess: async (res) => {
                let allFetchedData = res.data;
                console.log(allFetchedData);
                try {
                    const gallery = await getCloudImages(allFetchedData?.gallery?.galleryImages);
                    const header = await getCloudImages(allFetchedData?.gallery?.headerImages);
                    const thumb = await getCloudImages(allFetchedData?.gallery?.thumbImages);
                    if (allFetchedData.gallery) {
                        allFetchedData.gallery.galleryImages = gallery;
                        allFetchedData.gallery.headerImages = header;
                        allFetchedData.gallery.thumbImages = thumb;
                    };
                    if (Array.isArray(allFetchedData?.accomodation?.makkah)) {
                        for (let i = 0; i < allFetchedData?.accomodation?.makkah?.length; i++) {
                            const makkahItem = allFetchedData.accomodation.makkah[i];
                            const makkahRoomGallery = await getCloudImages(makkahItem.roomGallery);
                            const makkahHotelGallery = await getCloudImages(makkahItem.hotelGallery);
                            makkahItem.roomGallery = makkahRoomGallery;
                            makkahItem.hotelGallery = makkahHotelGallery;
                        };
                    }
                    if (Array.isArray(allFetchedData?.accomodation?.madeena)) {
                        for (let i = 0; i < allFetchedData?.accomodation?.madeena?.length; i++) {
                            const madeenaItem = allFetchedData?.accomodation?.madeena[i];
                            const madeenaRoomGallery = await getCloudImages(madeenaItem.roomGallery);
                            const madeenaHotelGallery = await getCloudImages(madeenaItem.hotelGallery);
                            madeenaItem.roomGallery = madeenaRoomGallery;
                            madeenaItem.hotelGallery = madeenaHotelGallery;
                        }
                    }
                    setPreviewData(allFetchedData);
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

    const { mutate: finalSubmit } = useMutation(
        () => fetcher.put(`/v1/package/${SaveId}/basic-details/final-submit`, "raw"),
        {
            onSuccess: (res) => {
                Swal.fire({
                    title: "Submitted!",
                    text: "Deatils has been Submitted.",
                    icon: "success"
                  });
                dispatch(setBasic_Details({ basic_Details:null }));
                dispatch(setFlight_Details({ flight_Details: null }));
                dispatch(setGallery({ gallery: null }));
                dispatch(setAccommodation({ accommodation: null }));
                dispatch(setLocalTransport({ localTransport: null }));
                dispatch(setTourItinerary({ tourItinerary: null }));

                router.push(`/`, undefined, {
                  shallow: true,
                });
            },
            onError: ({ response }) => {
                console.log(response.data.message);
                alert(response.data.message);
            },
        }
    );

    const handleFinalSubmit = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Save it!"
          }).then((result) => {
            if (result.isConfirmed) {
                finalSubmit();
            }
          });
    }

    useEffect(() => {
        setSpinner(true)
        getDetailsToPreview();
    }, [])
    console.log("pv2--->", previewData)

    return (
        <div className="container bg-white w-full ">
            <Spin tip="Loading..." spinning={spinner}>
                <div className="row">
                    <h1 style={{ background: '#06603C', color: 'white', padding: '15px', fontSize: '23px', fontWeight: '600', textAlign: 'center', borderTop: '1px solid white' }}>Preview of  Umrah Package</h1>
                    <div className="p-5">
                        <h2 className="text-2xl"><b>Basic Details</b></h2>
                        <div className="grid gap-4 md:grid-cols-5 sm:grid-cols-1 mt-3">
                            <div>
                                <p>Package Name</p>
                                <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{previewData?.name}</p>
                            </div>
                            <div>
                                <p>Package Cost</p>
                                <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{previewData?.currency + " " + previewData?.cost}</p>
                            </div>
                            <div>
                                <p>Duration</p>
                                <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{previewData?.durationDays}Days/{previewData?.durationNights}Nights</p>
                            </div>
                            <div>
                                <p>No. of Days</p>
                                <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{previewData?.durationDays}Days </p>
                            </div>
                            <div>
                                <p>No. of Nights</p>
                                <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{previewData?.durationNights} Nights </p>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                            <div>
                                <p><u>Selected Date</u></p>
                                <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1 mt-3">
                                    <div>
                                        <p>From</p>
                                        <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{new Date(previewData?.fromDate).toLocaleDateString('en-GB')}</p>
                                    </div>
                                    <div>
                                        <p>To</p>
                                        <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{new Date(previewData?.toDate).toLocaleDateString('en-GB')}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p><u>Destination Points</u></p>
                                <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1 mt-3">
                                    <div>
                                        <p>From</p>
                                        <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{previewData?.fromCity}</p>
                                    </div>
                                    <div>
                                        <p>To</p>
                                        <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{previewData?.toCity}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p>Package Details</p>
                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{previewData?.description}</p>
                        </div>
                        <hr className="my-5"></hr>
                        <h2 className="text-xl"><b>Gallery</b></h2>
                        <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-1 mt-2">
                            <div className="col-span-3">
                                <p className="py-2">Thumb Images</p>
                                <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2">
                                    {
                                        previewData?.gallery?.thumbImages?.map((image, index3) => {
                                            return (
                                                <div key={index3}>
                                                    <Image src={image.secure_url} width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-span-3">
                                <p className="py-2">Header Images</p>
                                <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2">
                                    {
                                        previewData?.gallery?.headerImages?.map((image, index4) => {
                                            return (
                                                <div key={index4}>
                                                    <Image src={image.secure_url} width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-span-3">
                                <p className="py-2">Gallery Images</p>
                                <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2">
                                    {
                                        previewData?.gallery?.galleryImages?.map((image, index5) => {
                                            return (
                                                <div key={index5}>
                                                    <Image src={image.secure_url} width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <hr className="my-10"></hr>
                        <h2 className="text-2xl"><b>Flight Details</b></h2>
                        <h2 className="text-lg my-2"><u>Air Ticket Type</u></h2>
                        <h2 className="text-xl "><b>{previewData?.flight?.ticketType}</b></h2>
                        {previewData?.flight?.flightItinerary?.map((flights, index) => {
                            return (
                                <div key={index}>
                                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                                        <div>
                                            <div>
                                                <div>
                                                    <p>Airline Carrier</p>
                                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{flights?.airlineCarrier?.name}</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            <p>Airline Carrier Class</p>
                                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{flights?.ticketClass}</p>
                                        </div>
                                    </div>
                                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                                        <div>

                                            <div>
                                                <div>
                                                    <p>From</p>
                                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}><b>{flights?.fromCity}</b></p>
                                                </div>

                                            </div>
                                        </div>
                                        <div>

                                            <div>
                                                <div>
                                                    <p>To</p>
                                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}><b>{flights?.toCity}</b></p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                                        <div>

                                            <div>
                                                <div>
                                                    <p>Date</p>
                                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}><b>{flights?.date}</b></p>
                                                </div>

                                            </div>
                                        </div>
                                        <div>

                                            <div>
                                                <div>
                                                    <p>Luggage Allowed</p>
                                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{flights?.luggageWeight}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-10"></hr>
                                </div>)
                        })}
                        <h2 className="text-2xl"><b>Accomodation / Hotels</b></h2>
                        <h2 className="text-xl my-2">MAKKAH  & MADEENA</h2>
                        <h2 className="text-xl "><b>Makkah</b></h2>
                        {previewData?.accomodation?.makkah?.map((hotel, index) => {
                            return (
                                <div key={index}>
                                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                                        <div>
                                            <div>
                                                <div>
                                                    <p>Hotel Name</p>
                                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{hotel?.hotelName}</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            <p>Destination Address</p>
                                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{hotel?.hotelAddress}</p>
                                        </div>
                                    </div>
                                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                                        <div>
                                            <div>
                                                <div>
                                                    <p>Hotel Class/Star</p>
                                                    <p className="mt-2 flex text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>
                                                        <Rate allowHalf defaultValue={hotel.hotelStar} />
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            <p>Distance From HARAM</p>
                                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{hotel?.distanceKaaba}Km far from HARAM </p>
                                        </div>
                                        <div>
                                            <p>Room Types</p>
                                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{hotel?.roomType?.name}</p>
                                        </div>
                                    </div>
                                    <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1 mt-5">
                                        <div>
                                            <div>
                                                <div>
                                                    <p>Services avail</p>
                                                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1">
                                                        {hotel?.amenities?.map((item, index2) => {
                                                            return (
                                                                <div key={index2}>
                                                                    <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />{item?.name}</p>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mt-2">Food</p>
                                                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1">
                                                        {hotel?.food?.alaCarte ? <div>
                                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />AlaCarte</p>
                                                        </div>
                                                            : null}
                                                        {hotel?.food?.breakfast ? <div>
                                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />Breakfast</p>
                                                        </div>
                                                            : null}
                                                        {hotel?.food?.buffet ? <div>
                                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />Buffet</p>
                                                        </div>
                                                            : null}
                                                        {hotel?.food?.dinner ? <div>
                                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />Dinner</p>
                                                        </div>
                                                            : null}
                                                        {hotel?.food?.lunch ? <div>
                                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />Lunch</p>
                                                        </div>
                                                            : null}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <p className="py-5 font-bold">Hotel Photos</p>
                                    <div className="grid gap-4 md:grid-cols-5 sm:grid-cols-2">
                                        {
                                            hotel?.hotelGallery?.map((image, index6) => {
                                                return (
                                                    <div key={index6}>
                                                        <Image src={image.secure_url} width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="py-5 font-bold">Room Photos</p>
                                    <div className="grid gap-4 md:grid-cols-5 sm:grid-cols-2">
                                        {
                                            hotel?.roomGallery?.map((image, index6) => {
                                                return (
                                                    <div key={index6}>
                                                        <Image src={image.secure_url} width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>


                                    <hr className="my-10"></hr>
                                </div>
                            )
                        })}

                        <h2 className="text-xl "><b>Madeena</b></h2>
                        {previewData?.accomodation?.madeena?.map((hotel, index) => {
                            return (
                                <div key={index}>
                                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                                        <div>

                                            <div>
                                                <div>
                                                    <p>Hotel Name</p>
                                                    <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{hotel?.hotelName}</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            <p>Destination Address</p>
                                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{hotel?.hotelAddress}</p>
                                        </div>
                                    </div>
                                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1 mt-5">
                                        <div>

                                            <div>
                                                <div>
                                                    <p>Hotel Class/Star</p>
                                                    <p className="mt-2 flex text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>
                                                        <Rate allowHalf defaultValue={hotel.hotelStar} /></p>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            <p>Distance From MASJID NABAWI</p>
                                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{hotel?.distanceProphetTomb}Km far from HARAM </p>
                                        </div>
                                        <div>
                                            <p>Room Types</p>
                                            <p className="mt-2 text-sm	decoration-neutral-500	" style={{ color: '#737373' }}>{hotel?.roomType?.name}</p>
                                        </div>
                                    </div>
                                    <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1 mt-5">
                                        <div>
                                            <div>
                                                <div>
                                                    <p>Services avail</p>
                                                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1">
                                                        {hotel?.amenities?.map((item, index2) => {
                                                            return (
                                                                <div key={index2}>
                                                                    <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />{item?.name}</p>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mt-2">Food</p>
                                                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1">
                                                        {hotel?.food?.alaCarte ? <div>
                                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />AlaCarte</p>
                                                        </div>
                                                            : null}
                                                        {hotel?.food?.breakfast ? <div>
                                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />Breakfast</p>
                                                        </div>
                                                            : null}
                                                        {hotel?.food?.buffet ? <div>
                                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />Buffet</p>
                                                        </div>
                                                            : null}
                                                        {hotel?.food?.dinner ? <div>
                                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />Dinner</p>
                                                        </div>
                                                            : null}
                                                        {hotel?.food?.lunch ? <div>
                                                            <p className="mt-2 text-lg	decoration-neutral-500	flex" ><FaCheck style={{ fontSize: '28px', color: 'green' }} />Lunch</p>
                                                        </div>
                                                            : null}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <p className="py-5 font-bold">Hotel Photos</p>
                                    <div className="grid gap-4 md:grid-cols-5 sm:grid-cols-2">
                                        {
                                            hotel?.hotelGallery?.map((image, index6) => {
                                                return (
                                                    <div key={index6}>
                                                        <Image src={image.secure_url} width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="py-5 font-bold">Gallery Photos</p>
                                    <div className="grid gap-4 md:grid-cols-5 sm:grid-cols-2">
                                        {
                                            hotel?.roomGallery?.map((image, index6) => {
                                                return (
                                                    <div key={index6}>
                                                        <Image src={image.secure_url} width={200} height={250} style={{ height: '105px', borderRadius: '10px' }} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <hr className="my-10"></hr>
                                </div>
                            )
                        })}

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
            <div className="w-full flex pt-4 px-8 pb-4">
                <div className="w-1/2">
                </div>
                <div className="w-1/2 text-right">
                    <button
                        type="button"
                        class="btn-green"
                        onClick={() => handleFinalSubmit()}>
                        Final Submit
                    </button>
                </div>
            </div>
            </Spin>
        </div>
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