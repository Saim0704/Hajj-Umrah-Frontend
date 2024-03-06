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

const BasicDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const data = { name: "shubhams ", email: "dmdshubham@gmail.com", age: 34 };

  useEffect(() => {
    dispatch(setUserData(data));
  }, []);

  const [basicDetails, setBasicDetails] = useState({
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

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    cost: "",
    visaCost: "",
    flightCost: "",
    accomodationCost: "",
    transportCost: "",
    bookingCost: "",
    bookingCostType: "",
    miscellanousCost: "",
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

  const isFormValid = () => {
    // Reset validation errors
    setValidationErrors({
      name: "",
      cost: "",
      visaCost: "",
      flightCost: "",
      accomodationCost: "",
      transportCost: "",
      bookingCost: "",
      bookingCostType: "",
      miscellanousCost: "",
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

    let isValid = true;

    // Validate each field individually and update the error messages
    if (basicDetails.name.trim() === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        name: "Please enter a package name.",
      }));
      isValid = false;
    }

    if (isNaN(basicDetails.cost) || basicDetails.cost <= 0) {
      setValidationErrors((prevState) => ({
        ...prevState,
        cost: "Please enter a valid positive cost value.",
      }));
      isValid = false;
    }
    if (isNaN(basicDetails.visaCost) || basicDetails.visaCost <= 0) {
      setValidationErrors((prevState) => ({
        ...prevState,
        visaCost: "Please enter visaCost value.",
      }));
      isValid = false;
    }
    if (isNaN(basicDetails.flightCost) || basicDetails.flightCost <= 0) {
      setValidationErrors((prevState) => ({
        ...prevState,
        flightCost: "Please enter flightCost value.",
      }));
      isValid = false;
    }
    if (isNaN(basicDetails.accomodationCost) || basicDetails.accomodationCost <= 0) {
      setValidationErrors((prevState) => ({
        ...prevState,
        accomodationCost: "Please enter accomodationCost value.",
      }));
      isValid = false;
    }
    if (isNaN(basicDetails.transportCost) || basicDetails.transportCost <= 0) {
      setValidationErrors((prevState) => ({
        ...prevState,
        transportCost: "Please enter transportCost value.",
      }));
      isValid = false;
    }
    if (isNaN(basicDetails.bookingCost) || basicDetails.bookingCost <= 0) {
      setValidationErrors((prevState) => ({
        ...prevState,
        bookingCost: "Please enter bookingCost value.",
      }));
      isValid = false;
    }
    if (basicDetails.bookingCostType.trim() === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        bookingCostType: "Please enter booking cost type",
      }));
      isValid = false;
    }
    if (isNaN(basicDetails.miscellanousCost) || basicDetails.miscellanousCost <= 0) {
      setValidationErrors((prevState) => ({
        ...prevState,
        miscellanousCost: "Please enter miscellanousCost value.",
      }));
      isValid = false;
    }
    if (basicDetails.currency.trim() === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        currency: "Please enter currency type",
      }));
      isValid = false;
    }
    if (basicDetails.durationDays === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        durationDays: "Please select number of days.",
      }));
      isValid = false;
    }
    if (basicDetails.durationNights === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        durationNights: "Please select number of nights.",
      }));
      isValid = false;
    }
    if (basicDetails.fromCity === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        fromCity: "Please select from city.",
      }));
      isValid = false;
    }
    if (basicDetails.toCity === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        toCity: "Please select to city.",
      }));
      isValid = false;
    }
    if (basicDetails.arrivalCity === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        arrivalCity: "Please select arrival city.",
      }));
      isValid = false;
    }
    if (basicDetails.returnCity === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        returnCity: "Please select return city.",
      }));
      isValid = false;
    }
    if (basicDetails.fromDate === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        fromDate: "Please enter departure date.",
      }));
      isValid = false;
    }
    if (basicDetails.toDate === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        toDate: "Please enter return date.",
      }));
      isValid = false;
    }


    // Similar checks for other fields
    // ...

    return isValid;
  };

  const handleChange = (e) => {
    const nextFormState = {
      ...basicDetails,
      [e.target.name]:
        e.target.type === "number" ||
          e.target.name == "durationDays" ||
          e.target.name == "durationNights"
          ? parseInt(e.target.value)
          : e.target.value,
    };
    setBasicDetails(nextFormState);
  };

  const handleAdditionalDestinationChange = (e) => {
    setBasicDetails({ ...basicDetails });
    const temp = e.target.value;
    let additionalArr = [];
    temp.split(",").map((item) => {
      let obj = { name: item.trim() };
      additionalArr.push(obj);
    });
    setBasicDetails({ ...basicDetails });
  };

  const handleFieldFocus = (fieldName) => {
    // Clear the validation error for the specified field
    setValidationErrors((prevState) => ({
      ...prevState,
      [fieldName]: "",
    }));
  };

  // useQuery(
  //   `/v1/user/64aeffd503ff08dc23a83ca1`,
  //   () => fetcher.get(`/v1/user/64aeffd503ff08dc23a83ca1`, "raw"),
  //   {
  //     onSuccess: ({ data }) => {
  //       console.log(
  //         "🚀 ~ file: BasicDetails.js:23 ~ BasicDetails ~ data:",
  //         data
  //       );
  //     },
  //   }
  // );

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
        console.log(res.data, "res.data")
        dispatch(setBasic_Details({ basic_Detail: res.data }));
        router.push(`/admin/create-package/gallery`, undefined, {
          shallow: true,
        });
      },
      onError: ({ response }) => {
        console.log(response.data.message);
        alert(response.data.message);
      },
    }
  );

  const { userData } = useSelector((state) => state.user);

  const handleSubmit = () => {
    
    // Validate the form before submitting
    if (!isFormValid()) {
      return;
    }
    createPackage(basicDetails);
  };

  console.log(basicDetails, "BASIC")

  return (
    <div className="p-5">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <form className="form-ui">
          <div class="grid gap-6 mb-6 grid-cols-1">
            <div>
              <label for="first_name">Package Name</label>
              <input
                type="text"
                id="first_name"
                value={basicDetails.name}
                name="name"
                placeholder="Name your package"
                required
                onChange={handleChange}
                onFocus={() => handleFieldFocus("name")}
                className={`border ${validationErrors.name ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {validationErrors.name && (
                <span className="text-red-500 mt-2">
                  {validationErrors.name}
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
                value={basicDetails.cost}
                placeholder="In INR"
                required
                onChange={handleChange}
                onFocus={() => handleFieldFocus("cost")}
                className={`border ${validationErrors.cost ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {validationErrors.cost && (
                <span className="text-red-500 mt-2">
                  {validationErrors.cost}
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
                    value={basicDetails.durationDays}
                    className={`border ${validationErrors.durationDays
                      ? "border-red-500"
                      : "border-gray-300"
                      } bg-neutral-200`}
                    onFocus={() => handleFieldFocus("durationDays")}
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
                  {validationErrors.durationDays && (
                    <span className="text-red-500 mt-2">
                      {validationErrors.durationDays}
                    </span>
                  )}
                </div>
                <div>
                  <select
                    id=""
                    name="durationNights"
                    value={basicDetails.durationNights}
                    className={`border ${validationErrors.durationNights
                      ? "border-red-500"
                      : "border-gray-300"
                      } bg-neutral-200`}
                    onFocus={() => handleFieldFocus("durationNights")}
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
                  {validationErrors.durationNights && (
                    <span className="text-red-500 mt-2">
                      {validationErrors.durationNights}
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
                value={basicDetails.visaCost}
                placeholder="Visa Cost"
                required
                onChange={handleChange}
                onFocus={() => handleFieldFocus("visaCost")}
                className={`border ${validationErrors.visaCost ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {validationErrors.visaCost && (
                <span className="text-red-500 mt-2">
                  {validationErrors.visaCost}
                </span>
              )}
            </div>
            <div>
              <label for="last_name">Flight Cost</label>
              <input
                type="number"
                id="flightCost"
                name="flightCost"
                value={basicDetails.flightCost}
                placeholder="Flight Cost"
                required
                onChange={handleChange}
                onFocus={() => handleFieldFocus("flightCost")}
                className={`border ${validationErrors.flightCost ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {validationErrors.flightCost && (
                <span className="text-red-500 mt-2">
                  {validationErrors.flightCost}
                </span>
              )}
            </div>
            <div>
              <label for="last_name">Accommodation Cost</label>
              <input
                type="number"
                id="accomodationCost"
                name="accomodationCost"
                value={basicDetails.accomodationCost}
                placeholder="Accommodation Cost"
                required
                onChange={handleChange}
                onFocus={() => handleFieldFocus("accomodationCost")}
                className={`border ${validationErrors.accomodationCost ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {validationErrors.accomodationCost && (
                <span className="text-red-500 mt-2">
                  {validationErrors.accomodationCost}
                </span>
              )}
            </div>
            <div>
              <label for="last_name">Transport Cost</label>
              <input
                type="number"
                id="transportCost"
                name="transportCost"
                value={basicDetails.transportCost}
                placeholder="Transport Cost"
                required
                onChange={handleChange}
                onFocus={() => handleFieldFocus("transportCost")}
                className={`border ${validationErrors.transportCost ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {validationErrors.transportCost && (
                <span className="text-red-500 mt-2">
                  {validationErrors.transportCost}
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
                value={basicDetails.bookingCost}
                placeholder="Booking Cost"
                required
                onChange={handleChange}
                onFocus={() => handleFieldFocus("bookingCost")}
                className={`border ${validationErrors.bookingCost ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {validationErrors.bookingCost && (
                <span className="text-red-500 mt-2">
                  {validationErrors.bookingCost}
                </span>
              )}
            </div>
            <div>
              <label for="last_name">Booking Cost Type</label>
              <input
                type="text"
                id="bookingCostType"
                name="bookingCostType"
                value={basicDetails.bookingCostType}
                placeholder="Booking Cost Type"
                required
                onChange={handleChange}
                onFocus={() => handleFieldFocus("bookingCostType")}
                className={`border ${validationErrors.bookingCostType ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {validationErrors.bookingCostType && (
                <span className="text-red-500 mt-2">
                  {validationErrors.bookingCostType}
                </span>
              )}
            </div>
            <div>
              <label for="last_name">Miscellaneous Cost</label>
              <input
                type="number"
                id="miscellanousCost"
                name="miscellanousCost"
                value={basicDetails.miscellanousCost}
                placeholder="Miscellaneous Cost"
                required
                onChange={handleChange}
                onFocus={() => handleFieldFocus("miscellanousCost")}
                className={`border ${validationErrors.miscellanousCost ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {validationErrors.miscellanousCost && (
                <span className="text-red-500 mt-2">
                  {validationErrors.miscellanousCost}
                </span>
              )}
            </div>
            <div>
              <label for="last_name">Currency</label>
              <input
                type="text"
                id="currency"
                name="currency"
                value={basicDetails.currency}
                placeholder="Currency"
                required
                onChange={handleChange}
                onFocus={() => handleFieldFocus("currency")}
                className={`border ${validationErrors.cost ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
              />
              {validationErrors.currency && (
                <span className="text-red-500 mt-2">
                  {validationErrors.cost}
                </span>
              )}
            </div>
          </div>
          <div class="grid gap-6 mb-6 grid-cols-2">

            <div>
              <label for="from">Trip Start</label>
              <select
                id=""
                name="fromCity"
                value={basicDetails.fromCity}
                onFocus={() => handleFieldFocus("fromCity")}
                className={`border ${validationErrors.fromCity
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
              {validationErrors.fromCity && (
                <span className="text-red-500 mt-2">
                  {validationErrors.fromCity}
                </span>
              )}
            </div>
            <div>
              <label for="to">Trip To</label>
              <select
                id=""
                value={basicDetails.toCity}
                name="toCity"
                onFocus={() => handleFieldFocus("toCity")}
                className={`border ${validationErrors.toCity ? "border-red-500" : "border-gray-300"
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
              {validationErrors.toCity && (
                <span className="text-red-500 mt-2">
                  {validationErrors.toCity}
                </span>
              )}
            </div>
            <div>
              <label for="from">Arrival</label>
              <select
                id=""
                name="arrivalCity"
                value={basicDetails.arrivalCity}
                onFocus={() => handleFieldFocus("arrivalCity")}
                className={`border ${validationErrors.arrivalCity
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
              {validationErrors.arrivalCity && (
                <span className="text-red-500 mt-2">
                  {validationErrors.arrivalCity}
                </span>
              )}
            </div>
            <div>
              <label for="to">Return To</label>
              <select
                id=""
                value={basicDetails.returnCity}
                name="returnCity"
                onFocus={() => handleFieldFocus("returnCity")}
                className={`border ${validationErrors.returnCity ? "border-red-500" : "border-gray-300"
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
              {validationErrors.returnCity && (
                <span className="text-red-500 mt-2">
                  {validationErrors.returnCity}
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
                required
                name="fromDate"
                min={moment(new Date()).format("YYYY-MM-DD")}
                value={basicDetails.fromDate}
                className={`border ${validationErrors.fromDate
                  ? "border-red-500"
                  : "border-gray-300"
                  } bg-neutral-200`}
                onFocus={() => handleFieldFocus("fromDate")}
                onChange={handleChange}
              />
              {validationErrors.fromDate && (
                <span className="text-red-500 mt-2">
                  {validationErrors.fromDate}
                </span>
              )}
            </div>
            <div>
              <label for="return">To</label>
              <input
                type="date"
                required
                min={basicDetails.fromDate}
                value={basicDetails.toDate}
                className={`border ${validationErrors.toDate ? "border-red-500" : "border-gray-300"
                  } bg-neutral-200`}
                name="toDate"
                onFocus={() => handleFieldFocus("toDate")}
                onChange={handleChange}
              />
              {validationErrors.toDate && (
                <span className="text-red-500 mt-2">
                  {validationErrors.toDate}
                </span>
              )}
            </div>
          </div>
          <div className="w-full">
            <label for="last_name">Package Details</label>
            <textarea
              value={basicDetails.description}
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
              <button type="button" class="btn-light" onClick={handleSubmit}>
                Save
              </button>
              <button
                type="button"
                class="btn-green"
                onClick={() =>
                  router.push(`/admin/create-package/gallery`, undefined, {
                    shallow: true,
                  })
                }
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
