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
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import TextEditor from "src/components/common/TextEditor";
import { VscArrowBoth } from "react-icons/vsc";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
          <Formik
            initialValues={{
              additionalItems: '',
              destination:'',
              date:'',
              localTransport:'',
              uploadPhoto:'',
              description:'',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit} // This should correctly pass the handleSubmit function
          >

            <Form className="form-ui">
              <div className="container">
                <h2 className="text-2xl pb-4"><b>Additional Items</b></h2>

                <div className="grid gap-2 md:grid-cols-7">
                  <div>
                    <div class="flex items-center mr-4">
                      <Field
                        id="inline-radio"
                        type="radio"
                        value="Bag"
                        name="additionalItems"
                        className="bg-[#ededed] ibg2"
                      />
                      <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '18px' }}>
                        Bag
                      </label>
                    </div>
                  </div>

                  <div>
                    <div class="flex items-center mr-4">
                      <Field
                        id="inline-radio"
                        type="radio"
                        value="Ahram"
                        name="additionalItems"
                        className="bg-[#ededed] ibg2"
                      // style={{backgroundColor:'#ededed', borderColor:'none'}}
                      />
                      <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '18px' }}>
                        Ahram
                      </label>
                    </div>
                  </div>

                  <div>
                    <div class="flex items-center mr-4">
                      <Field
                        id="inline-radio"
                        type="radio"
                        value="Belt"
                        name="additionalItems"
                        className="bg-[#ededed] ibg2"
                      // style={{backgroundColor:'#ededed', borderColor:'none'}}
                      />
                      <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '18px' }}>
                        Belt
                      </label>
                    </div>
                  </div>

                  <div>
                    <div class="flex items-center mr-4">
                      <Field
                        id="inline-radio"
                        type="radio"
                        value="Zamzam"
                        name="additionalItems"
                        className="bg-[#ededed] ibg2"
                      // style={{backgroundColor:'#ededed', borderColor:'none'}}
                      />
                      <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '18px' }}>
                        Zamzam
                      </label>
                    </div>
                  </div>

                  <div>
                    <div class="flex items-center mr-4">
                      <Field
                        id="inline-radio"
                        type="radio"
                        value="Khajoor"
                        name="additionalItems"
                        className="bg-[#ededed] ibg2"
                      // style={{backgroundColor:'#ededed', borderColor:'none'}}
                      />
                      <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '18px' }}>
                        Khajoor
                      </label>
                    </div>
                  </div>
                  
                </div>
                <ErrorMessage name="additionalItems" component="div" className="text-red-500 mt-2" />
              </div>
              <div className="flex">
                <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
              </div>

              <h2 className="text-2xl pb-4"><b>Nearby Sightseeing (Ziarah)</b></h2>

              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <label for="last_name">Select Near by Destination</label>

                  <Field id="" as="select" name="destination" class="border border-gray-300 bg-gray-200">
                    <option value="">Select Destination</option>
                    <option value="1">Saudia </option>
                    <option value="2">Etihad Airways </option>
                    <option value="3"> Airways </option>
                    <option value="4">Air Arabia </option>
                  </Field>
                <ErrorMessage name="destination" component="div" className="text-red-500 mt-2" />

                </div>
                <div>
                  <label for="last_name">Select Date</label>

                  <div class="relative max-w-sm">
                  <Field type="date" id="date" name="date" placeholder="Select date" className="bg-gray-200" />
                  </div>
                  <ErrorMessage name="date" component="div" className="text-red-500 mt-2" />

                </div>
                <div>
                  <label for="last_name">Local Transport</label>
                  <div class="flex">
                    <div class="flex items-center mr-4">
                      <Field
                        id="inline-radio"
                        type="radio"
                        value="Bus"
                        name="localTransport"
                        className="bg-[#ededed] ibg"
                      // style={{backgroundColor:'#ededed', borderColor:'none'}}
                      />
                      <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '18px' }}>
                        Bus
                      </label>
                    </div>

                    <div class="flex items-center mr-4">
                      <Field
                        id="inline-radio"
                        type="radio"
                        value="Car"
                        name="localTransport"
                        className="bg-[#ededed] ibg"
                      // style={{backgroundColor:'#ededed', borderColor:'none'}}
                      />
                      <label for="inline-radio" class="mb0 pl-2" style={{ fontSize: '18px' }}>
                        Car
                      </label>
                    </div>
                   
                  </div>
                  <ErrorMessage name="localTransport" component="div" className="text-red-500 mt-2" />
                </div>
              </div>

              <label className="mt-5" for="last_name">Upload Photo</label>

              <div className="grid gap-4 md:grid-cols-6">
                <div>
                  <div class="flex justify-center">
                    <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                      <div class=" h-20 text-center">
                        <p class="text-sm text-gray-800 px-5 py-7 dark:text-gray-400">Browser</p>
                        <Field id="dropzone-file" type="file" class="invisible" name="uploadPhoto" />
                      </div>

                    </label>
                  </div>
                </div>
               
                {/* <div>
                  <div class="flex justify-center">
                    <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                      <div class=" h-20 text-center">
                        <p class="text-sm text-gray-800 px-5 py-7 dark:text-gray-400">Browser</p>
                        <Field id="dropzone-file" name="uploadPhoto"  type="file" class="invisible" />
                      </div>

                    </label>
                  </div>
                </div> */}

                {/* <div>
                  <div class="flex justify-center">
                    <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                      <div class=" h-20 text-center">
                        <p class="text-sm text-gray-800 px-5 py-7 dark:text-gray-400">Browser</p>
                        <Field id="dropzone-file" type="file" name="uploadPhoto" class="invisible" />
                      </div>

                    </label>
                  </div>
                </div> */}

                {/* <div>
                  <div class="flex justify-center">
                    <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                      <div class=" h-20 text-center">
                        <p class="text-sm text-gray-800 px-5 py-7 dark:text-gray-400">Browser</p>
                        <Field id="dropzone-file" type="file" name="uploadPhoto" class="invisible" />
                      </div>

                    </label>
                  </div>
                </div> */}
{/* 
                <div>
                  <div class="flex justify-center">
                    <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                      <div class=" h-20 text-center">
                        <p class="text-sm text-gray-800 px-5 py-7 dark:text-gray-400">Browser</p>
                        <Field id="dropzone-file" type="file" name="uploadPhoto" class="invisible" />
                      </div>

                    </label>
                  </div>
                </div> */}

                <div>
                  <div class="flex justify-center">
                    <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center">
                      <div class=" h-20 text-center">
                        <p class="text-4xl text-gray-800 px-5 py-5 dark:text-gray-400">+</p>
                        <Field id="dropzone-file" type="file" name="uploadPhoto" class="invisible" />
                      </div>

                    </label>
                  </div>
                </div>
                
              </div>
              <ErrorMessage name="uploadPhoto" component="div" className="text-red-500 mt-2" />
              <label className="mt-5" for="last_name">Description </label>
              <Field as="textarea" name="description" className="bg-gray-300"></Field>
              <ErrorMessage name="description" component="div" className="text-red-500 mt-2" />
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

              <div className="flex mt-10">
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
                  <button type="button" class="border py-2 px-5 mr-2" style={{ background: 'red', borderRadius: '8px', border: '1px solid red', color: 'white' }}>
                    Delete
                  </button>
                  <button type="submit" class="text-white py-2 px-5 mr-2" style={{ background: '#06603C', borderRadius: '8px', border: '1px solid #06603c' }}>
                    Preview & Submit
                  </button>
                </div>
              </div>

            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default TourItinerary;