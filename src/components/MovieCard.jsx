import React from 'react'

const MovieCard = ({title,poster}) => {
  return (
    <div className=' max-h-[320px] min-w-44 '>
        <img className=''  src={poster} alt="poster" />
        <h1 className='text-xs truncate'>{title}</h1>
    </div>
  )
}

export default MovieCard