import React, { useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";

const Header = () => {
  const [isMenueOpen, setMenuOpen] = useState(false)
  const authToken = localStorage.getItem("accessToken")
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();
    cookie.remove("accessToken");
    localStorage.clear();
    router.push(`/login`, undefined, {
      shallow: true,
    })
  }


  return (
    <header className="bg-white">
      <nav className="mx-auto flex  items-center justify-between p-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Company</span>
            <img className="h-8 w-auto" src="/icons/package/Adil Travels.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden" onClick={() => setMenuOpen(!isMenueOpen)}>
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Home</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900"> Umrah & Ziyarah </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Makkah</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Madinah</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Hotels</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Blog</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-around">
        {authToken ? 
          <>
            <button 
            onClick={(e) => {handleLogout(e)}}
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">Logout</a>
            </span>
          </button>
          </>
          :
          <>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">Login/SignUp</a>
            </span>
          </button>
          </>
          }
          {/* <div className="main-login flex justify-end">
            <button className="text-lg font-bold px-5 py-3 rounded-xl	text-[#00A852]" style={{ border: '1px solid #00a852' }}>Plan Your Custom Trip</button>
            <select id="" name="" class="border-0" style={{ width: '25%' }}>
              <option value="">Eng</option>
              <option value="">Premium Economy </option>
              <option value="">Business </option>
              <option value=""> First Class </option>
            </select>
          </div> */}
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div className={`lg:hidden ${!isMenueOpen ? 'hidden' : ''}`} role="dialog" aria-modal="true">
        {/* Background backdrop, show/hide based on slide-over state. */}
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/icons/package/Adil Travels.png" alt="" />
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMenuOpen(!isMenueOpen)}>
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="-mx-3">


                </div>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Umrah & Ziyarah</a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Makkah</a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Madinah</a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Hotels</a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Blog</a>
              </div>
              <div className="py-6">
                <div className="main-login flex justify-start">
                  <button className="text-lg font-bold px-5 py-3 rounded-xl	text-[#00A852]" style={{ border: '1px solid #00a852' }}>Plan Your Custom Trip</button>
                  <select id="" name="" class="border-0" style={{ width: '25%' }}>
                    <option value="">Eng</option>
                    <option value="">Premium Economy </option>
                    <option value="">Business </option>
                    <option value=""> First Class </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


{/* <header className="nav-header bg-black">
      <nav id="header" class="w-full z-30 top-0 pt-4 pb-4 text-white">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div class="pl-4 flex items-center">
            <a
              class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#">
              <svg
                class="h-8 pr-2 fill-current inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.005 512.005">
                <rect
                  fill="#2a2a31"
                  x="16.539"
                  y="425.626"
                  width="479.767"
                  height="50.502"
                  transform="matrix(1,0,0,1,0,0)"
                />
                <path
                  class="plane-take-off"
                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                />
              </svg>
              HAJJ UMRAH
            </a>
          </div>
          <div class="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <svg
                class="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content">
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
              <li class="mr-3">
                <a
                  class="inline-block py-2 px-4 text-white no-underline"
                  href="#">
                  Umrah
                </a>
              </li>
              <li class="mr-3">
                <a
                  class="inline-block text-white no-underline py-2 px-4"
                  href="#">
                  Flights
                </a>
              </li>
              <li class="mr-3">
                <a
                  class="inline-block text-white no-underline  py-2 px-4"
                  href="#">
                  Hotels
                </a>
              </li>
              <li class="mr-3">
                <a
                  class="inline-block text-white no-underline py-2 px-4"
                  href="#">
                  Blog
                </a>
              </li>
              <li class="mr-3">
                <a
                  class="inline-block text-white no-underline  py-2 px-4"
                  href="#">
                  Contact
                </a>
              </li>
              <li class="mr-3">
                <a
                  class="inline-block text-white rounded-xl bg-green-700  hover:text-white-800 py-2 px-4"
                  href="/login">
                  Login / Create Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header> */}
