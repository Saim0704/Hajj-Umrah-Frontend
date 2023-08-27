import React, { useEffect, useState } from "react";
import Steps from "./steps";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "src/redux/slices/user";
import fetcher from "src/dataProvider";
import { useMutation, useQuery } from "react-query";
import { dayType, fromCity, noOfDays, toCity } from "src/constants/package";
import { Router, useRouter } from "next/router";
import moment from "moment";
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
    currency: "INR",
    durationType: "",
    duration: "",
    fromDate: "",
    toDate: "",
    fromCity: "",
    toCity: "",
    passengerCount: "",
    additionalDestinations: [],
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    cost: "",
    durationType: "",
    duration: "",
    fromDate: "",
    toDate: "",
    fromCity: "",
    toCity: "",
    passengerCount: "",
    additionalDestinations: [],
  });

  const isFormValid = () => {
    // Reset validation errors
    setValidationErrors({
      name: "",
      cost: "",
      durationType: "",
      duration: "",
      fromDate: "",
      toDate: "",
      fromCity: "",
      toCity: "",
      passengerCount: "",
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
    if (basicDetails.durationType === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        durationType: "Please select duration.",
      }));
      isValid = false;
    }
    if (basicDetails.duration === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        duration: "Please select duration number.",
      }));
      isValid = false;
    }
    if (basicDetails.fromCity === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        fromCity: "Please select from city",
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
    if (basicDetails.fromDate === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        fromDate: "Please enter departure. date",
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
    if (basicDetails.passengerCount === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        passengerCount: "Please select passenger number",
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
        e.target.name == "duration" ||
        e.target.name == "passengerCount"
          ? parseInt(e.target.value)
          : e.target.value,
    };

    setBasicDetails(nextFormState);
  };

  const handleAdditionalDestinationChange = (e) => {
    setBasicDetails({ ...basicDetails, additionalDestinations: [] });
    const temp = e.target.value;
    let additionalArr = [];
    temp.split(",").map((item) => {
      let obj = { name: item.trim() };
      additionalArr.push(obj);
    });
    setBasicDetails({ ...basicDetails, additionalDestinations: additionalArr });
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
        alert("Basic Detail Updated");
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

  return (
    <div className="p-5">
      <div className="bg-white p-4 rounded-xl shadow-md">
        <form className="form-ui">
          <div class="grid gap-6 mb-6 grid-cols-2">
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
                className={`border ${
                  validationErrors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {validationErrors.name && (
                <span className="text-red-500 mt-2">
                  {validationErrors.name}
                </span>
              )}
            </div>
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
                className={`border ${
                  validationErrors.cost ? "border-red-500" : "border-gray-300"
                }`}
              />
              {validationErrors.cost && (
                <span className="text-red-500 mt-2">
                  {validationErrors.cost}
                </span>
              )}
            </div>
          </div>
          <div class="grid gap-6 mb-6 grid-cols-3">
            <div>
              <label for="">Select Duration</label>
              <select
                id=""
                name="durationType"
                value={basicDetails.durationType}
                onChange={handleChange}
                className={`border ${
                  validationErrors.durationType
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                onFocus={() => handleFieldFocus("durationType")}
              >
                <option value="">Day type</option>
                {dayType.map((item) => {
                  return (
                    <option value={item.value} key={item.value}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              {validationErrors.durationType && (
                <span className="text-red-500 mt-2">
                  {validationErrors.durationType}
                </span>
              )}
            </div>
            <div>
              <label for="duration">No. of Days</label>
              <select
                id=""
                name="duration"
                value={basicDetails.duration}
                className={`border ${
                  validationErrors.duration
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                onFocus={() => handleFieldFocus("duration")}
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
              {validationErrors.duration && (
                <span className="text-red-500 mt-2">
                  {validationErrors.duration}
                </span>
              )}
            </div>
            <div>
              <label for="duration">No. of Nights</label>
              <select
                id=""
                name="duration"
                value={basicDetails.duration}
                className={`border ${
                  validationErrors.duration
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                onFocus={() => handleFieldFocus("duration")}
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
              {validationErrors.duration && (
                <span className="text-red-500 mt-2">
                  {validationErrors.duration}
                </span>
              )}
            </div>
          </div>
          <div class="grid gap-6 mb-6 grid-cols-2">
            <div>
              <label for="from">From</label>
              <select
                id=""
                name="fromCity"
                value={basicDetails.fromCity}
                onFocus={() => handleFieldFocus("fromCity")}
                className={`border ${
                  validationErrors.fromCity
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
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
              <label for="to"> To</label>
              <select
                id=""
                value={basicDetails.toCity}
                name="toCity"
                onFocus={() => handleFieldFocus("toCity")}
                className={`border ${
                  validationErrors.toCity ? "border-red-500" : "border-gray-300"
                }`}
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
              <label for="departure">Departure</label>
              <input
                type="date"
                required
                name="fromDate"
                min={moment(new Date()).format("YYYY-MM-DD")}
                value={basicDetails.fromDate}
                className={`border ${
                  validationErrors.fromDate
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
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
              <label for="return">Return</label>
              <input
                type="date"
                required
                min={basicDetails.fromDate}
                value={basicDetails.toDate}
                className={`border ${
                  validationErrors.toDate ? "border-red-500" : "border-gray-300"
                }`}
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

            <div>
              <label for="last_name">Additional Destination</label>
              <input
                type="text"
                // value={basicDetails?.additionalDestinations?.map((item) => {
                //   return item.name;
                // })}
                id=""
                name="additionalDestinations"
                placeholder="Ex. Madeena (user can add multiple entries with comma separated)"
                required
                onBlur={handleAdditionalDestinationChange}
              />
            </div>
            <div>
              <label for="last_name">No. of Persons</label>
              <select
                id=""
                name="passengerCount"
                value={basicDetails.passengerCount}
                className={`border ${
                  validationErrors.passengerCount
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                onFocus={() => handleFieldFocus("passengerCount")}
                onChange={handleChange}
              >
                <option value="">Select No. of Person</option>
                {noOfDays.map((item) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              {validationErrors.passengerCount && (
                <span className="text-red-500 mt-2">
                  {validationErrors.passengerCount}
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
