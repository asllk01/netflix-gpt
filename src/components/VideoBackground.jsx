import React from 'react'
import VideoFile from '../assets/video.mp4'

const VideoBackground = () => {
  return (
    <div className=' min-w-screen max-h-screen top-0 left-0 absolute z-10 overflow-hidden '>
       <video
       
        autoPlay
        loop
        muted
        className="min-w-[100%]  "
       >
        <source  src={VideoFile} type="video/mp4" />
        Your browser does not support the video tag.
       </video>   
    </div>

    
  )
}

export default VideoBackground