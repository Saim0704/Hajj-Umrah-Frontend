import React from 'react'

const index = () => {
  return (
    <>
      <section className='relative'>
        <div class="container-fluid p-0 w-full">
          <div>
            <img style={{ maxHeight: "650px" }} className='w-full px-15 mx-auto'
              src='/Header-img/madina-bg.jpg' />
          </div>

          
        </div>
      </section>

      <section style={{ padding: "70px" }}>
        <div className='shadow-md text-center mb-10  pb-20 px-20'>
          <h2 className='text-black text-30 font-bold font-monstrate mb-5'>Welcome to Madina: The City of the Prophet</h2>
          <p>Madina, also known as Medina, holds a significant place in the hearts of Muslims worldwide. As the second holiest city in Islam, after Mecca, Madina is revered for its historical and spiritual importance. It was here that the Prophet Muhammad (peace be upon him) migrated to, and where he established the first Islamic community.</p>
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
                    <h2 className='text-black text-30 font-bold font-monstrate mb-5'>Cultural Delights</h2>
                    <p>Beyond its religious significance, Madina boasts a vibrant cultural scene. From bustling marketplaces selling traditional handicrafts and aromatic spices to mouthwatering local cuisine, the city offers a sensory experience like no other. Visitors can immerse themselves in the vibrant tapestry of Madinan culture and hospitality.</p>
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
                    <h2 className='text-black text-30 font-bold font-monstrate mb-5'> History and Heritage</h2>
                    <p>Madina's rich history dates back over 1,400 years, steeped in the traditions of Islam. It served as the capital of the early Muslim community and witnessed the development of Islam as a way of life. The city's numerous historical sites, such as the Quba Mosque, Al-Masjid an-Nabawi (the Prophet's Mosque), and the site of the Battle of Badr, offer visitors a glimpse into its glorious past.</p>
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className=' w-400 '>
                    <img style={{ height: "400px", marginLeft: "180px",width:"450px"}} className=''
                      src='/Header-img/history.jpg' />
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
                      src='/Header-img/significient.jpg' />
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className=''>
                    <h2 className='text-black text-30 font-bold font-monstrate mb-5'>Spiritual Significance</h2>
                    <p>For Muslims, visiting Madina is an integral part of their faith journey. Al-Masjid an-Nabawi, one of the largest mosques in the world, is the final resting place of Prophet Muhammad (peace be upon him). Pilgrims from around the globe flock to this sacred site to offer prayers and seek blessings.</p>
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
