import React from 'react'

const GptMovieSuggestions = ({title,poster}) => {
  return (
    <div className='text-white z-40 w-40'> 
        <img className='max-h-[200px] rounded ' src={poster} alt="noImg" />
        <p className='text-xs'>{title}</p>
    </div>
  )
}

export default GptMovieSuggestions