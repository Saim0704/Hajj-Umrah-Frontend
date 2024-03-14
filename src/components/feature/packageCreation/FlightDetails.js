import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { dayType, fromCity, noOfDays, toCity, arrivalCity, returnCity } from "src/constants/package";
import fetcher from "src/dataProvider";
import { useMutation } from "react-query";
import { Select, Button, DatePicker, Input } from "antd";
import 'antd/dist/reset.css';
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Router, useRouter } from "next/router";
import { setUserData, setBasic_Details, setFlight_Details } from "src/redux/slices/user";
import Swal from "sweetalert2";
import moment from "moment";

import { ErrorToast } from '../../common/Toater/index'
const FlightDetails = () => {

  const [airportOptions, setAirportOptions] = useState([]);
  const [airlinesOptions, setAirlinesOptions] = useState([]);
  const SaveId = useSelector(state => state?.user?.basic_Details?.basic_Detail?._id);
  const SaveGalleryId = useSelector(state => state?.user?.gallery?.gallery?._id);
  const FlightId = useSelector(state => state?.user?.flight_Details?.flight_Details?._id);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!SaveGalleryId) {
      Swal.fire({
        title: "Please Fill Gallery Details!",
        icon: "warning"
      });
      router.push('/admin/create-package/gallery');
    }
  }, [SaveId, router]);
  const formik = useFormik({
    initialValues: {
      flightItinerary: [
        {
          airlineCarrier: {
            name: "",
            code: "",
            logo: ""
          },
          ticketClass: "",
          fromCity: "",
          toCity: "",
          date: "",
          luggageWeight: 0,
          isDirect: null
        },
        {
          airlineCarrier: {
            name: "",
            code: "",
            logo: ""
          },
          ticketClass: "",
          fromCity: "",
          toCity: "",
          date: "",
          luggageWeight: 0,
          isDirect: null
        }
      ]
    },
    validationSchema: Yup.object().shape({
      flightItinerary: Yup.array().of(
        Yup.object().shape({
          airlineCarrier: Yup.object().shape({
            name: Yup.string().required('Airline name is required'),
            code: Yup.string().required('Airline code is required'),
            logo: Yup.string().url('Invalid URL for airline logo').required('Airline logo is required'),
          }),
          ticketClass: Yup.string().required('Ticket class is required'),
          fromCity: Yup.string().required('Departure city is required'),
          toCity: Yup.string().required('Destination city is required'),
          date: Yup.date().required('Date is required'),
          luggageWeight: Yup.number().required('Luggage weight is required').positive('Luggage weight must be positive'),
          isDirect: Yup.boolean().required('Direct flight information is required'),
        })
      ),
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

  const { mutate: createPackage } = useMutation(
    (data) => fetcher.post(`/v1/package/${SaveId}/flight-details`, data, "raw"),
    {
      onSuccess: (res) => {
        Swal.fire({
          icon: "success",
          title: "Flight Details Saved",
          showConfirmButton: false,
          timer: 1500
        });
        dispatch(setFlight_Details({ flight_Details: res.data }));
        router.push(`/admin/create-package/accommodation`, undefined, {
          shallow: true,
        });
      },
      onError: ({ response }) => {
        console.log(response.data.message);
        alert(response.data.message);
      },
    }
  );

  const { mutate: getAirports } = useMutation(
    () => fetcher.get(`v1/common/airports`),
    {
      onSuccess: (res) => {
        setAirportOptions(res.data)
      },
      onError: ({ response }) => {
        console.log(response.data.message);
        alert(response.data.message);
      },
    }
  );

  const { mutate: getAirlines } = useMutation(
    () => fetcher.get(`v1/common/airlines`),
    {
      onSuccess: (res) => {
        setAirlinesOptions(res.data)
      },
      onError: ({ response }) => {
        console.log(response.data.message);
        alert(response.data.message);
      },
    }
  );

  useEffect(() => {
    getAirports();
    getAirlines();
  }, [])

  const handleDepartureAirline = (e) => {
    const selectedOption = JSON.parse(e);
    formik.setFieldValue(`flightItinerary[0].airlineCarrier`, selectedOption);
  };

  const handleArrivalAirline = (e) => {
    const selectedOption = JSON.parse(e);
    formik.setFieldValue(`flightItinerary[1].airlineCarrier`, selectedOption);
  };

  console.log(formik.values, "VALUES")
  console.log(formik.errors, "ERROR")

  return (
    <>
      <div className="p-5">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <form className="form-ui" onSubmit={formik.handleSubmit}>
            <h1 className="text-2xl font-bold mb-2">Air Ticket</h1>
            <div className="flex bg-[#E7F8F0] p-3 font-bold	mb-3">
              <h1>Departure</h1>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-4 sm:grid-cols-2">
              <div>
                <label htmlFor="last_name">Airline</label>
                <Select
                  placeholder="Select Airline"
                  onChange={(e) => {
                    handleDepartureAirline(e)
                  }}
                  style={{ width: '100%', height: '42px' }}
                  showSearch
                >
                  {airlinesOptions.map((item, index) => (
                    <Select.Option key={index} value={JSON.stringify({ name: item.name, code: item.code, logo: item.logo })} >
                      {
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                          {
                            item.logo ?
                              <Image src={item.logo} height={40} width={40} alt="" />
                              :
                              <></>
                          }
                          <div>{item.name}</div>
                        </div>
                      }
                    </Select.Option>
                  ))}
                </Select>
                {(formik?.errors?.flightItinerary && formik?.errors?.flightItinerary[0]) ? (
                  <span className="text-red-500 mt-2">
                    {formik?.errors?.flightItinerary[0].airlineCarrier?.name}
                  </span>
                ) : <></>
                }
              </div>
              <div>
                <label htmlFor="last_name">Class</label>
                <Select id="" name="flightItinerary.ticketClass" style={{ width: '100%', height: '42px' }} placeholder="Select Class" onChange={(e) => {
                  formik.setFieldValue(`flightItinerary[0].ticketClass`, e);
                }}>
                  <option value="ECONOMY">ECONOMY</option>
                  <option value="PREMIUM_ECONOMY">PREMIUM_ECONOMY</option>
                  <option value="BUSINESS">BUSINESS</option>
                  <option value="FIRST_CLASS">FIRST_CLASS</option>
                </Select>
                {(formik?.errors?.flightItinerary && formik?.errors?.flightItinerary[0]) ? (
                  <span className="text-red-500 mt-2">
                    {formik?.errors?.flightItinerary[0].ticketClass}
                  </span>
                ) : <></>
                }
              </div>
              <div>
                <label htmlFor="last_name">From</label>
                <Select
                  placeholder="Select Airport"
                  onChange={(e) => {
                    formik.setFieldValue(`flightItinerary[0].fromCity`, e);
                  }}
                  style={{ width: '100%', height: '42px' }}
                  showSearch
                >
                  {airportOptions.map((item, index) => (
                    <Select.Option key={index} value={item.code} >
                      {
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                          <div>{item.name}</div>
                        </div>
                      }
                    </Select.Option>
                  ))}
                </Select>
                {(formik?.errors?.flightItinerary && formik?.errors?.flightItinerary[0]) ? (
                  <span className="text-red-500 mt-2">
                    {formik?.errors?.flightItinerary[0].fromCity}
                  </span>
                ) : <></>
                }
              </div>
              <div>
                <label htmlFor="last_name">Date of Flight</label>
                <div class="relative max-w-sm">
                  {/* <DatePicker
                    style={{ width: '100%', height: '42px' }}
                    onChange={(date, dateString) => { formik.setFieldValue(`flightItinerary[0].date`, dateString) }}
                    format="YYYY-MM-DD" min={moment(new Date()).format("YYYY-MM-DD")}
                  /> */}

                  {/* <DatePicker
                    style={{ width: '100%', height: '42px' }}
                    onChange={(date, dateString) => {
                      formik.setFieldValue(`flightItinerary[0].date`, dateString)
                    }}
                    format="YYYY-MM-DD"
                    disabledDate={(current) => current && current < moment().startOf('day')}
                  /> */}
                  <input
                   className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                    type="date"
                    style={{ width: '100%', height: '42px' }}
                    onChange={(e) => {
                      formik.setFieldValue(`flightItinerary[0].date`, e.target.value);
                    }}
                    min={moment().startOf('day').format("YYYY-MM-DD")}
                  />

                  {(formik?.errors?.flightItinerary && formik?.errors?.flightItinerary[0]) ? (
                    <span className="text-red-500 mt-2">
                      {formik?.errors?.flightItinerary[0].date}
                    </span>
                  ) : <></>
                  }
                </div>
              </div>
            </div>
            <div className="grid gap-6 mb-5 md:grid-cols-4 sm:grid-cols-2 pt-2">
              <div>
                <label htmlFor="last_name">To</label>
                <Select
                  placeholder="Select Airport"
                  onChange={(e) => {
                    formik.setFieldValue(`flightItinerary[0].toCity`, e);
                  }}
                  style={{ width: '100%', height: '42px' }}
                  showSearch
                >
                  {airportOptions.map((item, index) => (
                    <Select.Option key={index} value={item.code} >
                      {
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                          <div>{item.name}</div>
                        </div>
                      }
                    </Select.Option>
                  ))}
                </Select>
                {(formik?.errors?.flightItinerary && formik?.errors?.flightItinerary[0]) ? (
                  <span className="text-red-500 mt-2">
                    {formik?.errors?.flightItinerary[0].toCity}
                  </span>
                ) : <></>
                }
              </div>
              <div>
                <label htmlFor="last_name">Weight</label>
                <Input placeholder="In Kgs." onChange={(e) => { formik.setFieldValue(`flightItinerary[0].luggageWeight`, e.target.value) }} />
                {(formik?.errors?.flightItinerary && formik?.errors?.flightItinerary[0]) ? (
                  <span className="text-red-500 mt-2">
                    {formik?.errors?.flightItinerary[0].luggageWeight}
                  </span>
                ) : <></>
                }
              </div>
              <div>
                <div className="flex">
                  <div class="flex items-center mr-5 pt-7">
                    <input
                      id="isDirect"
                      type="radio"
                      value="true"
                      name="isDirect"
                      className="bg-gray-300"
                      onChange={(e) => { formik.setFieldValue(`flightItinerary[0].isDirect`, e.target.value === 'true') }}
                    />
                    <label htmlFor="inline-radio" class="mb0 pl-2">
                      Direct
                    </label>
                  </div>
                  <div class="flex items-center mr-5 pt-7">
                    <input
                      id="isDirect"
                      type="radio"
                      value="false"
                      name="isDirect"
                      className="bg-gray-300"
                      onChange={(e) => { formik.setFieldValue(`flightItinerary[0].isDirect`, e.target.value !== 'false') }}
                    />
                    <label htmlFor="inline-radio" class="mb0 pl-2">
                      Indirect
                    </label>
                  </div>
                </div>
                {(formik?.errors?.flightItinerary && formik?.errors?.flightItinerary[0]) ? (
                  <span className="text-red-500 mt-2">
                    {formik?.errors?.flightItinerary[0].isDirect}
                  </span>
                ) : <></>
                }
              </div>
            </div>
            <div className="flex bg-[#E7F8F0] p-3 font-medium	mb-3">
              <h1>Arrival</h1>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-4 sm:grid-cols-2">
              <div>
                <label htmlFor="last_name">Airline</label>
                <Select
                  placeholder="Select Airline"
                  onChange={(e) => {
                    handleArrivalAirline(e)
                  }}
                  style={{ width: '100%', height: '42px' }}
                  showSearch
                >
                  {airlinesOptions.map((item, index) => (
                    <Select.Option key={index} value={JSON.stringify({ name: item.name, code: item.code, logo: item.logo })} >
                      {
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                          {
                            item.logo ?
                              <Image src={item.logo} height={40} width={40} alt="" />
                              :
                              <></>
                          }
                          <div>{item.name}</div>
                        </div>
                      }
                    </Select.Option>
                  ))}
                </Select>
                {(formik?.errors?.flightItinerary && formik?.errors?.flightItinerary[1]) ? (
                  <span className="text-red-500 mt-2">
                    {formik?.errors?.flightItinerary[1].airlineCarrier?.name}
                  </span>
                ) : <></>
                }
              </div>
              <div>
                <label htmlFor="last_name">Class</label>
                <Select id="" name="flightItinerary.ticketClass" style={{ width: '100%', height: '42px' }} placeholder="Select Class" onChange={(e) => {
                  formik.setFieldValue(`flightItinerary[1].ticketClass`, e);
                }}>
                  <option value="ECONOMY">ECONOMY</option>
                  <option value="PREMIUM_ECONOMY">PREMIUM_ECONOMY</option>
                  <option value="BUSINESS">BUSINESS</option>
                  <option value="FIRST_CLASS">FIRST_CLASS</option>
                </Select>
                {(formik?.errors?.flightItinerary && formik?.errors?.flightItinerary[1]) ? (
                  <span className="text-red-500 mt-2">
                    {formik.errors.flightItinerary[1].ticketClass}
                  </span>
                ) : <></>
                }
              </div>
              <div>
                <label htmlFor="last_name">From</label>
                <Select
                  placeholder="Select Airport"
                  // value={selectedItems}
                  onChange={(e) => {
                    formik.setFieldValue(`flightItinerary[1].fromCity`, e);
                  }}
                  style={{ width: '100%', height: '42px' }}
                  showSearch
                >
                  {airportOptions.map((item, index) => (
                    <Select.Option key={index} value={item.code} >
                      {
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                          <div>{item.name}</div>
                        </div>
                      }
                    </Select.Option>
                  ))}
                </Select>
                {(formik?.errors?.flightItinerary && formik?.errors?.flightItinerary[1]) ? (
                  <span className="text-red-500 mt-2">
                    {formik?.errors?.flightItinerary[1].fromCity}
                  </span>
                ) : <></>
                }
              </div>
              <div>
                <label htmlFor="last_name">Date of Flight</label>
                {/* <DatePicker
                  style={{ width: '100%', height: '42px' }}
                  format="YYYY-MM-DD"
                  onChange={(date, dateString) => { formik.setFieldValue(`flightItinerary[1].date`, dateString) }}
                /> */}
                <input
                  type="date"
                  className="bg-[#EDEDED] h-12 rounded-lg border-hidden"
                  min={formik.values.flightItinerary[1].fromDate || new Date().toISOString().split('T')[0]}
                  value={formik.values.flightItinerary[1].date}
                  onChange={(e) => {
                    formik.setFieldValue(`flightItinerary[1].date`, e.target.value);
                  }}
                />

                {(formik?.errors?.flightItinerary && formik?.errors?.flightItinerary[1]) ? (
                  <span className="text-red-500 mt-2">
                    {formik?.errors?.flightItinerary[1].date}
                  </span>
                ) : <></>
                }
              </div>
            </div>
            <div className="grid gap-6 mb-5 md:grid-cols-4 sm:grid-cols-2 pt-2">
              <div>
                <label htmlFor="last_name">To</label>
                <Select
                  placeholder="Select Airport"
                  // value={selectedItems}
                  onChange={(e) => {
                    formik.setFieldValue(`flightItinerary[1].toCity`, e);
                  }}
                  style={{ width: '100%', height: '42px' }}
                  showSearch
                >
                  {airportOptions.map((item, index) => (
                    <Select.Option key={index} value={item.code} >
                      {
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                          <div>{item.name}</div>
                        </div>
                      }
                    </Select.Option>
                  ))}
                </Select>
                {(formik?.errors?.flightItinerary && formik?.errors?.flightItinerary[1]) ? (
                  <span className="text-red-500 mt-2">
                    {formik?.errors?.flightItinerary[1].toCity}
                  </span>
                ) : <></>
                }
              </div>
              <div>
                <label htmlFor="last_name">Weight</label>
                <Input placeholder="In Kgs." onChange={(e) => { formik.setFieldValue(`flightItinerary[1].luggageWeight`, e.target.value) }} />
                {(formik?.errors?.flightItinerary && formik?.errors?.flightItinerary[1]) ? (
                  <span className="text-red-500 mt-2">
                    {formik?.errors?.flightItinerary[1].luggageWeight}
                  </span>
                ) : <></>
                }
              </div>
              <div>

                <div className="flex">
                  <div class="flex items-center mr-5 pt-7">
                    <input
                      id="isDirect"
                      type="radio"
                      value="true"
                      name="isDirect"
                      className="bg-gray-300"
                      onChange={(e) => { formik.setFieldValue(`flightItinerary[1].isDirect`, e.target.value === 'true') }}
                    />
                    <label htmlFor="inline-radio" class="mb0 pl-2">
                      Direct
                    </label>
                  </div>
                  <div class="flex items-center mr-5 pt-7">
                    <input
                      id="isDirect"
                      type="radio"
                      value="false"
                      name="isDirect"
                      className="bg-gray-300"
                      onChange={(e) => { formik.setFieldValue(`flightItinerary[1].isDirect`, e.target.value !== 'false') }}
                    />
                    <label htmlhtmlFor="inline-radio" class="mb0 pl-2">
                      Indirect
                    </label>
                  </div>
                </div>
                {(formik?.errors?.flightItinerary && formik?.errors?.flightItinerary[1]) ? (
                  <span className="text-red-500 mt-2">
                    {formik?.errors?.flightItinerary[1].isDirect}
                  </span>
                ) : <></>
                }
              </div>
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
                  className="btn-green"
                  onClick={FlightId ? () => router.push("/admin/create-package/accommodation") : () => ErrorToast.fire({
                    title: "Please Fill Flight Details Form then go to next page",
                    icon: "warning"
                  })}
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

export default FlightDetails;
