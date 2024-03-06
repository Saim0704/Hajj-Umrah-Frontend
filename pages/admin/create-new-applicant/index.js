import React from 'react'
import UnderMaintenance from 'src/components/common/UnderMaintenance'

const index = () => {
    return (
        <>
        <section className='bg-white'>
            <div className='mx-10 py-10'>
                <h1 className='bg-[#f9f9f9] p-5 text-2xl' style={{borderLeft: '5px solid #00a852'}}><b>Applicant ID- ADIL-0APP4</b></h1>

                <div class="grid gap-6 md:grid-cols-2 sm:grid-cols-1 mt-5">
                    <div>
                   <label>Personal Picture<span className='text-red-700'>*</span></label>
                   <label for="dropzone-file" class="bg-gray-300 rounded-lg flex items-center mt-2">
                    <div class=" h-12 p-3 ">
                      <p class="text-sm text-gray-800 dark:text-gray-400">Upload File here</p>
                      <input id="dropzone-file" type="file" class="invisible" />
                    </div>
                  </label>
                    </div>

                    <div>
                        <ul className='list-disc pt-5 px-2'>
                            <li>Please upload image dimension 200*200 px.</li>
                            <li>Image size must be from 5 to 100kb.</li>
                            <li>Allowed picture types are jpg, png and jpeg.</li>
                        </ul>
                    </div>
                </div>

                <div class="grid gap-6 md:grid-cols-2 sm:grid-cols-1 mt-5">
                    <div>
                   <label>Country of Nationality<span className='text-red-700'>*</span></label>
                   <select id="" name="" class=" border-gray-300 bg-gray-300 rounded-lg w-full mt-2">
                  <option value="">Austria</option>
                  <option value="">Saudia </option>
                  <option value="">Etihad Airways </option>
                  <option value=""> Airways </option>
                  <option value="">Air Arabia </option>
                </select>
                    </div>

                    <div>
                    <label>First Name<span className='text-red-700'>*</span></label>
                    <input type="text" placeholder="First Name" className="border-gray-300 bg-gray-300 rounded-lg w-full mt-2" />
                    </div>
                </div>

                <div class="grid gap-6 md:grid-cols-2 sm:grid-cols-1 mt-5">
                    <div>
                    <label>Middle Name<span className='text-red-700'>(optional, only if available in passport)</span></label>
                    <input type="text" placeholder="Middle Name" className="border-gray-300 bg-gray-300 rounded-lg w-full mt-2" />
                    </div>

                    <div>
                    <label>Last Name or Family Name<span className='text-red-700'>*</span></label>
                    <input type="text" placeholder="Last Name" className="border-gray-300 bg-gray-300 rounded-lg w-full mt-2" />
                    </div>
                </div>

                <div class="grid gap-6 md:grid-cols-2 sm:grid-cols-1 mt-5">
                    <div>
                   <label>Gender<span className='text-red-700'>*</span></label>
                   <select id="" name="" class=" border-gray-300 bg-gray-300 rounded-lg w-full mt-2">
                  <option value="">Select</option>
                  <option value="">Saudia </option>
                  <option value="">Etihad Airways </option>
                  <option value=""> Airways </option>
                  <option value="">Air Arabia </option>
                </select>
                    </div>

                    <div>
                    <label>Marital Status<span className='text-red-700'>*</span></label>
                   <select id="" name="" class=" border-gray-300 bg-gray-300 rounded-lg w-full mt-2">
                  <option value="">Select</option>
                  <option value="">Saudia </option>
                  <option value="">Etihad Airways </option>
                  <option value=""> Airways </option>
                  <option value="">Air Arabia </option>
                </select>
                    </div>
                </div>

                <div class="grid gap-6 md:grid-cols-2 sm:grid-cols-1 mt-5">
                    <div>
                   <label>Date of Birth<span className='text-red-700'>*</span></label>
                   <input type="date" placeholder="Middle Name" className="border-gray-300 bg-gray-300 rounded-lg w-full mt-2" />
                    </div>

                    <div>
                    <label>Country of Birth<span className='text-red-700'>*</span></label>
                   <select id="" name="" class=" border-gray-300 bg-gray-300 rounded-lg w-full mt-2">
                  <option value="">Select</option>
                  <option value="">Saudia </option>
                  <option value="">Etihad Airways </option>
                  <option value=""> Airways </option>
                  <option value="">Air Arabia </option>
                </select>
                    </div>
                </div>

                <div className="flex mt-10">
              <hr class="h-px my-4 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            </div>

            <h2 className="text-xl">Current Residential Address</h2>
            <div class="grid gap-6 md:grid-cols-2 sm:grid-cols-1 mt-5">
                    <div>
                   <label>Country<span className='text-red-700'>*</span></label>
                   <select id="" name="" class=" border-gray-300 bg-gray-300 rounded-lg w-full mt-2">
                  <option value="">Austria</option>
                  <option value="">Saudia </option>
                  <option value="">Etihad Airways </option>
                  <option value=""> Airways </option>
                  <option value="">Air Arabia </option>
                </select>
                    </div>

                    <div>
                    <label>City<span className='text-red-700'>*</span></label>
                    <input type="text" placeholder="Enter Applicant  Address" className="border-gray-300 bg-gray-300 rounded-lg w-full mt-2" />
                    </div>
                </div>

                <div class="grid gap-6 md:grid-cols-2 sm:grid-cols-1 mt-5">
                    <div>
                   <label>Zip/Postal code<span className='text-red-700'>*</span></label>
                   <select id="" name="" class=" border-gray-300 bg-gray-300 rounded-lg w-full mt-2">
                  <option value="">Select</option>
                  <option value="">Saudia </option>
                  <option value="">Etihad Airways </option>
                  <option value=""> Airways </option>
                  <option value="">Air Arabia </option>
                </select>
                    </div>

                    <div>
                    <label>Address<span className='text-red-700'>*</span></label>
                    <input type="text" placeholder="Enter Applicant  Address" className="border-gray-300 bg-gray-300 rounded-lg w-full mt-2" />
                    </div>
                </div>


                <div className="w-full flex pt-4">
            <div className="w-full text-right">
              <button type="button" class="btn-light text-green-600">
                Reset
              </button>
              <button
                type="button"
                class="btn-green">
                Next
              </button>
            </div>
          </div>


            </div>

            
        </section>

        
        </>
    )
}

export default index

export async function getStaticProps() {
    return {
        props: {
            asLayout: "DefaultLayout",
            withSideBar: true,
        },
    };
}