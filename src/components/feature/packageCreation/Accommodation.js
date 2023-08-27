import React from "react";
import { FaWifi } from "react-icons/fa6";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdOutlineLunchDining } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";
import { MdOutlineDomain } from "react-icons/md";
import { MdOutlineLocalTaxi } from "react-icons/md";
import { MdOutlineBathtub } from "react-icons/md";
import { MdAcUnit } from "react-icons/md";

const Accommodation = () => {
  return (
    <>
      <div className="p-5">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <form className="form-ui">
            <div class="flex  mt-4">
              <div class="flex items-center mr-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                />
                <label for="inline-radio" className="mb0 pl-2">
                  Makkah Only
                </label>
              </div>
              <div class="flex items-center mr-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                />
                <label for="inline-radio" class="mb0 pl-2">
                  Makkah Madeena
                </label>
              </div>
            </div>
            <div className="flex">
              <hr class="h-px my-8 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="last_name">Hotel Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Specify the Hotel Name"
                  required=""
                  value=""
                />
              </div>
              <div>
                <label for="last_name">Destination Address</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Specify the Address "
                  required=""
                  value=""
                />
              </div>
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-3 pt-2">
              <div>
                <label for="last_name">Star Rating</label>

                <select id="" name="">
                  <option value="">7 Star </option>
                  <option value="">5 Star </option>
                  <option value="">4 Star </option>
                  <option value="">3 Star </option>
                  <option value="">2 Star </option>
                  <option value="">1 Star </option>
                </select>
              </div>
              <div>
                <label for="last_name">Distance From Haram</label>
                <input
                  type="text"
                  name="name"
                  placeholder="2Km far from Haram"
                  required=""
                  value=""
                ></input>
              </div>
              <div>
                <label for="last_name">Room Types</label>
                <select id="" name="">
                  <option value="">Standard </option>
                  <option value="">Deluxe</option>
                  <option value="">Studio </option>
                  <option value=""> Connecting Rooms </option>
                  <option value="">Suites</option>
                  <option value="">Presidential</option>
                </select>
              </div>
            </div>

            <label for="last_name">Room Facilities</label>
            <div class="flex pt-2">
              <div class="flex items-center mr-4">
                <input id="inline-2-checkbox" type="checkbox" value="" />
                <label for="inline-2-checkbox" className="mb0 font-imp">
                  Wifi
                </label>
                <FaWifi className="ml-1 text-gray-500" />
              </div>
              <div class="flex items-center mr-4">
                <input id="inline-2-checkbox" type="checkbox" value="" />
                <label for="inline-2-checkbox" className="mb0 font-imp">
                  Laundry
                </label>
                <MdOutlineLocalLaundryService className="ml-1 text-xl text-gray-500" />
              </div>
              <div class="flex items-center mr-4">
                <input id="inline-2-checkbox" type="checkbox" value="" />
                <label for="inline-2-checkbox" className="mb0 font-imp">
                  Breakfast
                </label>
                <MdOutlineFreeBreakfast className="ml-1 text-xl text-gray-500" />
              </div>

              <div class="flex items-center mr-4">
                <input id="inline-2-checkbox" type="checkbox" value="" />
                <label for="inline-2-checkbox" className="mb0 font-imp">
                  Lunch
                </label>
                <MdOutlineLunchDining className="ml-1 text-xl text-gray-500" />
              </div>
              <div class="flex items-center mr-4">
                <input id="inline-2-checkbox" type="checkbox" value="" />
                <label for="inline-2-checkbox" className="mb0 font-imp">
                  Dinner
                </label>

                <MdOutlineDinnerDining className="ml-1 text-xl text-gray-500" />
              </div>

              <div class="flex items-center mr-4">
                <input id="inline-2-checkbox" type="checkbox" value="" />
                <label for="inline-2-checkbox" className="mb0 font-imp">
                  City view
                </label>
                <MdOutlineDomain className="ml-1 text-xl text-gray-500" />
              </div>

              <div class="flex items-center mr-4">
                <input id="inline-2-checkbox" type="checkbox" value="" />
                <label for="inline-2-checkbox" className="mb0 font-imp">
                  Free parking
                </label>
                <MdOutlineLocalTaxi className="ml-1 text-xl text-gray-500" />
              </div>

              <div class="flex items-center mr-4">
                <input id="inline-2-checkbox" type="checkbox" value="" />
                <label for="inline-2-checkbox" className="mb0 pl-2 font-imp">
                  Bath Tub
                </label>
                <MdOutlineBathtub className="ml-1 text-xl text-gray-500" />
              </div>

              <div class="flex items-center mr-4">
                <input id="inline-2-checkbox" type="checkbox" value="" />
                <label for="inline-2-checkbox" className="mb0 pl-2 font-imp">
                  Air conditioning
                </label>
                <MdAcUnit className="ml-1 text-xl text-gray-500" />
              </div>
            </div>

            <div className="w-full mt-10">
              <label for="last_name">Gallery (Upload multiple files)</label>
              <input class="" id="multiple_files" type="file" multiple />
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

export default Accommodation;
