import React from 'react'

const index = () => {
  return (
    <>
      <section className='relative'>
        <div class="container-fluid p-0 w-full">
          <div>
            <img style={{ maxHeight: "650px" }} className='w-full px-15 mx-auto'
              src='/Header-img/kaba-bg.jpg' />
          </div>

          
        </div>
      </section>

      <section style={{ padding: "70px" }}>
        <div className='shadow-md text-center mb-10  pb-20 px-20'>
          <h2 className='text-black text-30 font-bold font-monstrate mb-5'>A Glimpse into Mecca's History</h2>
          <p>With a history dating back thousands of years, Mecca has witnessed the rise and fall of civilizations, serving as a vital center for trade and commerce long before the advent of Islam. According to Islamic tradition, it was here in Mecca that the Prophet Muhammad received the divine revelation of the Quran, transforming the city into the spiritual epicenter of the Islamic faith.</p>
        </div>


        <div className='container w-full px-15 mx-auto'>
          <div className='text-gray-600 font-nunito-sans text-base leading-7 font-normal break-words box-border'>
            <div className='row'>
              <div className='grid grid-cols-12'>
                <div className='col-span-6'>
                  <div className=' w-400 ml-50'>
                    <img style={{ height: "400px",width:"450px"}} className=''
                      src='/Header-img/makkah.jpg' />
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className=''>
                    <h2 className='text-black text-30 font-bold font-monstrate mb-5'>A The Kaaba</h2>
                    <p>Central to Mecca's allure is the majestic Kaaba, a cube-shaped structure located within the confines of the Masjid al-Haram, Islam's holiest mosque. Believed to have been built by the Prophet Ibrahim (Abraham) and his son Isma'il (Ishmael), the Kaaba serves as the focal point of Muslim prayer and the ultimate destination for pilgrims during their journey to Mecca.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='container w-full px-15 mx-auto mt-20'>
          <div className='text-gray-600 font-nunito-sans text-base leading-7 font-normal break-words box-border'>
            <div className='row'>
              <div className='grid grid-cols-12'>

                <div className='col-span-6'>
                  <div className=''>
                    <h2 className='text-black text-30 font-bold font-monstrate mb-5'> The Hajj Pilgrimage</h2>
                    <p>Mecca is perhaps most renowned for hosting the annual Hajj pilgrimage, a fundamental pillar of Islam that draws millions of pilgrims from diverse backgrounds to partake in a series of rituals commemorating the experiences of the Prophet Ibrahim and his family. From the Tawaf, circling the Kaaba seven times in a counterclockwise direction, to the symbolic stoning of the Devil at Mina, each ritual holds profound spiritual significance for Muslims worldwide.</p>
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className=' w-400 '>
                    <img style={{ height: "400px", marginLeft: "180px",width:"450px"}} className=''
                      src='/Header-img/hajj.jpg' />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='container w-full px-15 mx-auto mt-20'>
          <div className='text-gray-600 font-nunito-sans text-base leading-7 font-normal break-words box-border'>
            <div className='row'>
              <div className='grid grid-cols-12'>
                <div className='col-span-6'>
                  <div className=' w-400 ml-50'>
                    <img style={{  height: "400px",width:"450px"}} className=''
                      src='/Header-img/umrah.jpg' />
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className=''>
                    <h2 className='text-black text-30 font-bold font-monstrate mb-5'>Umrah</h2>
                    <p>In addition to the Hajj pilgrimage, Mecca welcomes countless pilgrims throughout the year who undertake the Umrah, a lesser pilgrimage that can be performed at any time. While the rituals of Umrah are similar to those of Hajj, the pilgrimage offers a more intimate and reflective experience for individuals seeking spiritual renewal and closeness to the Divine.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default index
