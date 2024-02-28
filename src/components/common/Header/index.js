import React from "react";

const Header = () => {
  return (
   <header>
    <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-1 py-5 bg-white">
      <div className="main-logo pt-2 grid justify-items-center" style={{textalign: '-webkit-center'}}><img src="icons/package/Adil Travels.png" style={{width: '50%'}} className="cursor-pointer"/></div>

      <div className="main-nav col-span-2 grid items-center	">
        <nav>
          <ul className="flex justify-around items-center">
            <li className="cursor-pointer	text-lg">Home</li>
            <li className="cursor-pointer	text-lg">Umrah & Ziyarah </li>
            <li className="cursor-pointer	text-lg">Makkah</li>
            <li className="cursor-pointer	text-lg">Madinah</li>
            <li className="cursor-pointer	text-lg">Hotels</li>
            <li className="cursor-pointer	text-lg">Blog</li>
          </ul>
        </nav>
      </div>

      <div className="main-login flex justify-center">
        <button className="text-lg font-bold px-5 py-3 rounded-xl	text-[#00A852]" style={{ border: '1px solid #00a852'}}>Plan Your Custom Trip</button>
        <select id="" name="" class="border-0" style={{width:'25%'}}>
                  <option value="">Eng</option>
                  <option value="">Premium Economy </option>
                  <option value="">Business </option>
                  <option value=""> First Class </option>
                </select>
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
