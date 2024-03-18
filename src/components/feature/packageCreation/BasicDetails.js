import React, { useEffect, useState } from "react";
import Steps from "./steps";
import { useDispatch, useSelector } from "react-redux";
import { setUserData, setBasic_Details } from "src/redux/slices/user";
import fetcher from "src/dataProvider";
import { useMutation, useQuery } from "react-query";
import { dayType, fromCity, noOfDays, toCity, arrivalCity, returnCity } from "src/constants/package";
import { Router, useRouter } from "next/router";
import { Select } from 'antd';
import moment from "moment";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";

const BasicDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const data = { name: "shubhams ", email: "dmdshubham@gmail.com", age: 34 };
  const BasicDetailId = useSelector(state => state?.user?.basic_Details?.basic_Detail?._id);
  const basicDetails = useSelector(state => state?.user?.basic_Details?.basic_Detail);
  const [formInitialValue,setFormInitialValues] = useState({
    name: "",
    description: "",
    cost: null,
    visaCost: null,
    flightCost: null,
    accomodationCost: null,
    transportCost: null,
    bookingCost: null,
    bookingCostType: "",
    miscellanousCost: null,
    currency: "",
    durationDays: "",
    durationNights: "",
    fromDate: "",
    toDate: "",
    fromCity: "",
    toCity: "",
    arrivalCity: "",
    returnCity: ""
  });
  const initialValuesStatic = {
    name: "",
    description: "",
    cost: null,
    visaCost: null,
    flightCost: null,
    accomodationCost: null,
    transportCost: null,
    bookingCost: null,
    bookingCostType: "",
    miscellanousCost: null,
    currency: "",
    durationDays: "",
    durationNights: "",
    fromDate: "",
    toDate: "",
    fromCity: "",
    toCity: "",
    arrivalCity: "",
    returnCity: ""
  };
  useEffect(() => {
    dispatch(setUserData(data));
  }, []);


  const formik = useFormik({
    initialValues: formInitialValue || initialValuesStatic,
    enableReinitialize:true,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      description: Yup.string(),
      cost: Yup.number().required("Cost is required").positive("Cost must be a positive number"),
      visaCost: Yup.number().required("Visa cost is required").positive("Visa cost must be a positive number"),
      flightCost: Yup.number().required("Flight cost is required").positive("Flight cost must be a positive number"),
      accomodationCost: Yup.number().required("Accommodation cost is required").positive("Accommodation cost must be a positive number"),
      transportCost: Yup.number().required("Transport cost is required").positive("Transport cost must be a positive number"),
      bookingCost: Yup.number().required("Booking cost is required").positive("Booking cost must be a positive number"),
      bookingCostType: Yup.string().required("Booking cost type is required"),
      miscellanousCost: Yup.number().required("Miscellaneous cost is required").positive("Miscellaneous cost must be a positive number"),
      currency: Yup.string().required("Currency is required"),
      durationDays: Yup.number().required("Duration days are required").positive("Duration days must be a positive number"),
      durationNights: Yup.number().required("Duration nights are required").positive("Duration nights must be a positive number"),
      fromDate: Yup.date().required("From date is required"),
      toDate: Yup.date().required("To date is required"),
      fromCity: Yup.string().required("From city is required"),
      toCity: Yup.string().required("To city is required"),
      arrivalCity: Yup.string().required("Arrival city is required"),
      returnCity: Yup.string().required("Return city is required"),
    }),

    onSubmit: (values, { setSubmitting }) => {
      createPackage(values);
      setSubmitting(false);
    }
  })

  const { mutate: createPackage } = useMutation(
    (data) => fetcher.post(`/v1/package/basic-details`, data, "raw"),
    {
      onSuccess: (res) => {
        Swal.fire({
          icon: "success",
          title: "Basic Details Saved",
          showConfirmButton: false,
          timer: 1500
        });
        dispatch(setBasic_Details({ basic_Detail: res.data }));
        router.push(`/admin-panel/create-package/gallery`, undefined, {
          shallow: true,
        });
      },
      onError: ({ response }) => {
        console.log(response.data.message);
        alert(response.data.message);
      },
    }
  );

  const handleChange = (e) => {
    const value = e.target.type === "number" ||
      e.target.name === "durationDays" ||
      e.target.name === "durationNights"
      ? parseInt(e.target.value)
      : e.target.value;

    formik.setFieldValue(e.target.name, value);
  };

  const { userData } = useSelector((state) => state.user);

  // useEffect(()=>{
  //   setFormInitialValues(basicDetails)
  //   console.log("---->",basicDetails)
  // },[basicDetails])
  useEffect(() => {
    if (basicDetails) {
      setFormInitialValues({
        name: basicDetails.name || "",
        description: basicDetails.description || "",
        cost: basicDetails.cost || null,
        visaCost: basicDetails.visaCost || null,
        flightCost: basicDetails.flightCost || null,
        accomodationCost: basicDetails.accomodationCost || null,
        transportCost: basicDetails.transportCost || null,
        bookingCost: basicDetails.bookingCost || null,
        bookingCostType: basicDetails.bookingCostType || "",
        miscellanousCost: basicDetails.miscellanousCost || null,
        currency: basicDetails.currency || "",
        durationDays: basicDetails.durationDays || "",
        durationNights: basicDetails.durationNights || "",
        fromDate: basicDetails.fromDate ? moment(basicDetails.fromDate).format("YYYY-MM-DD") : "",
        toDate: basicDetails.toDate ? moment(basicDetails.toDate).format("YYYY-MM-DD") : "",
        fromCity: basicDetails.fromCity || "",
        toCity: basicDetails.toCity || "",
        arrivalCity: basicDetails.arrivalCity || "",
        returnCity: basicDetails.returnCity || ""
      });
    }
  }, [basicDetails]);
  
  return (
    <div className="p-5">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <form className="form-ui" onSubmit={formik.handleSubmit}>
          <div class="grid gap-6 mb-6 grid-cols-1">
            <div>
              <label for="first_name">Package Name</label>
              <input
                type="text"
                id="first_name"
                value={formik.values.name}
                name="name"
                placeholder="Name your package"
                onChange={(e) => handleChange(e)}
                className={`border ${formik.errors.name ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {formik.errors.name && (
                <span className="text-red-500 mt-2">
                  {formik.errors.name}
                </span>
              )}
            </div>
          </div>
          <div class="grid gap-6 mb-6 grid-cols-2">
            <div>
              <label for="last_name">Package Cost</label>
              <input
                type="number"
                id="cost"
                name="cost"
                value={formik.values.cost}
                placeholder="In INR"
                onChange={handleChange}
                className={`border ${formik.errors.cost ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {formik.errors.cost && (
                <span className="text-red-500 mt-2">
                  {formik.errors.cost}
                </span>
              )}
            </div>
            <div className="grid grid-cols-1">
              <label for="duration">Duration</label>
              <div className="grid gap-6 grid-cols-2">
                <div>
                  <select
                    id=""
                    name="durationDays"
                    value={formik.values.durationDays}
                    className={`border ${formik.errors.durationDays
                      ? "border-red-500"
                      : "border-gray-300"
                      } bg-neutral-200`}
                    onChange={handleChange}
                  >
                    <option value="">No. of Days </option>
                    {noOfDays.map((item) => {
                      return (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  {formik.errors.durationDays && (
                    <span className="text-red-500 mt-2">
                      {formik.errors.durationDays}
                    </span>
                  )}
                </div>
                <div>
                  <select
                    id=""
                    name="durationNights"
                    value={formik.values.durationNights}
                    className={`border ${formik.errors.durationNights
                      ? "border-red-500"
                      : "border-gray-300"
                      } bg-neutral-200`}
                    onChange={handleChange}
                  >
                    <option value="">No. of Nights </option>
                    {noOfDays.map((item) => {
                      return (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  {formik.errors.durationNights && (
                    <span className="text-red-500 mt-2">
                      {formik.errors.durationNights}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="grid gap-6 mb-6 grid-cols-4">
            <div>
              <label for="last_name">Visa Cost</label>
              <input
                type="number"
                id="visaCost"
                name="visaCost"
                value={formik.values.visaCost}
                placeholder="Visa Cost"
                onChange={handleChange}
                className={`border ${formik.errors.visaCost ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {formik.errors.visaCost && (
                <span className="text-red-500 mt-2">
                  {formik.errors.visaCost}
                </span>
              )}
            </div>
            <div>
              <label for="last_name">Flight Cost</label>
              <input
                type="number"
                id="flightCost"
                name="flightCost"
                value={formik.values.flightCost}
                placeholder="Flight Cost"
                onChange={handleChange}
                className={`border ${formik.errors.flightCost ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {formik.errors.flightCost && (
                <span className="text-red-500 mt-2">
                  {formik.errors.flightCost}
                </span>
              )}
            </div>
            <div>
              <label for="last_name">Accommodation Cost</label>
              <input
                type="number"
                id="accomodationCost"
                name="accomodationCost"
                value={formik.values.accomodationCost}
                placeholder="Accommodation Cost"
                onChange={handleChange}
                className={`border ${formik.errors.accomodationCost ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {formik.errors.accomodationCost && (
                <span className="text-red-500 mt-2">
                  {formik.errors.accomodationCost}
                </span>
              )}
            </div>
            <div>
              <label for="last_name">Transport Cost</label>
              <input
                type="number"
                id="transportCost"
                name="transportCost"
                value={formik.values.transportCost}
                placeholder="Transport Cost"
                onChange={handleChange}
                className={`border ${formik.errors.transportCost ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {formik.errors.transportCost && (
                <span className="text-red-500 mt-2">
                  {formik.errors.transportCost}
                </span>
              )}
            </div>
          </div>
          <div class="grid gap-6 mb-6 grid-cols-4">
            <div>
              <label for="last_name">Booking Cost</label>
              <input
                type="number"
                id="bookingCost"
                name="bookingCost"
                value={formik.values.bookingCost}
                placeholder="Booking Cost"
                onChange={handleChange}
                className={`border ${formik.errors.bookingCost ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {formik.errors.bookingCost && (
                <span className="text-red-500 mt-2">
                  {formik.errors.bookingCost}
                </span>
              )}
            </div>
            <div>
              <label for="last_name">Booking Cost Type</label>
              <div>
                <select
                  id="bookingCostType"
                  name="bookingCostType"
                  value={formik.values.bookingCostType}
                  className={`border ${formik.errors.durationDays
                    ? "border-red-500"
                    : "border-gray-300"
                    } bg-neutral-200`}
                  onChange={handleChange}
                >
                  <option value="">Booking Cost Type</option>
                  <option value="Percent">Percent</option>
                  <option value="Absolute">Absolute</option>
                </select>
                {formik.errors.bookingCostType && (
                  <span className="text-red-500 mt-2">
                    {formik.errors.bookingCostType}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label for="last_name">Miscellaneous Cost</label>
              <input
                type="number"
                id="miscellanousCost"
                name="miscellanousCost"
                value={formik.values.miscellanousCost}
                placeholder="Miscellaneous Cost"
                onChange={handleChange}
                className={`border ${formik.errors.miscellanousCost ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {formik.errors.miscellanousCost && (
                <span className="text-red-500 mt-2">
                  {formik.errors.miscellanousCost}
                </span>
              )}
            </div>
            <div>
              <label for="last_name">Currency</label>
              <div>
                <select
                  id="currency"
                  name="currency"
                  value={formik.values.currency}
                  className={`border ${formik.errors.durationDays
                    ? "border-red-500"
                    : "border-gray-300"
                    } bg-neutral-200`}
                  onChange={handleChange}
                >
                  <option value="">Currency</option>
                  <option value="INR">INR</option>
                  <option value="DOLLAR">DOLLAR</option>
                </select>
                {formik.errors.currency && (
                  <span className="text-red-500 mt-2">
                    {formik.errors.cost}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div class="grid gap-6 mb-6 grid-cols-2">

            <div>
              <label for="from">Trip Start</label>
              <select
                id=""
                name="fromCity"
                value={formik.values.fromCity}
                className={`border ${formik.errors.fromCity
                  ? "border-red-500"
                  : "border-gray-300"
                  } bg-neutral-200`}
                onChange={handleChange}
              >
                <option value="">Select City</option>
                {fromCity.map((item) => {
                  return (
                    <option value={item.value} key={item.value}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              {formik.errors.fromCity && (
                <span className="text-red-500 mt-2">
                  {formik.errors.fromCity}
                </span>
              )}
            </div>
            <div>
              <label for="to">Trip To</label>
              <select
                id=""
                value={formik.values.toCity}
                name="toCity"
                className={`border ${formik.errors.toCity ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
                onChange={handleChange}
              >
                <option value="">Select City</option>
                {toCity.map((item) => {
                  return (
                    <option value={item.value} key={item.value}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              {formik.errors.toCity && (
                <span className="text-red-500 mt-2">
                  {formik.errors.toCity}
                </span>
              )}
            </div>
            <div>
              <label for="from">Arrival</label>
              <select
                id=""
                name="arrivalCity"
                value={formik.values.arrivalCity}
                className={`border ${formik.errors.arrivalCity
                  ? "border-red-500"
                  : "border-gray-300"
                  } bg-neutral-200`}
                onChange={handleChange}
              >
                <option value="">Select City</option>
                {arrivalCity.map((item) => {
                  return (
                    <option value={item.value} key={item.value}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              {formik.errors.arrivalCity && (
                <span className="text-red-500 mt-2">
                  {formik.errors.arrivalCity}
                </span>
              )}
            </div>
            <div>
              <label for="to">Return To</label>
              <select
                id=""
                value={formik.values.returnCity}
                name="returnCity"
                className={`border ${formik.errors.returnCity ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
                onChange={handleChange}
              >
                <option value="">Select City</option>
                {returnCity.map((item) => {
                  return (
                    <option value={item.value} key={item.value}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              {formik.errors.returnCity && (
                <span className="text-red-500 mt-2">
                  {formik.errors.returnCity}
                </span>
              )}
            </div>
          </div>
          <a for="departure" className="font-semibold">Package Validity Period</a>

          <div class="grid gap-6 mb-6 grid-cols-2">
            <div>
              <label for="departure">From</label>
              <input
                type="date"
                name="fromDate"
                min={moment(new Date()).format("YYYY-MM-DD")}
                value={formik.values.fromDate}
                className={`border ${formik.errors.fromDate
                  ? "border-red-500"
                  : "border-gray-300"
                  } bg-neutral-200`}
                onChange={handleChange}
              />
              {formik.errors.fromDate && (
                <span className="text-red-500 mt-2">
                  {formik.errors.fromDate}
                </span>
              )}
            </div>
            <div>
              <label for="return">To</label>
              <input
                type="date"
                min={formik.values.fromDate}
                value={formik.values.toDate}
                className={`border ${formik.errors.toDate ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
                name="toDate"
                onChange={handleChange}
              />
              {formik.errors.toDate && (
                <span className="text-red-500 mt-2">
                  {formik.errors.toDate}
                </span>
              )}
            </div>
          </div>
          <div className="w-full">
            <label for="last_name">Package Details</label>
            <textarea
              value={formik.values.description}
              id="message"
              rows="4"
              name="description"
              onChange={handleChange}
              placeholder="Write your thoughts here..."
              className="bg-neutral-200"
            ></textarea>
          </div>

          <div className="w-full flex pt-4">
            <div className="w-full text-right">
              <button type="submit" class="btn-light">
                Save
              </button>
              <button
                type="button"
                class="btn-green"
                // onClick={() =>
                //   router.push(`/admin-panel/create-package/gallery`, undefined, {
                //     shallow: true,
                //   })
                // }
                onClick={BasicDetailId ? () => router.push("/admin-panel/create-package/gallery") : () =>         Swal.fire({
                  icon: "warning",
                  title: "Please Fill Basic Details Then go to next page",
                  showConfirmButton: true,
                  timer: 3000
                })}
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicDetails;
