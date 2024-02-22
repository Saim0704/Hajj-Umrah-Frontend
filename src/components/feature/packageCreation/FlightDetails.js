import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { dayType, fromCity, noOfDays, toCity, arrivalCity, returnCity } from "src/constants/package";
import fetcher from "src/dataProvider";
import { useMutation } from "react-query";
import { Select, Button } from "antd";
import 'antd/dist/reset.css';

const FlightDetails = () => {

  const [airportOptions, setAirportOptions] = useState([]);
  const [airlinesOptions, setAirlinesOptions] = useState([]);
  const [selectedAirlineOption, setSelectedAirlineOption] = useState('')

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
        .test(
          "fileSize",
          "File too large, max size is 2MB",
          (value) => value && value.every((image) => image.size <= 2000000)
          // (value) => value && value.size <= 2000000
        )
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
        .required("Gallery is required")
        .min(1, "Minimum 1 image is required")
        .max(10, "Maximum 10 images allowed")
        // .test(
        //   "fileSize",
        //   "File too large, max size is 2MB",
        //   (value) =>
        //     value && value.every((image) => image.size <= 2000000)
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
    }),
    onSubmit: (values, { setSubmitting }) => {
      let payLoad = new FormData();
      payLoad.append("thumbImages", values.thumbImages);
      payLoad.append("headerImages", values.headerImages);
      payLoad.append("galleryImages", values.galleryImages)
      // values.galleryImages.map((image) => {
      //   payLoad.append("gallery", image);
      // });
      console.log([...payLoad])
      setSubmitting(false);
    }
  })

  const { mutate: getAirports } = useMutation(
    () => fetcher.get(`v1/common/airports`),
    {
      onSuccess: (res) => {
        setAirlinesOptions(res.data)
      },
      onError: ({ response }) => {
        console.log(response.data.message);
        alert(response.data.message, "ygdfuhvuew");
      },
    }
  );

  const { mutate: getAirlines } = useMutation(
    (data) => fetcher.get(`v1/common/airlines`, data, "raw"),
    {
      onSuccess: (res) => {
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

  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }


  return (
    <>
      <div className="p-5">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <form className="form-ui">
            <h1 className="text-2xl font-bold mb-2">Air Ticket</h1>
            <div className="flex bg-[#E7F8F0] p-3 font-bold	mb-3">
              <h1>Departure</h1>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-4 sm:grid-cols-2">
              <div>
                <label for="last_name">Airline</label>
                {/* <select
                  id=""
                  name=""
                  class="border border-gray-300 bg-gray-200"
                  value={selectedAirlineOption}
                  onChange={setSelectedAirlineOption}
                  options={airlinesOptions}
                  onInputChange={(inputValue) => getAirports(inputValue)}
                  showSearch
                >
                  {
                    airlinesOptions.map((res) => {
                      return <option value="jack" key={res._id}>{res.name}</option>
                    })
                  }
                </select> */}
                {/* <Select
                  mode="multiple"
                  value={selectedAirlineOption}
                  // onChange={setSelectedAirlineOption}
                  options={airlinesOptions}
                  // onInputChange={(inputValue) => getAirports(inputValue)}
                  isSearchable
                  onChange={(e) => getAirports(e.target.value)}
                /> */}
                <Select
                  className="border border-gray-300 bg-gray-200"
                  showSearch
                  // style={{ border: '1px solid gray', backgroundColor: 'red', width: 200 }}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  onChange={handleChange}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {
                    airlinesOptions.map((res) => {
                      return <Option value="jack" key={res._id}>{res.name}</Option>
                    })
                  }
                </Select>

                {/* <option value=""></option>
                  <option value="">Saudia </option>
                  <option value="">Etihad Airways </option>
                  <option value=""> Airways </option>
                  <option value="">Air Arabia </option>
                </select> */}
              </div>
              <div>
                <label for="last_name">Class</label>
                <select id="" name="" class="border border-gray-300 bg-gray-200">
                  <option value=""></option>
                  <option value="">Premium Economy </option>
                  <option value="">Business </option>
                  <option value=""> First Class </option>
                </select>
              </div>
              <div>
                <label for="last_name">From</label>
                <select id="" name="" class="border border-gray-300 bg-gray-200">
                  <option value=""></option>
                  <option value="">Premium Economy </option>
                  <option value="">Business </option>
                  <option value=""> First Class </option>
                </select>
              </div>
              <div>
                <label for="last_name">Date of Flight</label>

                <div class="relative max-w-sm">
                  <input type="date" placeholder="Select date" className="bg-gray-200" />
                </div>
              </div>
            </div>
            <div className="grid gap-6 mb-5 md:grid-cols-4 sm:grid-cols-2 pt-2">
              <div>
                <label for="last_name">To</label>
                <select id="" name="" class="border border-gray-300 bg-gray-200">
                  <option value=""></option>
                  <option value="">Premium Economy </option>
                  <option value="">Business </option>
                  <option value=""> First Class </option>
                </select>
              </div>
              <div>
                <label for="last_name">Weight</label>
                <input
                  type="text"
                  name="name"
                  placeholder="In Kgs."
                  required=""
                  value=""
                  className="bg-gray-200"
                ></input>
              </div>
              <div className="flex">
                <div class="flex items-center mr-5 pt-7">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="bg-gray-300"
                  />
                  <label for="inline-radio" class="mb0 pl-2">
                    One Way
                  </label>
                </div>
                <div class="flex items-center mr-5 pt-7">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="bg-gray-300"
                  />
                  <label for="inline-radio" class="mb0 pl-2">
                    One Way
                  </label>
                </div>
              </div>
            </div>
            <div className="flex bg-[#E7F8F0] p-3 font-medium	mb-3">
              <h1>Arrival</h1>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-4 sm:grid-cols-2">
              <div>
                <label for="last_name">Airline</label>
                <select id="" name="" class="border border-gray-300 bg-gray-200">
                  <option value=""></option>
                  <option value="">Saudia </option>
                  <option value="">Etihad Airways </option>
                  <option value=""> Airways </option>
                  <option value="">Air Arabia </option>
                </select>
              </div>
              <div>
                <label for="last_name">Class</label>
                <select id="" name="" class="border border-gray-300 bg-gray-200">
                  <option value=""></option>
                  <option value="">Premium Economy </option>
                  <option value="">Business </option>
                  <option value=""> First Class </option>
                </select>
              </div>
              <div>
                <label for="last_name">From</label>
                <select id="" name="" class="border border-gray-300 bg-gray-200">
                  <option value=""></option>
                  <option value="">Premium Economy </option>
                  <option value="">Business </option>
                  <option value=""> First Class </option>
                </select>
              </div>
              <div>
                <label for="last_name">Date of Flight</label>
                <div class="relative max-w-sm">
                  <input type="date" placeholder="Select date" className="bg-gray-200" />
                </div>
              </div>
            </div>
            <div className="grid gap-6 mb-5 md:grid-cols-4 sm:grid-cols-2 pt-2">
              <div>
                <label for="last_name">To</label>
                <select id="" name="" class="border border-gray-300 bg-gray-200">
                  <option value=""></option>
                  <option value="">Premium Economy </option>
                  <option value="">Business </option>
                  <option value=""> First Class </option>
                </select>
              </div>
              <div>
                <label for="last_name">Weight</label>
                <input
                  type="text"
                  name="name"
                  placeholder="In Kgs."
                  required=""
                  value=""
                  className="bg-gray-200"
                ></input>
              </div>
              <div className="flex">
                <div class="flex items-center mr-5 pt-7">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="bg-gray-300"
                  />
                  <label for="inline-radio" class="mb0 pl-2">
                    One Way
                  </label>
                </div>
                <div class="flex items-center mr-5 pt-7">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="bg-gray-300"
                  />
                  <label for="inline-radio" class="mb0 pl-2">
                    One Way
                  </label>
                </div>
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
                <button type="button" class="btn-light">
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

export default FlightDetails;
