import React from 'react'

function Hero04() {
  return (
    <>
      <div className="bg-[#416165] h-[60vh] flex flex-col justify-center items-start px-6 md:px-16 text-white">
        {/* ✅ Heading */}
        <h1 className="text-3xl md:text-5xl font-serif tracking-tight leading-snug mb-6">
          Which Task Will You <br /> Schedule First?
        </h1>
        <button
          type="button"
          className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300"
        >
          Get Started With Tasks
        </button>
      </div>
    </>
  )
}

export default Hero04
