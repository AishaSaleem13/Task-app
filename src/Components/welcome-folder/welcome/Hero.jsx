"use client"
import React from 'react'
import Stack from './Stack'
import TextType from './TextType'

function Hero() {
  const images = [
    { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
    { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
    { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
    { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
  ];

  return (
    <>
      <div className='bg-[#ACB0BD] min-h-[85vh] w-full shadow-xl'>

        {/* Navbar */}
        <div className='container mx-auto flex flex-wrap items-center justify-between px-6 py-5'>
          <div className='flex items-center gap-2'>
            <h1 className='font-serif text-2xl md:text-3xl text-[#FFCBA4]'>Taskim</h1>
            <img src="notepad.jpg" alt="logo" className='w-9 h-9 md:w-11 md:h-11' />
          </div>

          <ul className='hidden md:flex flex-1 justify-center gap-6 text-[#F5F5F5] text-sm md:text-base font-mono'>
            <li className='cursor-pointer hover:text-[#FFCBA4] transition-colors'>Teams</li>
            <li className='cursor-pointer hover:text-[#FFCBA4] transition-colors'>Sales</li>
            <li className='cursor-pointer hover:text-[#FFCBA4] transition-colors'>Prices</li>
            <li className='cursor-pointer hover:text-[#FFCBA4] transition-colors'>Contact</li>
          </ul>

          <div className='hidden md:flex gap-3 md:gap-4'>
            <button className='rounded-lg md:rounded-xl px-4 md:px-6 py-2 bg-[#FFCBA4] hover:bg-[#FFD5A4] transition-colors text-[#2D2D2D]'>
              Login
            </button>
            <button className='rounded-lg md:rounded-xl px-4 md:px-6 py-2 bg-[#FFCBA4] hover:bg-[#FFD5A4] transition-colors text-[#2D2D2D]'>
              Signup
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className='flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 mt-10 md:mt-20 gap-10 md:gap-16'>

          <div className='flex flex-col flex-1 items-start justify-center text-left max-w-lg'>
            <h1 className='text-3xl md:text-5xl text-[#F5F5F5] font-serif'>
              Taskim.
            </h1>

            <div className='flex flex-wrap items-center mt-3'>
              <TextType
                text={[`The Productive Task `]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter=""
                className="text-2xl md:text-4xl font-sans"
              />
              <TextType
                text={[`manager app`]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-2xl md:text-4xl font-sans pl-2"
              />
              <img src="note.png" alt="note" className='w-6 h-6 md:w-8 md:h-8 ml-2 mt-1' />
            </div>

            <h3 className='mt-3 text-sm md:text-lg text-[#2D2D2D]'>
              Boost your productivity on the go with Taskim.
            </h3>

            <button className='mt-6 rounded-lg md:rounded-xl px-5 md:px-6 py-2 bg-[#FFCBA4] hover:bg-[#FFD5A4] transition-colors text-[#2D2D2D] font-medium'>
              Get Started
            </button>
          </div>

          <div className='flex flex-1 justify-center items-center'>
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 260, height: 260 }}
              cardsData={images}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
