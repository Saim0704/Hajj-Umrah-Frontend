import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const TourItinerary = () => {
  return (
    <>
      <div className="p-5">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <form className="form-ui">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="last_name">Airline Carrier</label>

                <select id="" name="" class="border border-gray-300">
                  <option value="">Specify the Airline</option>
                  <option value="">Saudia </option>
                  <option value="">Etihad Airways </option>
                  <option value=""> Airways </option>
                  <option value="">Air Arabia </option>
                </select>
              </div>
              <div>
                <label for="last_name">Airline Carrier Class </label>
                <select id="" name="" class="border border-gray-300">
                  <option value="">Specify the class </option>
                  <option value="">Premium Economy </option>
                  <option value="">Business </option>
                  <option value=""> First Class </option>
                </select>
              </div>
            </div>

            <div className="grid gap-6 mb-5 md:grid-cols-5  pt-2">
              <div>
                <label for="last_name">No. of Adults</label>
                <div class="flex num-value">
                  <div className="plus">
                    <FaPlus />
                  </div>
                  <input type="text" value="02" />
                  <div className="minus">
                    <FaMinus />
                  </div>
                </div>
              </div>
              <div>
                <label for="last_name">No. of Childrens </label>
                <div class="flex num-value">
                  <div className="plus">
                    <FaPlus />
                  </div>
                  <input type="text" value="01" />
                  <div className="minus">
                    <FaMinus />
                  </div>
                </div>
              </div>
              <div>
                <label for="last_name">No. of Infants </label>
                <div class="flex num-value">
                  <div className="plus">
                    <FaPlus />
                  </div>
                  <input type="text" value="00" />
                  <div className="minus">
                    <FaMinus />
                  </div>
                </div>
              </div>
              <div>
                <label for="last_name">No. of Senior Citizens </label>
                <div class="flex num-value">
                  <div className="plus">
                    <FaPlus />
                  </div>
                  <input type="text" value="00" />
                  <div className="minus">
                    <FaMinus />
                  </div>
                </div>
              </div>
              <div>
                <label for="last_name">No. of Travellers </label>
                <input
                  type="text"
                  name="name"
                  placeholder="No. of persons"
                  required=""
                  value=""
                ></input>
              </div>
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-3 pt-2">
              <div>
                <label for="last_name">Departure Date</label>

                <div class="relative max-w-sm">
                  <input type="date" placeholder="Select date" />
                </div>
              </div>
              <div>
                <label for="last_name">Return Date</label>
                <input type="date" placeholder="Select date" />
              </div>
              <div>
                <label for="last_name">Luggage Allowed </label>
                <input
                  type="text"
                  name="name"
                  placeholder="In Kgs."
                  required=""
                  value=""
                ></input>
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

export default TourItinerary;
