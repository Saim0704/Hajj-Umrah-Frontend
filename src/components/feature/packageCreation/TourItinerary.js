import { useFormik } from "formik";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import TextEditor from "src/components/common/TextEditor";
import fetcher from "src/dataProvider";
import { setTourItinerary } from "src/redux/actions";
import Swal from "sweetalert2";
import * as Yup from "yup";


const TourItinerary = () => {

  const [masterData, setMasterData] = useState({})
  const SaveId = useSelector(state => state?.user?.basic_Details?.basic_Detail?._id);
  const TourItineraryId = useSelector(state => state?.user?.tourItinerary?.tourItinerary?._id);
 
  const router = useRouter();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      additionalItem: [],
      nearbySightseeing: [
        {
          destination: "",
          date: "",
          localTransport: "",
          photos: [],
          description: ""
        }
      ]
    },
    validationSchema: Yup.object().shape({
      additionalItem: Yup.array().of(
        Yup.string()
      ).min(1, 'At least one Additonal item must be selected'),
      nearbySightseeing: Yup.array().of(
        Yup.object().shape({
          destination: Yup.string().required('Destination is required'),
          date: Yup.string().required('Date is required'),
          localTransport: Yup.string().required('Local Transport is required'),
          photos: Yup.array(),
          description: Yup.string()
        })
      )
    }),

    onSubmit: (values, { setSubmitting }) => {
      createPackage(values);
      setSubmitting(false);
    }
  })

  const { mutate: createPackage } = useMutation(
    (data) => fetcher.post(`/v1/package/${SaveId}/additional-item`, data, "raw"),
    {
      onSuccess: (res) => {
        Swal.fire({
          icon: "success",
          title: "Tour Itinerary Details Saved",
          showConfirmButton: false,
          timer: 1500
        });
        dispatch(setTourItinerary({ tourItinerary: res.data }));
        router.push(`/admin/create-package/preview`, undefined, {
          shallow: true,
        });
      },
      onError: ({ response }) => {
        console.log(response.data.message);
        alert(response.data.message);
      },
    }
  );

  const addSightSeeingSection = () => {
    formik.setValues((values) => ({
      ...values,
      nearbySightseeing: [...values.nearbySightseeing, {
        destination: "",
        date: "",
        localTransport: "",
        photos: [],
        description: ""
      }]
    }))
  };



  const { mutate: getMasterData } = useMutation(
    () => fetcher.get(`v1/master-data/type?type=place,TRAVEL_BY,ADDITIONAL_ITEM,SIGHTSEEING`),
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


  console.log(masterData, "MASTER")
  console.log(formik.errors, "Errors")
  console.log(formik.values, "Values")

  useEffect(() => {
    if (!SaveId) {
      Swal.fire({
        title : "Please Fill accommodation Details!",
        icon:"warning"
      });
      router.push('/admin/create-package/local-transport');
    }
  }, [SaveId, router]);
  return (
    <>
      <div className="p-5">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <form className="form-ui" onSubmit={formik.handleSubmit}>
            <div className="container">
              <h2 className="text-2xl pb-4"><b>Additional Items</b></h2>
              <div className="grid gap-2 md:grid-cols-7">
                {masterData?.ADDITIONAL_ITEM?.map((item, index) => {
                  return (
                    <div className="flex items-center mr-8" key={index}>
                      <input
                        type="checkbox"
                        className="bg-[#EDEDED]"
                        value={item._id}
                        onClick={(e) => {
                          const { value, checked } = e.target;
                          const currentAdditionalItems = formik.values.additionalItem;
                          let updatedAdditionalItems;
                          if (checked) {
                            updatedAdditionalItems = [...currentAdditionalItems, value];
                          } else {
                            updatedAdditionalItems = currentAdditionalItems.filter(item => item !== value);
                          }
                          formik.setFieldValue(`additionalItem`, updatedAdditionalItems);
                          // formik.setFieldValue(`additionalItem`, [...formik.values.additionalItem, e.target.value]);
                        }}
                      />
                      <label className="mb0 pl-2" style={{ fontSize: '18px' }}>
                        {item.name}
                      </label>
                    </div>
                  )
                })}
              </div>
              {formik?.errors?.additionalItem &&
                <p className="text-red-500">
                  {
                    formik?.errors?.additionalItem
                  }
                </p>
              }
            </div>
            <div className="flex">
              <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>
            <h2 className="text-2xl pb-4"><b>Nearby Sightseeing (Ziarah)</b></h2>
            {formik?.values?.nearbySightseeing?.map((section, index) => {
              return (
                <div key={index}>
                  <div className="grid gap-8 md:grid-cols-3">
                    <div>
                      <label for="last_name">Select Near by Destination</label>
                      <select id="" name="" class="border border-gray-300 bg-gray-200"
                        onChange={(e) => {
                          formik.setFieldValue(`nearbySightseeing[${index}].destination`, e.target.value);
                        }}
                      >
                        <option value="">Select Destination</option>
                        {masterData?.SIGHTSEEING?.map((place, index) => {
                          return (
                            <option value={place._id} key={index}>{place.name}</option>
                          )
                        })}
                      </select>
                      {(formik?.errors?.nearbySightseeing && formik?.errors?.nearbySightseeing[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.nearbySightseeing[index]?.destination

                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                    <div>
                      <label for="last_name">Select Date</label>
                      <div class="relative max-w-sm">
                        {/* <input type="date" placeholder="Select date" className="bg-gray-200" /> */}
                        <input type="date" className="bg-gray-200" min={moment(new Date()).format("YYYY-MM-DD")}
                          onChange={(e) => {
                            formik.setFieldValue(`nearbySightseeing[${index}].date`, e.target.value);
                          }}
                          value={formik.values.nearbySightseeing[index].date}
                        />
                      </div>
                      {(formik?.errors?.nearbySightseeing && formik?.errors?.nearbySightseeing[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.nearbySightseeing[index]?.date
                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                    <div>
                      <label for="last_name">Local Transport</label>
                      <div class="flex">
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
                                  formik.setFieldValue(`nearbySightseeing[${index}].localTransport`, e.target.value);
                                }}
                              />
                              <label className="mb0 pl-2" style={{ fontSize: '18px' }}>
                                {mode.name}
                              </label>
                            </div>
                          )
                        })}
                      </div>
                      {(formik?.errors?.nearbySightseeing && formik?.errors?.nearbySightseeing[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.nearbySightseeing[index]?.localTransport
                          }
                        </p>
                      ) : <></>
                      }
                    </div>
                  </div>
                  <label className="mt-5" for="last_name">Upload Photo</label>
                  <div className="grid gap-4 md:grid-cols-6">
                    <div>
                      <div class="flex justify-center">
                        <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                          <div class=" h-20 text-center">
                            <p class="text-sm text-gray-800 px-5 py-7 dark:text-gray-400">Browser</p>
                            <input id="dropzone-file" type="file" class="invisible" />
                          </div>
                        </label>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-center">
                        <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                          <div class=" h-20 text-center">
                            <p class="text-sm text-gray-800 px-5 py-7 dark:text-gray-400">Browser</p>
                            <input id="dropzone-file" type="file" class="invisible" />
                          </div>
                        </label>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-center">
                        <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                          <div class=" h-20 text-center">
                            <p class="text-sm text-gray-800 px-5 py-7 dark:text-gray-400">Browser</p>
                            <input id="dropzone-file" type="file" class="invisible" />
                          </div>
                        </label>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-center">
                        <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                          <div class=" h-20 text-center">
                            <p class="text-sm text-gray-800 px-5 py-7 dark:text-gray-400">Browser</p>
                            <input id="dropzone-file" type="file" class="invisible" />
                          </div>
                        </label>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-center">
                        <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                          <div class=" h-20 text-center">
                            <p class="text-4xl text-gray-800 px-5 py-5 dark:text-gray-400">+</p>
                            <input id="dropzone-file" type="file" class="invisible" />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <label className="mt-5" for="last_name">Description</label>
                  <TextEditor />
                  <div className="flex">
                    <hr class="h-1 my-4 bg-black border-1 w-full dark:bg-black-700" />
                  </div>
                </div>

              )
            })}

            {/* <div>
              <div class="flex justify-center mt-10">
                <label for="dropzone-file" class=" rounded-lg flex items-center" style={{ border: '1px solid gray' }}>
                  <div class="w-20 h-20 text-center">
                    <p class="text-4xl text-gray-800 py-5 dark:text-gray-400">+</p>
                    <input id="dropzone-file" type="file" class="invisible" />
                  </div>
                </label>
              </div>
            </div> */}
            <div class="flex justify-center">
              <button
                type="button"
                className="flex item-center bg-gray-300 rounded-lg px-2"
                style={{ border: 'none' }}
                onClick={() => addSightSeeingSection()}
              >
                <span className="text-3xl font-bold m-6">+</span>
              </button>
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
                <button type="submit" class="btn-light"
                >
                  Save
                </button>
                {/* <button
                  type="button"
                  class="btn-green"
                  onClick={() => router.push("/admin/create-package/gallery")}>
                  Next
                </button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TourItinerary;