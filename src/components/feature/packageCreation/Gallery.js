import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from 'styled-components';
import { useMutation } from "react-query";
import fetcher from "src/dataProvider";
import axios from "axios";
import { setUserData, setBasic_Details, setFlight_Details, setGallery } from "src/redux/slices/user";
import Swal from "sweetalert2";


export const Gallery = () => {
  const router = useRouter();
  const { userData } = useSelector((state) => state.user);
  const [uploadedImages, setUploadedImages] = useState({})
  const SaveId = useSelector(state => state?.user?.basic_Details?.basic_Detail?._id);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      thumbImages: [],
      headerImages: [],
      galleryImages: [],
    },
    validationSchema: Yup.object().shape({
      thumbImages: Yup.array()
        .required("Thumb Image is required")
        .min(1, "Minimum 1 image is required")
        .max(5, "Maximum 5 images allowed")
        // .test(
        //   "fileSize",
        //   "File too large, max size is 2MB",
        //   (value) => value && value.size <= 2000000
        // )
        .test(
          "fileType",
          "Unsupported file format",
          (value) =>
            value &&
            value.every(
              (image) => {
                return ["image/png", "image/jpg", "image/jpeg"].includes(image.type)
              }
            )
        ),
      headerImages: Yup.array()
        .required("Header Image is required")
        .min(1, "Minimum 1 image is required")
        .max(5, "Maximum 5 images allowed")
        // .test(
        //   "fileSize",
        //   "File too large, max size is 2MB",
        //   (value) => value && value.size <= 2000000
        // )
        .test(
          "fileType",
          "Unsupported file format",
          (value) =>
            value &&
            value.every(
              (image) => {
                return ["image/png", "image/jpg", "image/jpeg"].includes(image.type)
              }
            )
        ),
      galleryImages: Yup.array()
        .required("Gallery Images are required")
        .min(1, "Gallery Images are required")
        .test(
          "fileType",
          "Unsupported file format",
          (value) =>
            value &&
            value.every(
              (image) => {
                return ["image/png", "image/jpg", "image/jpeg"].includes(image.type)
              }
            )
        ),
    }),
    onSubmit: () => {
      saveImageToDB(uploadedImages);
    }
  })

  const { mutate: saveImageToDB } = useMutation(
    (data) => fetcher.post(`/v1/package/${SaveId}/gallery`, data, "raw"),
    {
      onSuccess: (res) => {
        Swal.fire({
          icon: "success",
          title: "Gallery Images Saved",
          showConfirmButton: false,
          timer: 1500
        });
        dispatch(setGallery({ gallery: res.data }));
        router.push(`/admin/create-package/flight-details`, undefined, {
          shallow: true,
        });
      },
      onError: ({ response }) => {
        console.log(response.data.message);
        alert(response.data.message);
      },
    }
  );

  const handleCloudImages = (event, name = event.target.name) => {
    formik.setFieldValue(name, Array.from(event.currentTarget.files));
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
    console.log(formData.getAll("files"),"FORMDATA")
    axios.post(`${process.env.NEXT_PUBLIC_CLOUD_URL}/upload/multiple`, formData, config)
      .then(response => {
        setUploadedImages({ ...uploadedImages, [name]: response.data.data }); // Handle response data
      })
      .catch(error => {
        console.error('Error:', error); // Handle errors
      });
  }

  console.log(formik.values,"VALUES")
  console.log(formik.errors,"ERROR")
  console.log(uploadedImages,"uploadedImages")


  return (
    <div>
      {" "}
      <div className="bg-white p-4 rounded-xl shadow-md mt-5">
        <form className="form-ui" onSubmit={formik.handleSubmit}>
          <div class="grid gap-6 mb-6 md:grid-cols-4">
            <div class="col-span-1">
              <div>
                <label htmlFor="thumbImages">Thumb Image</label>
                <div class="flex items-center justify-center w-full">
                  <label
                    htmlFor="thumbImages"
                    class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
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
                    <input id="thumbImages" type="file" class="invisible" multiple
                      onChange={(event) => handleCloudImages(event)}
                      // onChange={(event) => {
                      //   formik.setFieldValue("thumbImages", Array.from(event.currentTarget.files));
                      // }}
                      name="thumbImages"
                    />
                  </label>
                </div>
                <div className="flex">
                  {formik.values.thumbImages && Array.from(formik.values.thumbImages).map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt={`Image ${index}`}
                      style={{ width: '50px', height: 'auto', marginRight: '5px', flex: 'wrap', flexDirection: 'row' }}
                    />
                  ))}
                </div>
                {
                  formik.errors.thumbImages && (
                    <p className="text-red-500">
                      {
                        formik.errors.thumbImages
                      }
                    </p>
                  )
                }
              </div>
              <div>
                <label htmlFor="headerImages">Header Image</label>
                <div class="flex items-center justify-center w-full">
                  <label
                    htmlFor="headerImages"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
                      {<span className="flex flex-col items-center justify-center">
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
                          <span class="font-semibold">Click to upload</span> or drag
                          and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </span>}
                    </div>
                    <input id="headerImages" type="file" class="invisible" multiple
                      // onChange={(event) => {
                      //   formik.setFieldValue("headerImages", Array.from(event.currentTarget.files));
                      // }}
                      onChange={(event) => handleCloudImages(event)}
                      name="headerImages"
                    />
                  </label>
                </div>
                <div className="flex">
                  {formik.values.headerImages && Array.from(formik.values.headerImages).map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt={`Image ${index}`}
                      style={{ width: '50px', height: 'auto', marginRight: '5px', flex: 'wrap', flexDirection: 'row' }}
                    />
                  ))}
                </div>
                {
                  formik.errors.headerImages && (
                    <p className="text-red-500">
                      {
                        formik.errors.headerImages
                      }
                    </p>
                  )
                }
              </div>
            </div>
            <div class="col-span-3">
              <label htmlFor="galleryImages">Gallery (Upload multiple files)</label>
              <div class="flex items-center justify-left w-full flex-wrap gap-2">
                {formik.values.galleryImages && Array.from(formik.values.galleryImages).map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index}`}
                    className="w-32 h-32 "
                  // style={{ width: '50px', height: 'auto', marginRight: '5px', flex: 'wrap', flexDirection: 'row' }}
                  />
                ))}
                <label
                  htmlFor="galleryImages"
                  className="flex flex-col items-center justify-center w-40 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
                    {<span className="flex flex-col items-center justify-center">
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span>
                      </p>
                    </span>}
                  </div>
                </label>
                {
                  formik.errors.galleryImages && (
                    <p className="text-red-500">
                      {
                        formik.errors.galleryImages
                      }
                    </p>
                  )
                }
                <input id="galleryImages" type="file" class="invisible" multiple
                  // onChange={(event) => {
                  //   formik.setFieldValue("galleryImages", Array.from(event.currentTarget.files));
                  // }}
                  onChange={(event) => handleCloudImages(event)}
                  name="galleryImages"
                />

              </div>

            </div>
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
  );
};


