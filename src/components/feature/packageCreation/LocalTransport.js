import { Select } from "antd";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { VscArrowBoth } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { setLocalTransport } from "src/redux/slices/user";
import { useMutation } from "react-query";
import fetcher from "src/dataProvider";
import Swal from "sweetalert2";

const LocalTransport = () => {

  const [masterData, setMasterData] = useState({})

  const SaveId = useSelector(state => state?.user?.basic_Details?.basic_Detail?._id);
  const router = useRouter();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { localItinerary: [{ fromLocation: '', toLocation: '', travelBy: '' }] },
    validationSchema: Yup.object().shape({
      localItinerary: Yup.array().of(
        Yup.object().shape({
          fromLocation: Yup.string().required('From location is required'),
          toLocation: Yup.string().required('To location is required'),
          travelBy: Yup.string().required('Travel by is required'),
        })
      )
    }),
    onSubmit: (values, { setSubmitting }) => {
      console.log(values, "KKKKKK")
      createPackage(values);
      setSubmitting(false);
    }
  })

  const { mutate: createPackage } = useMutation(
    (data) => fetcher.post(`/v1/package/${SaveId}/local-transport`, data, "raw"),
    {
      onSuccess: (res) => {
        Swal.fire({
          icon: "success",
          title: "Local Transport Details Saved",
          showConfirmButton: false,
          timer: 1500
        });
        dispatch(setLocalTransport({ localTransport: res.data }));
        router.push(`/admin/create-package/tour-itinerary`, undefined, {
          shallow: true,
        });
      },
      onError: ({ response }) => {
        console.log(response.data.message);
        alert(response.data.message);
      },
    }
  );

  const addSection = () => {
    formik.setValues({ localItinerary: [...formik.values.localItinerary, { fromLocation: '', toLocation: '', travelBy: '' }] })
  };

  const { mutate: getMasterData } = useMutation(
    () => fetcher.get(`v1/master-data/type?type=place,TRAVEL_BY`),
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

  return (
    <>
      <div className="p-5">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <form className="form-ui" onSubmit={formik.handleSubmit}>
            <div className="container">
              <h2 className="text-2xl pb-4"><b>Local Transport</b></h2>
              {formik.values.localItinerary.map((section, index) => (
                <>
                  <div className="grid grid-cols-2 gap-4" key={index}>
                    <div className="flex items-center	py-4 w-full">
                      <div>
                        <Select id=""
                          name="fromLocation"
                          className="w-52 h-11"
                          placeholder="Select Origin"
                          onChange={(e) => {
                            formik.setFieldValue(`localItinerary[${index}].fromLocation`, e);
                          }}>
                          {masterData?.PLACE?.map((place, index) => {
                            return (
                              <option value={place._id} key={index}>{place.name}</option>
                            )
                          })}
                        </Select>
                        {(formik?.errors?.localItinerary && formik?.errors?.localItinerary[index]) ? (
                          <p className="text-red-500">
                            {
                              formik?.errors?.localItinerary[index]?.fromLocation
                            }
                          </p>
                        ) : <></>
                        }
                      </div>
                      <VscArrowBoth className="text-8xl px-2	" />
                      <div>
                        <Select id=""
                          name="toLocation"
                          placeholder="Select Destination"
                          className="w-52 h-11"
                          onChange={(e) => {
                            formik.setFieldValue(`localItinerary[${index}].toLocation`, e);
                          }}>
                          {masterData?.PLACE?.map((place, index) => {
                            return (
                              <option value={place._id} key={index}>{place.name}</option>
                            )
                          })}
                        </Select>
                        {(formik?.errors?.localItinerary && formik?.errors?.localItinerary[index]) ? (
                          <p className="text-red-500">
                            {
                              formik?.errors?.localItinerary[index]?.toLocation
                            }
                          </p>
                        ) : <></>
                        }
                      </div>
                    </div>
                    <div >
                      <h2 className="text-xl pb-4">Travel By</h2>
                      <div className="md:col-span-4 flex ">
                        {masterData?.TRAVEL_BY?.map((mode, index2) => {
                          return (
                            <div className="flex items-center mr-8" key={index2}>
                              <input
                                id="inline-radio"
                                type="radio"
                                value={mode._id}
                                name={`travelBy[${index}]`}
                                className="bg-[#EDEDED]"
                                onClick={(e) => {
                                  formik.setFieldValue(`localItinerary[${index}].travelBy`, e.target.value);
                                }}
                              />
                              <label className="mb0 pl-2" style={{ fontSize: '20px' }}>
                                {mode.name}
                              </label>
                            </div>
                          )
                        })}
                      </div>
                      {(formik?.errors?.localItinerary && formik?.errors?.localItinerary[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.localItinerary[index]?.travelBy
                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                  </div>
                  <div className="flex">
                    <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
                  </div>
                </>
              ))
              }
            </div>
            <div>
              <button
                type="button"
                className="flex item-center bg-white rounded-lg px-2"
                style={{ border: '1px solid grey' }}
                onClick={() => addSection()}
              >
                <span className="text-2xl font-bold m-4">+</span>
              </button>
            </div>
            <div className="flex">
              <hr className="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>
            <div className="w-full flex pt-4">
              <div className="w-1/2">
                <button
                  type="button"
                  class="btn-bark"
                  onClick={() => router.back()}>
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
                  onClick={() => router.push("/admin/create-package/gallery")}>
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

export default LocalTransport;