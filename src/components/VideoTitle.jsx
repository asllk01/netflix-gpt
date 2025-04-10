import React from 'react'

const VideoTitle = ({title,year}) => {
  return (
    <div className=' pl-7 h-[80vh] w-screen md:h-screen relative z-30  md:px-22 text-white bg-gradient-to-r from-black'>
      <div className='absolute bottom-64 md:bottom-55'>
        <h1 className=' text-2xl md:text-6xl '>Demon Slayer</h1>
        <p className='md:pl-80 text-xs md:text-[17px]'>{year}</p>
        <div>
            <button className='px-2 py-1 text-xs md:text-base bg-white text-black md:font-semibold md:px-3 md:py-1 hover:scale-95 rounded cursor-pointer'>▶ Play</button>
            <button className='bg-gray-700/40 hidden md:inline md:font-medium text-white text-sl px-3 py-1 rounded ml-2 cursor-pointer'> ⓘ More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle