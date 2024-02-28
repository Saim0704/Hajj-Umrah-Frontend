import React from "react";
import styles from "../../../../styles/Sidebar.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";


const Accommodation = () => {

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
          amenities: {
            wifi: null,
            laundry: null,
            gym: null,
            pool: null
          },
          food: {
            breakfast: null,
            lunch: null,
            dinner: null,
            buffet: null,
            alaCarte: null
          },
          hotelGallery: [
            {
              url: ""
            }
          ],
          roomGallery: [
            {
              url: ""
            }
          ]
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
          amenities: {
            wifi: null,
            laundry: null,
            gym: null,
            pool: null
          },
          food: {
            breakfast: null,
            lunch: null,
            dinner: null,
            buffet: null,
            alaCarte: null
          },
          hotelGallery: [
            {
              url: ""
            }
          ],
          roomGallery: [
            {
              url: ""
            }
          ]
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
          amenities: Yup.object().shape({
            wifi: Yup.boolean(),
            laundry: Yup.boolean(),
            gym: Yup.boolean(),
            pool: Yup.boolean()
          }).required(),
          food: Yup.object().shape({
            breakfast: Yup.boolean(),
            lunch: Yup.boolean(),
            dinner: Yup.boolean(),
            buffet: Yup.boolean(),
            alaCarte: Yup.boolean()
          }).required(),
          hotelGallery: Yup.array().of(
            Yup.object().shape({
              url: Yup.string().required('Gallery URL is required')
            })
          ).required(),
          roomGallery: Yup.array().of(
            Yup.object().shape({
              url: Yup.string().required('Room Gallery URL is required')
            })
          ).required()
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
          amenities: Yup.object().shape({
            wifi: Yup.boolean(),
            laundry: Yup.boolean(),
            gym: Yup.boolean(),
            pool: Yup.boolean()
          }).required(),
          food: Yup.object().shape({
            breakfast: Yup.boolean(),
            lunch: Yup.boolean(),
            dinner: Yup.boolean(),
            buffet: Yup.boolean(),
            alaCarte: Yup.boolean()
          }).required(),
          hotelGallery: Yup.array().of(
            Yup.object().shape({
              url: Yup.string().required('Gallery URL is required')
            })
          ).required(),
          roomGallery: Yup.array().of(
            Yup.object().shape({
              url: Yup.string().required('Room Gallery URL is required')
            })
          ).required()
        })
      )
    }),

    onSubmit: (values, { setSubmitting }) => {
      const flightDetails = values.flightItinerary.map(value => ({
        ...value,
        luggageWeight: parseInt(value.luggageWeight)
      }))
      const newDetails = {
        "ticketType": "ONE_WAY",
        flightItinerary: flightDetails
      }
      createPackage(newDetails);
      setSubmitting(false);
    }
  })

  console.log(formik.errors,"ERRORS")
  console.log(formik.values,"VALUES")


  return (
    <>
      <div className="p-5">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <form className="form-ui" onSubmit={formik.handleSubmit}>
            <div className="font-bold text-3xl mb-6">
              <h2>Accommodation in Makkah</h2>
            </div>
            <div className="grid gap-9 mb-3 md:grid-cols-12">
              <div class="md:col-span-9">
                <label for="last_name"> Hotel Name</label>
                <input
                  class="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                  type="text"
                  name="" />
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
                   />
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
                  <input type="date" className="bg-[#EDEDED] h-12 rounded-lg border-hidden" min={moment(new Date()).format("YYYY-MM-DD")} />
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
                    <input type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                      Wifi
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                      Laundry
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                      Gym
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
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
              <div className="md:col-span-10 flex justify-start items-center  pt-2" >
                <div className="md:col-span-2">
                  <div class="flex  items-center	 mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                      Breakfast
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div class="flex items-center mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                      Lunch
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div class="flex items-center mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
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

                   />
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
                   />
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
                    <input type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                      Wifi
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                      Laundry
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                      Gym
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
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
              <div className="md:col-span-10 flex justify-start items-center  pt-2" >
                <div className="md:col-span-2">
                  <div class="flex  items-center	 mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                      Breakfast
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div class="flex items-center mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
                      Lunch
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div class="flex items-center mr-4">
                    <input id="inline-2-checkbox" type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label className="mb0 pl-2" style={{ fontSize: '14px' }}>
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
                <button type="submit" class="btn-light">
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
