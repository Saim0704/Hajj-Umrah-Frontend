import { Select } from "antd";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { VscArrowBoth } from "react-icons/vsc";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { setLocalTransport } from "src/redux/slices/user";
import { useMutation } from "react-query";
import fetcher from "src/dataProvider";

const LocalTransport = () => {

  const[masterData, setMasterData] = useState({})

  const SaveId = useSelector(state => state.user.basic_Details.basic_Detail._id);
  const router = useRouter();

  const formik = useFormik({
    initialValues: { localItinerary: [{ fromLocation: '', toLocation: '', bus: false, car: false, metro: false, train: false }] },
    validationSchema: Yup.object().shape({
      localItinerary: Yup.array().of(
        Yup.object().shape({
          fromLocation: Yup.string().required('From location is required'),
          toLocation: Yup.string().required('To location is required'),
          bus: Yup.boolean(),
          car: Yup.boolean(),
          metro: Yup.boolean(),
          train: Yup.boolean(),
        }).test('at-least-one', 'At least one of Bus, Car, Metro, or Train must be selected', function (value) {
          const { bus, car, metro, train } = this.parent; // Access parent object (current array element)
          if (!value.bus && !value.car && !value.metro && !value.train) {
            return this.createError({
              path: `${this.path}.bus`, // Specify the path to the field to highlight in case of error
              message: 'At least one of Bus, Car, Metro, or Train must be selected'
            });
          }
          return true;
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
        alert("Local Transport Updated");
        console.log(res.data, "res.data")
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
    formik.setValues({ localItinerary: [...formik.values.localItinerary, { fromLocation: '', toLocation: '', bus: false, car: false, metro: false, train: false }] })
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
  },[])


  console.log(formik.values, "values")
  console.log(formik.errors, "ERRORS")
  console.log(masterData, "MASTERDATA")

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
                          formik.setFieldValue(`localItinerary.[${index}]fromLocation`, e);
                        }}>
                          {masterData?.PLACE?.map((place,index) => {
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
                          formik.setFieldValue(`localItinerary.[${index}]toLocation`, e);
                        }}>
                        {masterData?.PLACE?.map((place,index) => {
                            return (
                              <option value={place._id} key={index}>{place.name}</option>
                            )
                          })}
                      </Select>
                      {/* {
                        formik?.errors?.localItinerary[index]?.toLocation && (
                          <p className="text-red-500">
                            {
                              formik?.errors?.localItinerary[index]?.toLocation
                            }
                          </p>
                        )
                      } */}
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
                      {
                        
                      }
                      <div className="flex items-center mr-8">
                        <input
                          type="checkbox"
                          name="bus"
                          className="bg-[#EDEDED]"
                          onClick={(e) => {
                            formik.setFieldValue(`localItinerary.[${index}]bus`, e.target.checked);
                          }}
                        />
                        <label className="mb0 pl-2" style={{ fontSize: '20px' }}>
                          Bus
                        </label>
                      </div>
                      <div className="flex items-center mr-8">
                        <input
                          type="checkbox"
                          name="car"
                          className="bg-[#EDEDED]"
                          onClick={(e) => {
                            formik.setFieldValue(`localItinerary.[${index}]car`, e.target.checked);
                          }} />
                        <label className="mb0 pl-2" style={{ fontSize: '20px' }}>
                          Car
                        </label>
                      </div>
                      <div className="flex items-center mr-8">
                        <input
                          type="checkbox"
                          name="train"
                          className="bg-[#EDEDED]"
                          onClick={(e) => {
                            formik.setFieldValue(`localItinerary.[${index}]train`, e.target.checked);
                          }}
                        />
                        <label className="mb0 pl-2" style={{ fontSize: '20px' }}>
                          Train
                        </label>
                      </div>
                      <div className="flex items-center mr-8">
                        <input
                          type="checkbox"
                          name="metro"
                          value=""
                          className="bg-[#EDEDED]"
                          onClick={(e) => {
                            formik.setFieldValue(`localItinerary.[${index}]metro`, e.target.checked);
                          }}
                        />
                        <label className="mb0 pl-2" style={{ fontSize: '20px' }}>
                          Metro
                        </label>
                      </div>
                    </div>
                    {/* {
                        formik?.errors?.localItinerary[index]?.bus && (
                          <p className="text-red-500">
                            {
                              formik?.errors?.localItinerary[index]?.bus
                            }
                          </p>
                        )
                      } */}
                      {(formik?.errors?.localItinerary && formik?.errors?.localItinerary[index]) ? (
                        <p className="text-red-500">
                          {
                            formik?.errors?.localItinerary[index]?.bus
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