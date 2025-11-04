import Link from 'next/link'
import React from 'react'

function Hero2() {
  return (
    <>
      <div className='bg-base-200 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-10 px-6 md:px-12 max-w-6xl mx-auto'>

          <div className='flex-1 text-center md:text-left'>
            <h1 className='text-3xl md:text-5xl font-serif text-blue-950 leading-snug'>
              Check off more <br /> tasks  every week
            </h1>
         <Link href={"/Signup"}>
            <p className='text-black text-md mt-3 cursor-pointer'>
              Create your free account
            </p></Link>
          </div>

  
          <div className='grid grid-cols-2 gap-6 flex-1'>
            <div className="w-full h-36 shadow-sm px-4 py-3 flex flex-col justify-center bg-gray-200 rounded-xl">
              <h1 className='text-center text-blue-500 text-3xl font-bold'>7.6%</h1>
              <p className='text-md text-center'>More productive <br /> hours per week</p>
            </div>

            <div className="w-full h-36 shadow-sm px-4 py-3 flex flex-col justify-center bg-gray-200 rounded-xl">
              <h1 className='text-center text-blue-500 text-3xl font-bold'>4.9%</h1>
              <p className='text-md text-center'>Less time wasted <br /> per week</p>
            </div>

            <div className="w-full h-36 shadow-sm px-4 py-3 flex flex-col justify-center bg-gray-200 rounded-xl">
              <h1 className='text-center text-blue-500 text-3xl font-bold'>9.6%</h1>
              <p className='text-md text-center'>Improved task <br /> completion</p>
            </div>

            <div className="w-full h-36 shadow-sm px-4 py-3 flex flex-col justify-center bg-gray-200 rounded-xl">
              <h1 className='text-center text-blue-500 text-3xl font-bold'>8.6%</h1>
              <p className='text-md text-center'>Less decision paralysis</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Hero2
