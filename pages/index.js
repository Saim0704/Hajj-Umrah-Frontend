import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import styles from '../styles/Home.module.css'


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hajj Umrah</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section class="bg-fixed bg-home bg-cover min-h-screen">
          <div class="container mx-auto flex py-44 flex-col">
            <div class="w-full">
              <h1 class="text-7xl text-white pb-4">Best Adil Travels Tours</h1>
              <p class="text-white">
                Chillwave portland ugh, knausgaard fam polaroid iPhone.{" "}
                <br></br>Man braid swag typewriter affogato, hella selvage wolf
                narwhal dreamcatcher.
              </p>
              <a
                class="inline-block text-black font-medium mt-6 rounded-md bg-yellow-500 py-3 px-4"
                href="#">
                Plan Your Custom Umrah
              </a>

              <div className="blk-bg-trnp w-full rounded-lg m-auto py-5 px-12 mt-48 pb-7">
                <div class="w-8/12 m-auto">
                  <h2 class="text-lg text-white pl-4 mb-5">Search Tour</h2>
                  <form className="flex justify-evenly items-end ">
                    <label>
                      <span class="text-white text-sm">Arrival Date</span>
                      <input
                        type="date"
                        placeholder=""
                        class=" 
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      />
                    </label>
                    <label>
                      <span class="text-white text-sm">Departure Date</span>
                      <input
                        type="date"
                        placeholder=""
                        class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      />
                    </label>

                    <label>
                      <span class="text-white text-sm">Days</span>
                      <select
                        class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  ">
                        <option>6 Dyas</option>
                        <option>8 Dyas</option>
                        <option>12 Dyas</option>
                        <option>15 Dyas</option>
                      </select>
                    </label>

                    <label>
                      <span class="text-white">Price</span>
                      <select
                        class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  ">
                        <option>Rs./ 15,000</option>
                        <option>Rs./ 15,000</option>
                        <option>Rs./ 15,000</option>
                        <option>Rs./ 15,000</option>
                      </select>
                    </label>
                    <button
                      type="Search"
                      class="text-white rounded-xl bg-green-700 border-none px-5">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap w-full mb-12">
              <div className="w-full">
                <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Best Umrah Packages
                </h2>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
            </div>
            {/* <div className="flex flex-wrap -m-4">
      <div className="w-1/3 p-2 pt-0 pb-0">
        <div className=' bg-white flex flex-wrap  p-2'>
        <div className='text-center'>
          <img src='demo.jpg' className='rounded-md'></img>
         
          </div>

          <div className="text-left pl-5">
          <h3 className='font-semibold w-4/5 leading-5'>Premium Umrah Package</h3>
          <span className='inline-block border mt-4 text-sm border-slate-300 rounded-full pl-10 pr-10 pt-1 pb-1'>15D / 14N</span>
          <span className='block pt-4 text-green-700 font-bold text-sm'>INR 108000</span>
          <span className='text-xs text-red-600'>*Terms Apply</span>

          </div>

        </div>
      </div>

      <div className="w-1/3 p-2 pt-0 pb-0">
        <div className=' bg-white  p-2'>222</div>
      </div>

      <div className="w-1/3 p-2 pt-0 pb-0">
        <div className=' bg-white  p-2'>3333</div>
      </div>
    </div> */}

            <div className="flex flex-wrap -m-4">
              <div className="w-1/4 p-2 pt-0 pb-0">
                <div className=" bg-white pb-8 flex flex-wrap ">
                  <img src="packages-img.jpg"></img>
                  <h3 className="font-semibold p-4">Premium Umrah Package</h3>
                  <div className="flex justify-between w-full bg-green-900 text-white pl-4 pr-4 pt-2 pb-2 font-semibold">
                    <span>15D / 14N</span>
                    <span>INR 108000</span>
                  </div>

                  <div className="flex p-4 justify-between w-full">
                    <img src="icon.jpg"></img>
                    <span className="text-black">From Delhi</span>
                  </div>

                  <div className="text-center w-full pt-4">
                    <a
                      href="#"
                      className="border border-green-700 pl-5 pr-5 pt-1 pb-1 hover:bg-green-700 hover:text-white rounded-2xl text-sm">
                      View Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-1/4 p-2 pt-0 pb-0">
                <div className=" bg-white pb-8 flex flex-wrap ">
                  <img src="packages-img1.jpg"></img>
                  <h3 className="font-semibold p-4">Premium Umrah Package</h3>
                  <div className="flex justify-between w-full bg-green-900 text-white pl-4 pr-4 pt-2 pb-2 font-semibold">
                    <span>15D / 14N</span>
                    <span>INR 108000</span>
                  </div>

                  <div className="flex p-4 justify-between w-full">
                    <img src="icon.jpg"></img>
                    <span className="text-black">From Delhi</span>
                  </div>

                  <div className="text-center w-full pt-4">
                    <a
                      href="#"
                      className="border border-green-700 pl-5 pr-5 pt-1 pb-1 hover:bg-green-700 hover:text-white rounded-2xl text-sm">
                      View Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-1/4 p-2 pt-0 pb-0">
                <div className=" bg-white pb-8 flex flex-wrap ">
                  <img src="packages-img2.jpg"></img>
                  <h3 className="font-bold p-4">Premium Umrah Package</h3>
                  <div className="flex justify-between w-full bg-green-900 text-white pl-4 pr-4 pt-2 pb-2 font-semibold">
                    <span>15D / 14N</span>
                    <span>INR 108000</span>
                  </div>

                  <div className="flex p-4 justify-between w-full">
                    <img src="icon.jpg"></img>
                    <span className="text-black">From Delhi</span>
                  </div>

                  <div className="text-center w-full pt-4">
                    <a
                      href="#"
                      className="border border-green-700 pl-5 pr-5 pt-1 pb-1 hover:bg-green-700 hover:text-white rounded-2xl text-sm">
                      View Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-1/4 p-2 pt-0 pb-0">
                <div className=" bg-white pb-8 flex flex-wrap ">
                  <img src="packages-img3.jpg"></img>
                  <h3 className="font-semibold p-4">Premium Umrah Package</h3>
                  <div className="flex justify-between w-full bg-green-800 text-white pl-4 pr-4 pt-2 pb-2 font-semibold">
                    <span>15D / 14N</span>
                    <span>INR 108000</span>
                  </div>

                  <div className="flex p-4 justify-between w-full">
                    <img src="icon.jpg"></img>
                    <span className="text-black">From Delhi</span>
                  </div>

                  <div className="text-center w-full pt-4">
                    <a
                      href="#"
                      className="border border-green-700 pl-5 pr-5 pt-1 pb-1 hover:bg-green-700 hover:text-white rounded-2xl text-sm">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -m-4 mt-10">
              <div className="w-1/4 p-2 pt-0 pb-0">
                <div className=" bg-white pb-8 flex flex-wrap ">
                  <img src="packages-img.jpg"></img>
                  <h3 className="font-semibold p-4">Premium Umrah Package</h3>
                  <div className="flex justify-between w-full bg-green-900 text-white pl-4 pr-4 pt-2 pb-2 font-semibold">
                    <span>15D / 14N</span>
                    <span>INR 108000</span>
                  </div>

                  <div className="flex p-4 justify-between w-full">
                    <img src="icon.jpg"></img>
                    <span className="text-black">From Delhi</span>
                  </div>

                  <div className="text-center w-full pt-4">
                    <a
                      href="#"
                      className="border border-green-700 pl-5 pr-5 pt-1 pb-1 hover:bg-green-700 hover:text-white rounded-2xl text-sm">
                      View Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-1/4 p-2 pt-0 pb-0">
                <div className=" bg-white pb-8 flex flex-wrap ">
                  <img src="packages-img1.jpg"></img>
                  <h3 className="font-semibold p-4">Premium Umrah Package</h3>
                  <div className="flex justify-between w-full bg-green-900 text-white pl-4 pr-4 pt-2 pb-2 font-semibold">
                    <span>15D / 14N</span>
                    <span>INR 108000</span>
                  </div>

                  <div className="flex p-4 justify-between w-full">
                    <img src="icon.jpg"></img>
                    <span className="text-black">From Delhi</span>
                  </div>

                  <div className="text-center w-full pt-4">
                    <a
                      href="#"
                      className="border border-green-700 pl-5 pr-5 pt-1 pb-1 hover:bg-green-700 hover:text-white rounded-2xl text-sm">
                      View Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-1/4 p-2 pt-0 pb-0">
                <div className=" bg-white pb-8 flex flex-wrap ">
                  <img src="packages-img2.jpg"></img>
                  <h3 className="font-bold p-4">Premium Umrah Package</h3>
                  <div className="flex justify-between w-full bg-green-900 text-white pl-4 pr-4 pt-2 pb-2 font-semibold">
                    <span>15D / 14N</span>
                    <span>INR 108000</span>
                  </div>

                  <div className="flex p-4 justify-between w-full">
                    <img src="icon.jpg"></img>
                    <span className="text-black">From Delhi</span>
                  </div>

                  <div className="text-center w-full pt-4">
                    <a
                      href="#"
                      className="border border-green-700 pl-5 pr-5 pt-1 pb-1 hover:bg-green-700 hover:text-white rounded-2xl text-sm">
                      View Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-1/4 p-2 pt-0 pb-0">
                <div className=" bg-white pb-8 flex flex-wrap ">
                  <img src="packages-img3.jpg"></img>
                  <h3 className="font-semibold p-4">Premium Umrah Package</h3>
                  <div className="flex justify-between w-full bg-green-800 text-white pl-4 pr-4 pt-2 pb-2 font-semibold">
                    <span>15D / 14N</span>
                    <span>INR 108000</span>
                  </div>

                  <div className="flex p-4 justify-between w-full">
                    <img src="icon.jpg"></img>
                    <span className="text-black">From Delhi</span>
                  </div>

                  <div className="text-center w-full pt-4">
                    <a
                      href="#"
                      className="border border-green-700 pl-5 pr-5 pt-1 pb-1 hover:bg-green-700 hover:text-white rounded-2xl text-sm">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cta bg-bottom bg-fixed">
          <div className="container  py-52 mx-auto">
            <div className="text-center">
              <h2 className="text-white font-semibold text-5xl pb-5">
                Adil Travels Choice Best of the Best Experiences
              </h2>
              <p className="text-white pb-5">
                Reference site about Lorem Ipsum, giving information on its
                origins, as well as a random Lipsum generator.
              </p>
              <a href="#" className="bg-white text-black py-2 px-6 rounded-2xl">
                Explore
              </a>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap w-full mb-12">
              <div className="w-full">
                <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Places to visit in Umrah{" "}
                </h2>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
            </div>

            <div className="flex flex-wrap -m-4 mt-10">
              <div className="w-1/4 p-2 pt-0 pb-0">
                <div className=" bg-slate-900 text-white  flex flex-wrap ">
                  <img src="place-img.jpg"></img>
                  <h3 className="font-semibold p-4">Al-Kaaba</h3>
                </div>
              </div>

              <div className="w-1/4 p-2 pt-0 pb-0">
                <div className=" bg-slate-900 text-white flex flex-wrap ">
                  <img src="place-img1.jpg"></img>
                  <h3 className="font-semibold p-4">Jabal-e-Noor</h3>
                </div>
              </div>

              <div className="w-1/4 p-2 pt-0 pb-0">
                <div className=" bg-slate-900 text-white flex flex-wrap ">
                  <img src="place-img2.jpg"></img>
                  <h3 className="font-bold p-4">Mount Arafat</h3>
                </div>
              </div>

              <div className="w-1/4 p-2 pt-0 pb-0">
                <div className=" bg-slate-900 text-white flex flex-wrap ">
                  <img src="place-img3.jpg"></img>
                  <h3 className="font-semibold p-4">Masjid-e-Aisha</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-green-800">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap w-full">
              <div className="w-1/3">
                <h3 className="text-4xl font-thin text-white pb-5">
                  About Adil Travels
                </h3>
                <p className="text-white mt-10">
                  Established in 2000, Adil Travels has since positioned itself
                  as one of the leading companies, providing great offers,
                  competitive airfares, exclusive discounts, and a seamless
                  online booking experience to many of its customers. The
                  experience of booking your flight tickets, hotel stay, and
                  holiday package through our desktop site or mobile app can be
                  done with complete ease and no hassles at all. We also deliver
                  amazing offers, such as Instant Discounts, Fare Calendar,
                  MyRewardsProgram, MyWallet, and many more while updating them
                  from time to time to better suit our customers’ evolving needs
                  and demands.
                </p>
              </div>
              <div className="w-2/3 pl-20">
                <h2 className="text-4xl text-center font-thin text-white pb-5">
                  Why Travel with us?
                </h2>
                <ul className="flex flex-wrap mt-10 justify-evenly text-white">
                  <li className="text-center">
                    <img src="icon1.png" className="inline"></img>
                    <p className="pt-3 m-auto w-2/3 text-sm">
                      WE OFFER DAILY TOURS
                    </p>
                  </li>
                  <li className="text-center">
                    <img src="icon2.png" className="inline"></img>
                    <p className="pt-3 m-auto w-2/3 text-center text-sm">
                      BETTER TOUR ARRANGEMENTS
                    </p>
                  </li>
                  <li className="text-center">
                    <img src="icon3.png" className="inline"></img>
                    <p className="pt-3 m-auto w-2/3 text-center text-sm">
                      HIGHEST STANDARD OF SERVICES
                    </p>
                  </li>
                </ul>

                <ul className="flex flex-wrap mt-10 justify-evenly text-white">
                  <li className="text-center">
                    <img src="icon1.png" className="inline"></img>
                    <p className="pt-3 m-auto w-2/3 text-center text-sm">
                      WE OFFER DAILY TOURS
                    </p>
                  </li>
                  <li className="text-center">
                    <img src="icon2.png" className="inline"></img>
                    <p className="pt-3 m-auto w-2/3 text-center text-sm">
                      BETTER TOUR ARRANGEMENTS
                    </p>
                  </li>
                  <li className="text-center">
                    <img src="icon3.png" className="inline"></img>
                    <p className="pt-3 m-auto w-2/3 text-center text-sm">
                      HIGHEST STANDARD OF SERVICES
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
