import React from 'react'

const MovieCard = ({title,poster}) => {

  if(poster=="N/A") return;
  return (
    <div className='min-w-25 md:max-h-[320px] md:min-w-39 '>
        <img className='rounded'  src={poster} alt="poster" />
        <h1 className='text-xs truncate'>{title}</h1>
    </div>
  )
}

export default MovieCard