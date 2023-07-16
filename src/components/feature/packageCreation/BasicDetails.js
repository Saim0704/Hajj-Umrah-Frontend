import React from "react";

const BasicDetails = () => {
  return (
    <div>
      <div className="p-5">
        {/* /*basic details start*/}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <form className="form-ui">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="first_name">Package Name</label>
                <input
                  type="text"
                  id="first_name"
                  placeholder="Name your package"
                  required
                />
              </div>
              <div>
                <label for="last_name">Package Cost</label>
                <input type="number" id="" placeholder="In INR" required />
              </div>
              <div>
                <label for="">Select Duration</label>
                <select id="">
                  <option selected>Day type</option>
                </select>
              </div>
              <div>
                <label for="duration">Duration Nos.</label>
                <select id="">
                  <option selected>No. of Days </option>
                </select>
              </div>
              <div>
                <label for="from">From</label>
                <select id="">
                  <option selected>Delhi </option>
                </select>
              </div>
              <div>
                <label for="to"> To</label>
                <select id="">
                  <option selected>Makkah </option>
                </select>
              </div>
              <div>
                <label for="departure">Departure</label>
                <input type="date" required />
              </div>
              <div>
                <label for="return">Return</label>
                <input type="date" required />
              </div>
              <div>
                <label for="last_name">
                  Additional Destination after Umrah
                </label>
                <input
                  type="text"
                  id=""
                  placeholder="Ex. Madeena (user can add multiple entries)"
                  required
                />
              </div>
              <div>
                <label for="last_name">No. of Persons</label>
                <select id="">
                  <option selected>01 </option>
                  <option selected>02 </option>
                  <option selected>03 </option>
                  <option selected>04 </option>
                </select>
              </div>
            </div>

            <div className="w-full">
              <label for="last_name">Package Details</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>

            <div className="w-full flex pt-4">
              <div className="w-1/2">
                <button type="button" class="btn-bark">
                  Back
                </button>
              </div>
              <div className="w-1/2 text-right">
                <button type="button" class="btn-light">
                  Save
                </button>
                <button type="button" class="btn-green">
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* /*basic details end*/}

        {/* /*gallery start*/}
        <div className="bg-white p-4 rounded-xl shadow-md mt-5">
          <form className="form-ui">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="first_name">Thumb Image</label>

                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="invisible" />
                  </label>
                </div>
              </div>
              <div>
                <label for="last_name">Header Image</label>
                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="invisible" />
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full">
              <label for="last_name">Gallery (Upload multiple files)</label>
              <input class="" id="multiple_files" type="file" multiple />
            </div>

            <div className="w-full flex pt-4">
              <div className="w-1/2">
                <button type="button" class="btn-bark">
                  Back
                </button>
              </div>
              <div className="w-1/2 text-right">
                <button type="button" class="btn-light">
                  Save
                </button>
                <button type="button" class="btn-green">
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* /*gallery end*/}

        {/* /*Flight Details start*/}
        <div className="bg-white p-4 rounded-xl shadow-md mt-5">
          <form className="form-ui">
            <div class="flex">
              <div class="flex items-center mr-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  class=""
                />
                <label for="inline-radio">Inline 1</label>
              </div>
              <div class="flex items-center mr-4">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="inline-2-radio"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Inline 2
                </label>
              </div>
              <div class="flex items-center mr-4">
                <input
                  checked
                  id="inline-checked-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="inline-checked-radio"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Inline checked
                </label>
              </div>
              <div class="flex items-center">
                <input
                  disabled
                  id="inline-disabled-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="inline-disabled-radio"
                  class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  Inline disabled
                </label>
              </div>
            </div>

            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="first_name">Thumb Image</label>

                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="invisible" />
                  </label>
                </div>
              </div>
              <div>
                <label for="last_name">Header Image</label>
                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="invisible" />
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full">
              <label for="last_name">Gallery (Upload multiple files)</label>
              <input class="" id="multiple_files" type="file" multiple />
            </div>

            <div className="w-full flex pt-4">
              <div className="w-1/2">
                <button type="button" class="btn-bark">
                  Back
                </button>
              </div>
              <div className="w-1/2 text-right">
                <button type="button" class="btn-light">
                  Save
                </button>
                <button type="button" class="btn-green">
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* /*Flight Details end*/}
      </div>
    </div>
  );
};

export default BasicDetails;
