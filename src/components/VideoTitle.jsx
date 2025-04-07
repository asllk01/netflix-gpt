import React from 'react'

const VideoTitle = ({title,year}) => {
  return (
    <div className='w-screen h-[711px] pt-116 px-22 text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl '>{title}</h1>
        <p className='pl-90 text-[17px]'>{year}</p>
        <div>
            <button className='bg-white text-black font-semibold px-3 py-1 hover:scale-95 rounded cursor-pointer'>▶️ Play</button>
            <button className='bg-gray-700/40 font-medium text-white text-sl px-3 py-1 rounded ml-2 cursor-pointer'> ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle