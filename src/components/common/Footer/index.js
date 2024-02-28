import React from 'react'

 const Footer = () => {
  return (

    <footer className='bg-[#06603C] py-10'>
    <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-1 py-10 px-10 bg-[#06603C] text-white">
      <div className="" >
        <img src="icons/package/Adil Travels-white.png" style={{width: '50%'}} className="cursor-pointer pb-5"/>
        <p className='pr-10 text-lg leading-8'>MakeMyTrip has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience .</p>
        <div className='flex mt-5'>
        <img src="icons/package/fb-img.png" style={{width: '13%'}} className="cursor-pointer"/>
        <img src="icons/package/twit-img.png" style={{width: '13%'}} className="cursor-pointer ml-5"/>
        <img src="icons/package/insta-img.png" style={{width: '13%'}} className="cursor-pointer ml-5"/>
        <img src="icons/package/youtube-img.png" style={{width: '13%'}} className="cursor-pointer ml-5"/>
        </div>
        </div>

      <div className="main-nav col-span-2 ">
        <nav className='flex justify-evenly	'>
          <ul className="">
            <p className="font-semibold	 leading-10 text-xl">Quick Links</p>
            <li className="cursor-pointer	text-lg">Home</li>
            <li className="cursor-pointer	text-lg">Privacy Policy </li>
            <li className="cursor-pointer	text-lg">FAQs</li>
            <li className="cursor-pointer	text-lg">Contact Us</li>
            <li className="cursor-pointer	text-lg">Terms Of Use</li>
          </ul>

          <ul className="">
            <p className="font-semibold	 leading-10 text-xl">Company</p>
            <li className="cursor-pointer	text-lg">Blogs</li>
            <li className="cursor-pointer	text-lg">About Us</li>
            <li className="cursor-pointer	text-lg">Careers</li>
          </ul>

          <ul className="">
            <p className="font-semibold	 leading-10 text-xl">Resources</p>
            <li className="cursor-pointer	text-lg">Umrah Packages</li>
            <li className="cursor-pointer	text-lg">Ramadan Packages </li>
            <li className="cursor-pointer	text-lg">Hotels</li>
            <li className="cursor-pointer	text-lg">Destinations</li>
          </ul>
        </nav>
      </div>

      <div className="">
        <p className="font-semibold	 text-2xl">Stay up to Date</p>
        <p className="text-lg">Subscribe now and receive the latest travel news.</p>
        <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  required=""
                  value=""
                  className="bg-white rounded-lg	mt-4"
                ></input>
        <button className="text-xl bg-[#00A852] rounded-lg px-8 py-3 mt-4">Subscribe</button>        
      </div>

      
    </div>
    <hr class="h-px  bg-black border-0 w-full dark:bg-black" />
    <p className='px-10 text-white text-xl py-5'>© 2024, Adil Travel</p>
   </footer>


    
  )
}

export default Footer

    
    
    
  //   <footer className="text-gray-600 body-font">
  //   <div className="container px-5 py-24 mx-auto">
  //     <div className="flex flex-wrap md:text-left text-center order-first">
  //       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
  //         <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
  //         <nav className="list-none mb-10">
  //           <li>
  //             <a className="text-gray-600 hover:text-gray-800">First Link</a>
  //           </li>
  //           <li>
  //             <a className="text-gray-600 hover:text-gray-800">Second Link</a>
  //           </li>
  //           <li>
  //             <a className="text-gray-600 hover:text-gray-800">Third Link</a>
  //           </li>
  //           <li>
  //             <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
  //           </li>
  //         </nav>
  //       </div>
  //       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
  //         <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
  //         <nav className="list-none mb-10">
  //           <li>
  //             <a className="text-gray-600 hover:text-gray-800">First Link</a>
  //           </li>
  //           <li>
  //             <a className="text-gray-600 hover:text-gray-800">Second Link</a>
  //           </li>
  //           <li>
  //             <a className="text-gray-600 hover:text-gray-800">Third Link</a>
  //           </li>
  //           <li>
  //             <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
  //           </li>
  //         </nav>
  //       </div>
  //       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
  //         <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
  //         <nav className="list-none mb-10">
  //           <li>
  //             <a className="text-gray-600 hover:text-gray-800">First Link</a>
  //           </li>
  //           <li>
  //             <a className="text-gray-600 hover:text-gray-800">Second Link</a>
  //           </li>
  //           <li>
  //             <a className="text-gray-600 hover:text-gray-800">Third Link</a>
  //           </li>
  //           <li>
  //             <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
  //           </li>
  //         </nav>
  //       </div>
  //       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
  //         <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
  //         <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
  //           <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
  //             <label for="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
  //             <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
  //           </div>
  //           <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
  //         </div>
  //         <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
    
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="bg-gray-100">
  //     <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
  //       <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          
  //         <span className="ml-3 text-xl">HAJJ UMRAH</span>
  //       </a>
  //       <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 Hajj Umrah —
  //         <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@IndicSoft</a>
  //       </p>
  //       <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
  //         <a className="text-gray-500">
  //           <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
  //             <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
  //           </svg>
  //         </a>
  //         <a className="ml-3 text-gray-500">
  //           <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
  //             <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
  //           </svg>
  //         </a>
  //         <a className="ml-3 text-gray-500">
  //           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
  //             <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
  //             <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
  //           </svg>
  //         </a>
  //         <a className="ml-3 text-gray-500">
  //           <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
  //             <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
  //             <circle cx="4" cy="4" r="2" stroke="none"></circle>
  //           </svg>
  //         </a>
  //       </span>
  //     </div>
  //   </div>
  // </footer>