import React from "react";
import { MdDirectionsBus } from "react-icons/md";
import { MdDirectionsCar } from "react-icons/md";
import { MdDirectionsSubwayFilled } from "react-icons/md";
import { MdDirectionsRailway } from "react-icons/md";

const LocalTransport = () => {
  return (
    <>
      <div className="p-5">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <form className="form-ui">
            <div className="container">
              <h2 className="text-xl pb-4">Local Site Visits/Ziyarat</h2>
              <div className="flex flex-wrap items-end">
                <div className="w-40">
                  <label for="" className="mb0">
                    Jeddah to Makkah
                  </label>
                </div>
                <div className="flex-grow">
                  <div class="flex pt-2">
                    <div class="flex items-center mr-4">
                      <input id="inline-2-checkbox" type="checkbox" value="" />
                      <label for="inline-2-checkbox" className="mb0 font-imp">
                        Bus
                      </label>
                      <MdDirectionsBus className="ml-1 text-gray-500 mr-4" />
                    </div>
                    <div class="flex items-center mr-4">
                      <input id="inline-2-checkbox" type="checkbox" value="" />
                      <label for="inline-2-checkbox" className="mb0 font-imp">
                        Car
                      </label>
                      <MdDirectionsCar className="ml-1 text-xl mr-4 text-gray-500" />
                    </div>
                    <div class="flex items-center mr-4">
                      <input id="inline-2-checkbox" type="checkbox" value="" />
                      <label for="inline-2-checkbox" className="mb0 font-imp">
                        Metro
                      </label>
                      <MdDirectionsRailway className="ml-1  mr-4 text-xl text-gray-500" />
                    </div>

                    <div class="flex items-center mr-4">
                      <input id="inline-2-checkbox" type="checkbox" value="" />
                      <label for="inline-2-checkbox" className="mb0 font-imp">
                        Train
                      </label>
                      <MdDirectionsSubwayFilled className="ml-1 text-xl text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>

            <div className="container mb-20">
              <div className="flex flex-wrap items-end">
                <div className="w-40">
                  <label for="" className="mb0">
                    Makkah to Jeddah
                  </label>
                </div>
                <div className="flex-grow">
                  <div class="flex pt-2">
                    <div class="flex items-center mr-4">
                      <input id="inline-2-checkbox" type="checkbox" value="" />
                      <label for="inline-2-checkbox" className="mb0 font-imp">
                        Bus
                      </label>
                      <MdDirectionsBus className="ml-1 text-gray-500 mr-4" />
                    </div>
                    <div class="flex items-center mr-4">
                      <input id="inline-2-checkbox" type="checkbox" value="" />
                      <label for="inline-2-checkbox" className="mb0 font-imp">
                        Car
                      </label>
                      <MdDirectionsCar className="ml-1 text-xl mr-4 text-gray-500" />
                    </div>
                    <div class="flex items-center mr-4">
                      <input id="inline-2-checkbox" type="checkbox" value="" />
                      <label for="inline-2-checkbox" className="mb0 font-imp">
                        Metro
                      </label>
                      <MdDirectionsRailway className="ml-1  mr-4 text-xl text-gray-500" />
                    </div>

                    <div class="flex items-center mr-4">
                      <input id="inline-2-checkbox" type="checkbox" value="" />
                      <label for="inline-2-checkbox" className="mb0 font-imp">
                        Train
                      </label>
                      <MdDirectionsSubwayFilled className="ml-1 text-xl text-gray-500" />
                    </div>
                  </div>
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
                <button type="button" class="btn-red">
                  Delete
                </button>
                <button type="button" class="btn-green">
                  Preview & Submit
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
