import React from 'react'

const index = () => {
  return (
    <>
    {/* ......check components...... */}
    <div className='flex justify-between bg-[#F0f0f0] py-3 px-2'>
                      <p>Login to view your Saved Travellers list, get special offers and more</p>
                      <a href='#' className='text-[#00A852] flex items-center'>Login Now<TbArrowNarrowRight /></a>
                    </div>
                    <p className='text-lg my-3'><b>2 Travellers - 1 Room | 2 Adults</b></p>
                    <div className='p-5 bg-[#F0f0f0]'>
                      <div className='flex justify-between'>
                        <div>
                          <p><b>Add Traveller</b></p>
                          <p className='text-sm'>*ADULT - SHOULD BE ABOVE 18 YEARS</p>
                        </div>
                        <button className='bg-[#6D6D6D] px-9 py-2 text-white rounded-lg'><b>Add</b></button>
                      </div>
                      <div className='bg-white p-2 mt-5'>
                        <div className='grid lg:grid-cols-4 md:grid-cols-1 gap-4'>
                          <div className='flex items-center'>
                            <Image src={'/image505.png'} width={40} height={40} />
                            <div className='mx-2'>
                              <p>Traveller</p>
                              <p><b>Abdullah Khan</b></p>
                            </div>
                          </div>

                          <div>
                            <p>Passport Number: </p>
                            <p>3123131313131313</p>
                          </div>

                          <div>
                            <p>Expiry Date:  </p>
                            <p>12 July 2032</p>
                          </div>

                          <div className='flex cols-span-2 justify-between'>
                            <button className='text-red-600 rounded-md border-red-600	border px-4' >Remove</button>
                            <button className='text-blue-600 rounded-md border-blue-600	border px-4' >update</button>
                          </div>
                        </div>
                      </div>

                      <div className='bg-white p-2 mt-5'>
                        <div className='grid lg:grid-cols-4 md:grid-cols-1 gap-4'>
                          <div className='flex items-center'>
                            <Image src={'/image505.png'} width={40} height={40} />
                            <div className='mx-2'>
                              <p>Traveller</p>
                              <p><b>Abdullah Khan</b></p>
                            </div>
                          </div>

                          <div>
                            
                          </div>

                          <div>
                            
                          </div>

                          <div className='flex cols-span-2 justify-between'>
                            <button className='text-red-600 rounded-md border-red-600	border px-4' >Remove</button>
                            <button className='text-blue-600 rounded-md border-blue-600	border px-4' >update</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ...........end.............. */}
    </>
  )
}

export default index