import React, { useEffect, useState } from "react";
import styles from "../../../../styles/Sidebar.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import fetcher from "src/dataProvider";
import { useMutation } from "react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAccommodation } from "src/redux/actions";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const Accommodation = () => {

  const [masterData, setMasterData] = useState({})
  const [previewMakkahImages, setPreviewMakkahImages] = useState([])
  const [previewMadinahImages, setPreviewMadinahImages] = useState([])
  const router = useRouter();
  const SaveId = useSelector(state => state?.user?.basic_Details?.basic_Detail?._id);
  const FlightId = useSelector(state => state?.user?.flight_Details?.flight_Details?._id);

   const AccommodationId = useSelector(state => state?.user?.accommodation?.accommodation?._id);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      makkah: [
        {
          hotelName: "",
          hotelAddress: "",
          hotelStar: 0,
          distanceKaaba: "",
          distanceBoundry: "",
          roomType: "",
          bedCount: 0,
          fromDate: "",
          toDate: "",
          amenities: [],
          food: {
            breakfast: false,
            lunch: false,
            dinner: false,
            buffet: false,
            alaCarte: false
          },
          hotelGallery: [],
          roomGallery: []
        }
      ],
      madeena: [
        {
          hotelName: "",
          hotelAddress: "",
          hotelStar: 0,
          distanceProphetTomb: "",
          distanceBoundry: "",
          roomType: "",
          bedCount: 0,
          fromDate: "",
          toDate: "",
          amenities: [],
          food: {
            breakfast: false,
            lunch: false,
            dinner: false,
            buffet: false,
            alaCarte: false
          },
          hotelGallery: [],
          roomGallery: []
        }
      ]
    },
    validationSchema: Yup.object().shape({
      makkah: Yup.array().of(
        Yup.object().shape({
          hotelName: Yup.string().required('Hotel Name is required'),
          hotelAddress: Yup.string().required('Hotel Address is required'),
          hotelStar: Yup.number().required('Hotel Star is required').min(1, 'Hotel Star must be at least 1'),
          distanceKaaba: Yup.string().required('Distance to Kaaba is required'),
          distanceBoundry: Yup.string().required('Distance to Boundry is required'),
          roomType: Yup.string().required('Room Type is required'),
          bedCount: Yup.number().required('Bed Count is required').min(1, 'Bed Count must be at least 1'),
          fromDate: Yup.string().required('Date is required'),
          toDate: Yup.string().required('Date is required'),
          amenities: Yup.array().of(
            Yup.string()
          ).min(1,'At least one amenity must be selected'),
          food: Yup.object().shape({
            breakfast: Yup.boolean(),
            lunch: Yup.boolean(),
            dinner: Yup.boolean(),
            buffet: Yup.boolean(),
            alaCarte: Yup.boolean()
          }).test('at-least-one-selected', 'At least one food option must be selected', (value) => {
            return Object.values(value).some(option => option);
          }).required('At least one food option must be selected'),
          hotelGallery: Yup.array().of(
            Yup.string()
          ).min(1, 'Hotel Images Required'),
          roomGallery: Yup.array().of(
            Yup.string()
          ).min(1, 'Gallery Images Required'),
        })
      ),
      madeena: Yup.array().of(
        Yup.object().shape({
          hotelName: Yup.string().required('Hotel Name is required'),
          hotelAddress: Yup.string().required('Hotel Address is required'),
          hotelStar: Yup.number().required('Hotel Star is required').min(1, 'Hotel Star must be at least 1'),
          distanceProphetTomb: Yup.string().required('Distance to Prophet Tomb is required'),
          distanceBoundry: Yup.string().required('Distance to Boundry is required'),
          roomType: Yup.string().required('Room Type is required'),
          bedCount: Yup.number().required('Bed Count is required').min(1, 'Bed Count must be at least 1'),
          fromDate: Yup.string().required('Date is required'),
          toDate: Yup.string().required('Date is required'),
          amenities: Yup.array().of(
            Yup.string()
          ).min(1, 'At least one amenity must be selected'),
          food: Yup.object().shape({
            breakfast: Yup.boolean(),
            lunch: Yup.boolean(),
            dinner: Yup.boolean(),
            buffet: Yup.boolean(),
            alaCarte: Yup.boolean()
          }).test('at-least-one-selected', 'At least one food option must be selected', (value) => {
            return Object.values(value).some(option => option);
          }).required('At least one food option must be selected'),
          hotelGallery: Yup.array().of(
            Yup.string()
          ).min(1, 'Hotel Images Required'),
          roomGallery: Yup.array().of(
            Yup.string()
          ).min(1, 'Gallery Images Required'),
        })
      )
    }),

    onSubmit: (values, { setSubmitting }) => {
      console.log("SUBMIT")
      createPackage(values);
      setSubmitting(false);
    }
  })

  const { mutate: createPackage } = useMutation(
    (data) => fetcher.post(`/v1/package/${SaveId}/accomodation`, data, "raw"),
    {
      onSuccess: (res) => {
        Swal.fire({
          icon: "success",
          title: "Accommodation Details Saved",
          showConfirmButton: false,
          timer: 1500
        });
        dispatch(setAccommodation({ accommodation: res.data }));
        router.push(`/admin/create-package/local-transport`, undefined, {
          shallow: true,
        });
      },
      onError: ({ response }) => {
        console.log(response.data.message);
        alert(response.data.message);
      },
    }
  );

  const addMakkahSection = () => {
    formik.setValues((values) => ({
      ...values,
      makkah: [...values.makkah, {
        hotelName: "",
        hotelAddress: "",
        hotelStar: 0,
        distanceKaaba: "",
        distanceBoundry: "",
        roomType: "",
        bedCount: 0,
        fromDate: "",
        toDate: "",
        amenities: [],
        food: {
          breakfast: false,
          lunch: false,
          dinner: false,
          buffet: false,
          alaCarte: false
        },
        hotelGallery: [],
        roomGallery: []
      }]
    }))
  };

  const addMadeenaSection = () => {
    formik.setValues((values) => ({
      ...values,
      madeena: [...values.madeena, {
        hotelName: "",
        hotelAddress: "",
        hotelStar: 0,
        distanceProphetTomb: "",
        distanceBoundry: "",
        roomType: "",
        bedCount: 0,
        fromDate: "",
        toDate: "",
        amenities: [],
        food: {
          breakfast: false,
          lunch: false,
          dinner: false,
          buffet: false,
          alaCarte: false
        },
        hotelGallery: [],
        roomGallery: []
      }]
    }))
  };


  const { mutate: getMasterData } = useMutation(
    () => fetcher.get(`v1/master-data/type?type=AMENITIES,ROOM_TYPE`),
    {
      onSuccess: (res) => {
        setMasterData(res.data)
      },
      onError: ({ response }) => {
        console.log(response.data.message);
        alert(response.data.message);
      },
    }
  );

  useEffect(() => {
    getMasterData();
  }, [])

  const handleMakkahCloudImages = (event, index, name = event.target.name) => {
    const formData = new FormData();
    Array.from(event.currentTarget.files).map((item) => {
      formData.append('files', item);
    })
    const serviceName = 'adil-travels';
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Service-Name': serviceName
      }
    };
    axios.post(`${process.env.NEXT_PUBLIC_CLOUD_URL}/upload/multiple`, formData, config)
      .then(response => {
        console.log("OKAY")
        formik.setFieldValue(`makkah[${index}].[${name}]`, [response.data.data])
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const handleMadeenaCloudImages = (event, index, name = event.target.name) => {
    const formData = new FormData();
    Array.from(event.currentTarget.files).map((item) => {
      formData.append('files', item);
    })
    const serviceName = 'adil-travels';
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Service-Name': serviceName
      }
    };
    axios.post(`${process.env.NEXT_PUBLIC_CLOUD_URL}/upload/multiple`, formData, config)
      .then(response => {
        console.log("OKAY")
        formik.setFieldValue(`madeena[${index}].[${name}]`, [response.data.data])
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  console.log(previewMakkahImages,"previewMakkahImages")
  console.log(previewMadinahImages,"previewMadinahImages")

  useEffect(() => {
    if (!FlightId) {
      Swal.fire({
        title : "Please Fill Basic Details!",
        icon:"warning"
      });
      router.push('/admin/create-package/flight-details');
    }
  }, [SaveId, router]);
  return (
    <>
      <div className="p-5">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <form className="form-ui" onSubmit={formik.handleSubmit}>
            <div className="font-bold text-3xl mb-6">
              <h2>Accommodation in Makkah</h2>
            </div>
            {formik?.values?.makkah?.map((section, index) => {
              return (
                <div key={index}>
                  <div className="grid gap-9 mb-3 md:grid-cols-12">
                    <div class="md:col-span-9">
                      <label for="last_name"> Hotel Name</label>
                      <input
                        class="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                        type="text"
                        name=""
                        onChange={(e) => { formik.setFieldValue(`makkah[${index}].hotelName`, e.target.value) }}
                      />
                      {(formik?.errors?.makkah && formik?.errors?.makkah[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.makkah[index]?.hotelName
                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                    <div class="md:col-span-3">
                      <label for="last_name">Acc Class</label>
                      <select
                        id=""
                        name=""
                        className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                        placeholder="Select Star"
                        value={formik?.values?.makkah[index]?.hotelStar}
                        onChange={(e) => {
                          formik.setFieldValue(`makkah[${index}].hotelStar`, parseInt(e.target.value));
                        }}
                      >
                        <option value="">Select Star</option>
                        <option value={7}>7 Star </option>
                        <option value={5}>5 Star </option>
                        <option value={4}>4 Star </option>
                        <option value={3}>3 Star </option>
                        <option value={2}>2 Star </option>
                        <option value={1}>1 Star </option>
                      </select>
                      {(formik?.errors?.makkah && formik?.errors?.makkah[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.makkah[index]?.hotelStar

                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                  </div>
                  <div className="grid gap-9 mb-3 md:grid-cols-12 ">
                    <div className="md:col-span-6" >
                      <label for="last_name">Address</label>
                      <input
                        className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                        type="text"
                        name=""
                        onChange={(e) => { formik.setFieldValue(`makkah[${index}].hotelAddress`, e.target.value) }}
                      />
                      {(formik?.errors?.makkah && formik?.errors?.makkah[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.makkah[index]?.hotelAddress
                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                    <div className="md:col-span-3">
                      <label for="last_name">Distance from Kaaba</label>
                      <select id="" name="" className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                        onChange={(e) => {
                          formik.setFieldValue(`makkah[${index}].distanceKaaba`, e.target.value);
                        }}
                      >
                        <option value="">Select Distance</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                      {(formik?.errors?.makkah && formik?.errors?.makkah[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.makkah[index]?.distanceKaaba
                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                    <div className="md:col-span-3">
                      <label for="last_name">Distance from Boundary</label>
                      <select className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                        onChange={(e) => {
                          formik.setFieldValue(`makkah[${index}].distanceBoundry`, e.target.value);
                        }}
                      >
                        <option value="">Select Distance</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                      {(formik?.errors?.makkah && formik?.errors?.makkah[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.makkah[index]?.distanceBoundry
                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                  </div>
                  <div className="grid gap-9 mb-3 md:grid-cols-12 ">
                    <div className="md:col-span-6">
                      <label for="last_name">Hotel Photos</label>
                      <div class="flex items-center justify-left flex-wrap gap-2">
                        <label
                          htmlFor="hotelGallery"
                          className="flex flex-col items-center justify-center w-36 h-20 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
                            {<span className="flex flex-col items-center justify-center">
                              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span class="font-semibold">Browse</span>
                              </p>
                            </span>}
                          </div>
                        </label>
                        {(formik?.errors?.makkah && formik?.errors?.makkah[index]) ? (
                          <p className="text-red-500">
                            {
                              formik?.errors?.makkah[index]?.hotelGallery
                            }
                          </p>
                        ) : <></>
                        }
                        <input id="hotelGallery" type="file" class="invisible" multiple
                          onChange={(event) => handleMakkahCloudImages(event, index)}
                          name="hotelGallery"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <label for="last_name">Date From</label>
                      <div class="relative max-w-sm">
                        <input type="date" className="bg-[#EDEDED] h-12 rounded-lg border-hidden" min={moment(new Date()).format("YYYY-MM-DD")}
                          onChange={(e) => {
                            formik.setFieldValue(`makkah[${index}].fromDate`, e.target.value);
                          }}
                          value={formik.values.makkah[index].fromDate}
                        />
                      </div>
                      {(formik?.errors?.makkah && formik?.errors?.makkah[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.makkah[index]?.fromDate
                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                    <div className="md:col-span-3">
                      <label>Date To</label>
                      <div class="relative max-w-sm">
                        <input type="date" className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                          min={formik.values.makkah[index].fromDate}
                          value={formik.values.makkah[index].toDate}
                          onChange={(e) => {
                            formik.setFieldValue(`makkah[${index}].toDate`, e.target.value);
                          }}
                        />
                      </div>
                      {(formik?.errors?.makkah && formik?.errors?.makkah[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.makkah[index]?.toDate
                          }
                        </p>
                      ) : <></>
                      }
                    </div>

                  </div>
                  <div className="flex">
                    <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
                  </div>
                  <div className="grid gap-9 mb-3 md:grid-cols-12 ">
                    <div className="md:col-span-3">
                      <label for="last_name"> Room Type</label>
                      <select className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                        onChange={(e) => {
                          formik.setFieldValue(`makkah[${index}].roomType`, e.target.value);
                        }}
                      >
                        <option value="">Select Room Type</option>
                        {masterData?.ROOM_TYPE?.map((type, index) => {
                          return (
                            <option value={type._id} key={index}>{type.name}</option>
                          )
                        })}
                      </select>
                      {(formik?.errors?.makkah && formik?.errors?.makkah[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.makkah[index]?.roomType

                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                    <div className="md:col-span-3">
                      <label for="last_name">Bed Count</label>
                      <select className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                        onChange={(e) => {
                          formik.setFieldValue(`makkah[${index}].bedCount`, parseInt(e.target.value));
                        }}
                      >
                        <option value={0}>Select Bed Count</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                      {(formik?.errors?.makkah && formik?.errors?.makkah[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.makkah[index]?.bedCount
                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                    <div className="md:col-span-6">
                      <label for="last_name">Amenities</label>
                      <div className="flex flex-col">
                        <div className="flex pt-2">
                          {masterData?.AMENITIES?.map((item, index2) => {
                            return (
                              <div className="flex items-center mr-8" key={index2}>
                                <input
                                  type="checkbox"
                                  name={`makkah[${index}].amenities[${index2}]`}
                                  className="bg-[#EDEDED]"
                                  value={item._id}
                                  onClick={(e) => {
                                    const { value, checked } = e.target;
                                    const currentAmenities = formik.values.makkah[index].amenities;
                                    let updatedAmenities;
                                    if (checked) {
                                      updatedAmenities = [...currentAmenities, value];
                                    } else {
                                      updatedAmenities = currentAmenities.filter(item => item !== value);
                                    }
                                    formik.setFieldValue(`makkah[${index}].amenities`, updatedAmenities);
                                  }}
                                />
                                <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                                  {item.name}
                                </label>
                              </div>
                            )
                          })}
                        </div>
                        <div>
                          {(formik?.errors?.makkah && formik?.errors?.makkah[index]) ? (
                            <p className="text-red-500">
                              {
                                formik?.errors?.makkah[index]?.amenities
                              }
                            </p>
                          ) : <></>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-9 mb-3 md:grid-cols-12 ">
                    <div className="md:col-span-12">
                      <label for="last_name">Room Photos</label>
                      <div class="flex items-center justify-left flex-wrap gap-2">
                        <label
                          htmlFor="roomGallery"
                          className="flex flex-col items-center justify-center w-36 h-20 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
                            {<span className="flex flex-col items-center justify-center">
                              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span class="font-semibold">Browse</span>
                              </p>
                            </span>}
                          </div>
                        </label>
                        {(formik?.errors?.makkah && formik?.errors?.makkah[index]) ? (
                          <p className="text-red-500">
                            {
                              formik?.errors?.makkah[index]?.roomGallery
                            }
                          </p>
                        ) : <></>
                        }
                        <input id="roomGallery" type="file" class="invisible" multiple
                          onChange={(event) => handleMakkahCloudImages(event, index)}
                          name="roomGallery"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
                  </div>
                  <label>Food</label>
                  <div className="grid gap-9 mb-3 md:grid-cols-12">
                    <div className="md:col-span-10 flex justify-start items-center  pt-2" >
                      <div className="md:col-span-2">
                        <div class="flex  items-center	 mr-4">
                          <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]"
                            onChange={(e) => {
                              formik.setFieldValue(`makkah[${index}].food.breakfast`, e.target.checked);
                            }}
                          />
                          <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                            Breakfast
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div class="flex items-center mr-4">
                          <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]"
                            onChange={(e) => {
                              formik.setFieldValue(`makkah[${index}].food.lunch`, e.target.checked);
                            }}
                          />
                          <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                            Lunch
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div class="flex items-center mr-4">
                          <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]"
                            onChange={(e) => {
                              formik.setFieldValue(`makkah[${index}].food.dinner`, e.target.checked);
                            }}
                          />
                          <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                            Dinner
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div class="flex items-center mr-4">
                          <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]"
                            onChange={(e) => {
                              formik.setFieldValue(`makkah[${index}].food.buffet`, e.target.checked);
                            }}
                          />
                          <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                            Buffet
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div class="flex items-center mr-4">
                          <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]"
                            onChange={(e) => {
                              formik.setFieldValue(`makkah[${index}].food.alaCarte`, e.target.checked);
                            }}
                          />
                          <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                            Ala carte
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {(formik?.errors?.makkah && formik?.errors?.makkah[index]) ? (
                    <p className="text-red-500">
                      {
                        formik?.errors?.makkah[index]?.food
                      }
                    </p>
                  ) : <></>
                  }
                  <div className="flex">
                    <hr class="h-1 my-4 bg-black border-1 w-full dark:bg-black-700" />
                  </div>
                </div>
              )
            })}

            <div class="flex justify-center">
              <button
                type="button"
                className="flex item-center bg-gray-300 rounded-lg px-2"
                style={{ border: 'none' }}
                onClick={() => addMakkahSection()}
              >
                <span className="text-3xl font-bold m-6">+</span>
              </button>
            </div>
            <div className="font-bold text-3xl mb-6">
              <h2>Accommodation in Madeena</h2>
            </div>
            {formik?.values?.madeena?.map((section, index) => {
              return (
                <div key={index}>
                  <div className="grid gap-9 mb-3 md:grid-cols-12">
                    <div class="md:col-span-9">
                      <label for="last_name"> Hotel Name</label>
                      <input
                        class="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                        type="text"
                        name=""
                        onChange={(e) => { formik.setFieldValue(`madeena[${index}].hotelName`, e.target.value) }}
                      />
                      {(formik?.errors?.madeena && formik?.errors?.madeena[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.madeena[index]?.hotelName
                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                    <div class="md:col-span-3">
                      <label for="last_name">Acc Class</label>
                      <select
                        id=""
                        name=""
                        className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                        placeholder="Select Star"
                        value={formik?.values?.madeena[index]?.hotelStar}
                        onChange={(e) => {
                          formik.setFieldValue(`madeena[${index}].hotelStar`, parseInt(e.target.value));
                        }}
                      >
                        <option value="">Select Star</option>
                        <option value={7}>7 Star </option>
                        <option value={5}>5 Star </option>
                        <option value={4}>4 Star </option>
                        <option value={3}>3 Star </option>
                        <option value={2}>2 Star </option>
                        <option value={1}>1 Star </option>
                      </select>
                      {(formik?.errors?.madeena && formik?.errors?.madeena[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.madeena[index]?.hotelStar

                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                  </div>
                  <div className="grid gap-9 mb-3 md:grid-cols-12 ">
                    <div className="md:col-span-6" >
                      <label for="last_name">Address</label>
                      <input
                        className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                        type="text"
                        name=""
                        onChange={(e) => { formik.setFieldValue(`madeena[${index}].hotelAddress`, e.target.value) }}
                      />
                      {(formik?.errors?.madeena && formik?.errors?.madeena[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.madeena[index]?.hotelAddress
                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                    <div className="md:col-span-3">
                      <label for="last_name">Distance from Kaaba</label>
                      <select id="" name="" className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                        onChange={(e) => {
                          formik.setFieldValue(`madeena[${index}].distanceProphetTomb`, e.target.value);
                        }}
                      >
                        <option value="">Select Distance</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                      {(formik?.errors?.madeena && formik?.errors?.madeena[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.madeena[index]?.distanceProphetTomb
                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                    <div className="md:col-span-3">
                      <label for="last_name">Distance from Boundary</label>
                      <select className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                        onChange={(e) => {
                          formik.setFieldValue(`madeena[${index}].distanceBoundry`, e.target.value);
                        }}
                      >
                        <option value="">Select Distance</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                      {(formik?.errors?.madeena && formik?.errors?.madeena[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.madeena[index]?.distanceBoundry
                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                  </div>
                  <div className="grid gap-9 mb-3 md:grid-cols-12 ">
                    <div className="md:col-span-6">
                      <label for="last_name">Hotel Photos</label>
                      <div class="flex items-center justify-left flex-wrap gap-2">
                        <label
                          htmlFor="MadeenaHotelGallery"
                          className="flex flex-col items-center justify-center w-36 h-20 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
                            {<span className="flex flex-col items-center justify-center">
                              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span class="font-semibold">Browse</span>
                              </p>
                            </span>}
                          </div>
                        </label>
                        {(formik?.errors?.madeena && formik?.errors?.madeena[index]) ? (
                          <p className="text-red-500">
                            {
                              formik?.errors?.madeena[index]?.hotelGallery
                            }
                          </p>
                        ) : <></>
                        }
                        <input id="MadeenaHotelGallery" type="file" class="invisible" multiple
                          onChange={(event) => {handleMadeenaCloudImages(event, index)}}
                          name="hotelGallery"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <label for="last_name">Date From</label>
                      <div class="relative max-w-sm">
                        <input type="date" className="bg-[#EDEDED] h-12 rounded-lg border-hidden" min={moment(new Date()).format("YYYY-MM-DD")}
                          onChange={(e) => {
                            formik.setFieldValue(`madeena[${index}].fromDate`, e.target.value);
                          }}
                          value={formik.values.madeena[index].fromDate}
                        />
                      </div>
                      {(formik?.errors?.madeena && formik?.errors?.madeena[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.madeena[index]?.fromDate
                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                    <div className="md:col-span-3">
                      <label>Date To</label>
                      <div class="relative max-w-sm">
                        <input type="date" className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                          min={formik.values.madeena[index].fromDate}
                          value={formik.values.madeena[index].toDate}
                          onChange={(e) => {
                            formik.setFieldValue(`madeena[${index}].toDate`, e.target.value);
                          }}
                        />
                      </div>
                      {(formik?.errors?.madeena && formik?.errors?.madeena[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.madeena[index]?.toDate
                          }
                        </p>
                      ) : <></>
                      }
                    </div>

                  </div>
                  <div className="flex">
                    <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
                  </div>
                  <div className="grid gap-9 mb-3 md:grid-cols-12 ">
                    <div className="md:col-span-3">
                      <label for="last_name"> Room Type</label>
                      <select className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                        onChange={(e) => {
                          formik.setFieldValue(`madeena[${index}].roomType`, e.target.value);
                        }}
                      >
                        <option value="">Select Room Type</option>
                        {masterData?.ROOM_TYPE?.map((type, index) => {
                          return (
                            <option value={type._id} key={index}>{type.name}</option>
                          )
                        })}
                      </select>
                      {(formik?.errors?.madeena && formik?.errors?.madeena[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.madeena[index]?.roomType

                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                    <div className="md:col-span-3">
                      <label for="last_name">Bed Count</label>
                      <select className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                        onChange={(e) => {
                          formik.setFieldValue(`madeena[${index}].bedCount`, parseInt(e.target.value));
                        }}
                      >
                        <option value={0}>Select Bed Count</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                      {(formik?.errors?.madeena && formik?.errors?.madeena[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.madeena[index]?.bedCount
                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                    <div className="md:col-span-6">
                      <label for="last_name">Amenities</label>
                      <div className="flex flex-col">
                        <div className="flex pt-2">
                          {masterData?.AMENITIES?.map((item, index2) => {
                            return (
                              <div className="flex items-center mr-8" key={index2}>
                                <input
                                  type="checkbox"
                                  name={`madeena[${index}].amenities[${index2}]`}
                                  className="bg-[#EDEDED]"
                                  value={item._id}
                                  onClick={(e) => {
                                    const { value, checked } = e.target;
                                    const currentAmenities = formik.values.madeena[index].amenities;
                                    let updatedAmenities;
                                    if (checked) {
                                      updatedAmenities = [...currentAmenities, value];
                                    } else {
                                      updatedAmenities = currentAmenities.filter(item => item !== value);
                                    }
                                    formik.setFieldValue(`madeena[${index}].amenities`, updatedAmenities);
                                  }}
                                />
                                <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                                  {item.name}
                                </label>
                              </div>
                            )
                          })}
                        </div>
                        <div>
                          {(formik?.errors?.madeena && formik?.errors?.madeena[index]) ? (
                            <p className="text-red-500">
                              {
                                formik?.errors?.madeena[index]?.amenities
                              }
                            </p>
                          ) : <></>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-9 mb-3 md:grid-cols-12 ">
                    <div className="md:col-span-12">
                      <label for="last_name">Room Photos</label>
                      <div class="flex items-center justify-left flex-wrap gap-2">
                        <label
                          htmlFor="MadeenaRoomGallery"
                          className="flex flex-col items-center justify-center w-36 h-20 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
                            {<span className="flex flex-col items-center justify-center">
                              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span class="font-semibold">Browse</span>
                              </p>
                            </span>}
                          </div>
                        </label>
                        {(formik?.errors?.madeena && formik?.errors?.madeena[index]) ? (
                          <p className="text-red-500">
                            {
                              formik?.errors?.madeena[index]?.roomGallery
                            }
                          </p>
                        ) : <></>
                        }
                        <input id="MadeenaRoomGallery" type="file" class="invisible" multiple
                          onChange={(event) => handleMadeenaCloudImages(event,index)}
                          name="roomGallery"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
                  </div>
                  <label>Food</label>
                  <div className="grid gap-9 mb-3 md:grid-cols-12">
                    <div className="md:col-span-10 flex justify-start items-center  pt-2" >
                      <div className="md:col-span-2">
                        <div class="flex  items-center	 mr-4">
                          <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]"
                            onChange={(e) => {
                              formik.setFieldValue(`madeena[${index}].food.breakfast`, e.target.checked);
                            }}
                          />
                          <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                            Breakfast
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div class="flex items-center mr-4">
                          <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]"
                            onChange={(e) => {
                              formik.setFieldValue(`madeena[${index}].food.lunch`, e.target.checked);
                            }}
                          />
                          <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                            Lunch
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div class="flex items-center mr-4">
                          <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]"
                            onChange={(e) => {
                              formik.setFieldValue(`madeena[${index}].food.dinner`, e.target.checked);
                            }}
                          />
                          <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                            Dinner
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div class="flex items-center mr-4">
                          <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]"
                            onChange={(e) => {
                              formik.setFieldValue(`madeena[${index}].food.buffet`, e.target.checked);
                            }}
                          />
                          <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                            Buffet
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div class="flex items-center mr-4">
                          <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]"
                            onChange={(e) => {
                              formik.setFieldValue(`madeena[${index}].food.alaCarte`, e.target.checked);
                            }}
                          />
                          <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                            Ala carte
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {(formik?.errors?.madeena && formik?.errors?.madeena[index]) ? (
                    <p className="text-red-500">
                      {
                        formik?.errors?.madeena[index]?.food
                      }
                    </p>
                  ) : <></>
                  }
                  <div className="flex">
                    <hr class="h-1 my-4 bg-black border-1 w-full dark:bg-black-700" />
                  </div>
                </div>
              )
            })}
            <div class="flex justify-center">
              <button
                type="button"
                className="flex item-center bg-gray-300 rounded-lg px-2"
                style={{ border: 'none' }}
                onClick={() => addMadeenaSection()}
              >
                <span className="text-3xl font-bold m-6">+</span>
              </button>
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
                <button type="submit" class="btn-light">
                  Save
                </button>
                <button
                  type="button"
                  class="btn-green"
                  onClick={AccommodationId ? () => router.push("/admin/create-package/local-transport") : () =>         Swal.fire({
                    icon: "warning",
                    title: "Please fill accomondation details",
                    showConfirmButton: true,
                    timer: 3000
                  })}
                  // onClick={() => router.push("/admin/create-package/local-transport")}
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
