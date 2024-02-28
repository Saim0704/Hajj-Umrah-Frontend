// import React from "react";
// import { FaPlus } from "react-icons/fa6";
// import { FaMinus } from "react-icons/fa6";
// import TextEditor from "src/components/common/TextEditor";

// const TourItinerary = () => {
//   return (
//     <>
//       <div className="p-5">
//         <p className="text-xl font-bold pb-2">Day 1</p>
//         <TextEditor />
//         <p className="text-xl font-bold pb-2">Day 2</p>
//         <TextEditor />
//         <p className="text-xl font-bold pb-2">Day 3</p>
//         <TextEditor />
//         <p className="text-xl font-bold pb-2">Day 4</p>
//         <TextEditor />
//         <p className="text-xl font-bold pb-2">Day 5</p>
//         <TextEditor />
//       </div>
//     </>
//   );
// };

// export default TourItinerary;


import React from "react";
import TextEditor from "src/components/common/TextEditor";

const TourItinerary = () => {

  const validationSchema = Yup.object().shape({
    additionalItems: Yup.string().required("Please select at least one additional item"),
    destination:Yup.string().required(" Please select Your destination"),
    date: Yup.date().required("Please select a date"),
    localTransport: Yup.string().required("Please select a local transport option"),
    uploadPhoto: Yup.string().required("Image are required"),
    description: Yup.string().required("Description are required"),

  });
  
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log(values);
    setSubmitting(false);
  };
  return (
    <>
      <div className="p-5">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <form className="form-ui">
            <div className="container">
              <h2 className="text-2xl pb-4"><b>Additional Items</b></h2>
              <div className="grid gap-2 md:grid-cols-7">
                <div>
                  <div class="flex items-center mr-4">
                    <input type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '18px' }}>
                      Bag
                    </label>
                  </div>
                </div>
                <div>
                  <div class="flex items-center mr-4">
                    <input type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '18px' }}>
                      Ahram
                    </label>
                  </div>
                </div>
                <div>
                  <div class="flex items-center mr-4">
                    <input type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '18px' }}>
                      Belt
                    </label>
                  </div>
                </div>
                <div>
                  <div class="flex items-center mr-4">
                    <input type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '18px' }}>
                      Zamzam
                    </label>
                  </div>
                </div>
                <div>
                  <div class="flex items-center mr-4">
                    <input type="checkbox" value="" className="bg-[#EDEDED]" />
                    <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '18px' }}>
                      Khajoor
                    </label>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="flex">
              <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>
            <h2 className="text-2xl pb-4"><b>Nearby Sightseeing (Ziarah)</b></h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <label for="last_name">Select Near by Destination</label>
                <select id="" name="" class="border border-gray-300 bg-gray-200">
                  <option value="">Select Destination</option>
                  <option value="">Saudia </option>
                  <option value="">Etihad Airways </option>
                  <option value=""> Airways </option>
                  <option value="">Air Arabia </option>
                </select>
              </div>
              <div>
                <label for="last_name">Select Date</label>
                <div class="relative max-w-sm">
                  <input type="date" placeholder="Select date" className="bg-gray-200" />
                </div>
              </div>
              <div>
                <label for="last_name">Local Transport</label>
                <div class="flex">
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="bg-[#ededed] ibg"
                    // style={{backgroundColor:'#ededed', borderColor:'none'}}
                    />
                    <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '18px' }}>
                      Bus
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="bg-[#ededed] ibg"
                    // style={{backgroundColor:'#ededed', borderColor:'none'}}
                    />
                    <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '18px' }}>
                      Car
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <label className="mt-5" for="last_name">Upload Photo</label>
            <div className="grid gap-4 md:grid-cols-6">
              <div>
                <div class="flex justify-center">
                  <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                    <div class=" h-20 text-center">
                      <p class="text-sm text-gray-800 px-5 py-7 dark:text-gray-400">Browser</p>
                      <input id="dropzone-file" type="file" class="invisible" />
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <div class="flex justify-center">
                  <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                    <div class=" h-20 text-center">
                      <p class="text-sm text-gray-800 px-5 py-7 dark:text-gray-400">Browser</p>
                      <input id="dropzone-file" type="file" class="invisible" />
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex mt-10">
                <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
              </div>
              <div>
                <div class="flex justify-center">
                  <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                    <div class=" h-20 text-center">
                      <p class="text-sm text-gray-800 px-5 py-7 dark:text-gray-400">Browser</p>
                      <input id="dropzone-file" type="file" class="invisible" />
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <div class="flex justify-center">
                  <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                    <div class=" h-20 text-center">
                      <p class="text-sm text-gray-800 px-5 py-7 dark:text-gray-400">Browser</p>
                      <input id="dropzone-file" type="file" class="invisible" />
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <div class="flex justify-center">
                  <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                    <div class=" h-20 text-center">
                      <p class="text-4xl text-gray-800 px-5 py-5 dark:text-gray-400">+</p>
                      <input id="dropzone-file" type="file" class="invisible" />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <label className="mt-5" for="last_name">Description</label>
            <TextEditor />
            <div className="flex mt-10">
              <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>
            <div>
              <div class="flex justify-center mt-10">
                <label for="dropzone-file" class=" rounded-lg flex items-center" style={{ border: '1px solid gray' }}>
                  <div class="w-20 h-20 text-center">
                    <p class="text-4xl text-gray-800 py-5 dark:text-gray-400">+</p>
                    <input id="dropzone-file" type="file" class="invisible" />
                  </div>
                </label>
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
    </>
  );
};

export default TourItinerary;