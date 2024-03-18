import React from 'react'
import UnderMaintenance from 'src/components/common/UnderMaintenance'
import { FaCloudArrowUp } from "react-icons/fa6";


const index = () => {
    return (
        <>
           <section className='bg-white'>
            <div className='mx-10 py-10'>
                <h1 className='bg-[#f9f9f9] p-5 text-2xl' style={{borderLeft: '5px solid #00a852'}}><b>Agent ID - ADIL-004</b></h1>

                <div class="grid gap-6 md:grid-cols-2 sm:grid-cols-1 mt-5">
                    <div>
                   <label>Agent Full Name</label>
                   <input type="text" placeholder="Enter Agent Full Name" className="border-gray-300 bg-gray-200 rounded-lg w-full mt-2" />
                    </div>

                    <div>
                    <label>Profile Photo</label>
                    <label for="dropzone-file" class="bg-gray-200 rounded-lg flex items-center mt-2">
                    <div class=" h-11 px-3 py-2 w-full">
                      <p class="text-sm text-gray-800 dark:text-gray-400 items-center flex justify-between	"><span>Upload File here </span><FaCloudArrowUp className='text-[#00A852] text-3xl'/></p>
                      <input id="dropzone-file" type="file" class="invisible" />
                    </div>
                  </label>
                    </div>

                </div>

                <div class="grid gap-6 md:grid-cols-2 sm:grid-cols-1 mt-5">
                    <div>
                   <label>Agency Name</label>
                   <input type="text" placeholder="Enter Agency Name " className="border-gray-300 bg-gray-200 rounded-lg w-full mt-2" />
                    </div>

                    <div>
                    <label>Agency Address</label>
                    <input type="text" placeholder="Enter Agency Name " className="border-gray-300 bg-gray-200 rounded-lg w-full mt-2" />
                    </div>
                </div>

                <div class="grid gap-6 md:grid-cols-2 sm:grid-cols-1 mt-5">
                    <div>
                    <label>Mobile Number</label>
                    <input type="text" placeholder="Enter Mobile Number " className="border-gray-300 bg-gray-200 rounded-lg w-full mt-2" />
                    </div>

                    <div>
                    <label>E-mail ID</label>
                    <input type="text" placeholder="Enter E-mail ID" className="border-gray-300 bg-gray-200 rounded-lg w-full mt-2" />
                    </div>
                </div>

                <div class="grid gap-6 md:grid-cols-2 sm:grid-cols-1 mt-5">
                    <div>
                    <label>Document Type</label>
                       <div className='grid gap-3 grid-cols-3 mt-2'>

                        <div>
                        <input type="radio" id="html" name="fav_language" value="HTML" className='text-[#00A852]'/> 
                        <label for="html" className='px-3'>Passport</label>
                        </div>
                        <div>
                        <input type="radio" id="html" name="fav_language" value="HTML" className='text-[#00A852]'/> 
                        <label for="html" className='px-3'>PAN Card</label>
                        </div>
                        <div>
                        <input type="radio" id="html" name="fav_language" value="HTML" className='text-[#00A852]'/> 
                        <label for="html" className='px-3'>Driving Licence</label>
                        </div>

                       </div>

                       <div className='grid gap-3 grid-cols-3 mt-2'>
                        
                        <div>
                        <input type="radio" id="html" name="fav_language" value="HTML" className='text-[#00A852]'/> 
                        <label for="html" className='px-3'>Aadhar Card</label>
                        </div>
                        <div>
                        <input type="radio" id="html" name="fav_language" value="HTML" className='text-[#00A852]'/> 
                        <label for="html" className='px-3'>Other</label>
                        </div>
                        

                       </div>
                    </div>

                    

                    <div>
                    <label>Upload Document</label>
                    <label for="dropzone-file" class="bg-gray-200 rounded-lg flex items-center mt-2">
                    <div class=" h-11 px-3 py-2 w-full">
                      <p class="text-sm text-gray-800 dark:text-gray-400 items-center flex justify-between	"><span>Upload Document (File size: max 10MB,eg pdf,jpg) </span><FaCloudArrowUp className='text-[#00A852] text-3xl'/></p>
                      <input id="dropzone-file" type="file" class="invisible" />
                    </div>
                  </label>
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
                Submit
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