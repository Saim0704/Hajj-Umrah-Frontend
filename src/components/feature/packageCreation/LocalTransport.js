import React from "react";
import { MdDirectionsBus } from "react-icons/md";
import { MdDirectionsCar } from "react-icons/md";
import { MdDirectionsSubwayFilled } from "react-icons/md";
import { MdDirectionsRailway } from "react-icons/md";
import { VscArrowBoth } from "react-icons/vsc";

const LocalTransport = () => {
  return (
    <>
      <div className="p-5">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <form className="form-ui">
            <div className="container">
              <h2 className="text-2xl pb-4"><b>Local Transport</b></h2>
              <div className="grid gap-6 mb-6 md:grid-cols-3 sm:grid-cols-1">
                <div>
                  <div className="flex items-center	">
                    <select id="" name="" class="" style={{ borderRadius: '0px', borderColor: 'black' }}>
                      <option value="">Jeddah</option>
                      <option value="">Saudia </option>
                      <option value="">Etihad Airways </option>
                      <option value=""> Airways </option>
                      <option value="">Air Arabia </option>
                    </select>
                    <VscArrowBoth className="text-8xl px-2	" />
                    <select id="" name="" class="" style={{ borderRadius: '0px', borderColor: 'black' }}>
                      <option value="">Makkah</option>
                      <option value="">Saudia </option>
                      <option value="">Etihad Airways </option>
                      <option value=""> Airways </option>
                      <option value="">Air Arabia </option>
                    </select>
                  </div>

                  <div className="flex items-center	">
                    <select id="" name="" class="" style={{ borderRadius: '0px', borderColor: 'black' }}>
                      <option value="">Makkah</option>
                      <option value="">Saudia </option>
                      <option value="">Etihad Airways </option>
                      <option value=""> Airways </option>
                      <option value="">Air Arabia </option>
                    </select>
                    <VscArrowBoth className="text-8xl px-2	" />
                    <select id="" name="" class="" style={{ borderRadius: '0px', borderColor: 'black' }}>
                      <option value="">Jeddah</option>
                      <option value="">Saudia </option>
                      <option value="">Etihad Airways </option>
                      <option value=""> Airways </option>
                      <option value="">Air Arabia </option>
                    </select>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl pb-4">Travel By</h2>
                  <div className="md:col-span-3 flex ">
                    <div class="flex items-center mr-4">
                      <input
                        id="inline-radio"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="bg-[#ededed] ibg"
                      // style={{backgroundColor:'#ededed', borderColor:'none'}}
                      />
                      <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '20px' }}>
                        Bus
                      </label>
                    </div>
                    <div class="flex items-center mr-4">
                      <input
                        id="inline-radio"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="bg-[#EDEDED] ibg"
                      />
                      <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '20px' }}>
                        Car
                      </label>
                    </div>
                    <div class="flex items-center mr-4">
                      <input
                        id="inline-radio"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="bg-[#EDEDED] ibg"
                      />
                      <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '20px' }}>
                        Train
                      </label>
                    </div>
                  </div>

                  <div className="md:col-span-3 flex mt-10">
                    <div class="flex items-center mr-4">
                      <input
                        id="inline-radio"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="bg-[#ededed] ibg"
                      // style={{backgroundColor:'#ededed', borderColor:'none'}}
                      />
                      <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '20px' }}>
                        Bus
                      </label>
                    </div>
                    <div class="flex items-center mr-4">
                      <input
                        id="inline-radio"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="bg-[#EDEDED] ibg"
                      />
                      <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '20px' }}>
                        Car
                      </label>
                    </div>
                    <div class="flex items-center mr-4">
                      <input
                        id="inline-radio"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="bg-[#EDEDED] ibg"
                      />
                      <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '20px' }}>
                        Train
                      </label>
                    </div>
                  </div>

                </div>


                <div>
                  <div class="flex justify-end">
                    <label for="dropzone-file" class="bg-white mt-12 rounded-lg flex items-center" style={{ border: '1px solid grey' }}>
                      <div class="w-20 h-20 text-center">
                        <p class="text-3xl text-gray-800 p-5 dark:text-gray-400 font-semibold">+</p>
                        <input id="dropzone-file" type="file" class="invisible" />
                      </div>

                    </label>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex">
              <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>



            <div className="w-full flex pt-4">
              <div className="w-1/2">
                {/* <button
                  type="button"
                  class="btn-bark"
                  onClick={() => router.back()}
                >
                  Back
                </button> */}
              </div>
              <div className="w-1/2 text-right">
                <button type="button" class="border py-2 px-5 mr-2 text-white" style={{ background: 'grey', borderRadius: '8px' }}>
                  Back
                </button>
                <button type="button" class="border py-2 px-5 mr-2" style={{ background: 'white', borderRadius: '8px', border: '1px solid #06603c', color: '#06603c' }}>
                  Reset
                </button>
                <button type="button" class="text-white py-2 px-5 mr-2" style={{ background: '#06603C', borderRadius: '8px', border: '1px solid #06603c' }}>
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