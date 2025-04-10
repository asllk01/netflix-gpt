import React from 'react'
import VideoFile from '../assets/video.mp4'

const VideoBackground = () => {
  return (
    <div className='top-30 min-w-screen md:min-w-screen md:max-h-screen md:top-0 md:left-0 absolute z-10  '>
       <video
       
        autoPlay
        loop
        muted
        className="min-w-screen  "
       >
        <source  src={VideoFile} type="video/mp4" />
        Your browser does not support the video tag.
       </video>   
    </div>

    
  )
}

export default VideoBackground