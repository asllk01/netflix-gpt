import React from 'react'

const GptMovieSuggestions = ({title,poster}) => {
  if(poster== "N/A") return;
  return (
    <div className='text-white z-40 md:w-40 w-21'> 
        <img className='max-h-[200px] rounded ' src={poster} alt="noImg" />
        <p className='text-xs'>{title}</p>
    </div>
  )
}

export default GptMovieSuggestions