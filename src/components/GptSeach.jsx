import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constant'
import { useSelector } from 'react-redux'

const GptSeach = () => {
    const movies = useSelector(store => store.movies.gptSearchedMovies);
    

    
  return (
    <div className='overflow-hidden'>
      <img  className=' fixed -z-10 h-screen object-cover min-w-[700px] w-screen scale-135 brightness-60' src= {BG_URL} alt="bg" />
     <div className='absolute top-0 left-0 w-full h-full'>
       <GptSearchBar/>
        
        <div className=' flex gap-1 md:gap-3 md:px-15 px-1 mt-8 flex-wrap'>

            { movies!=null ? movies.map((movie)=>{
                 return   <GptMovieSuggestions key={movie.Title} title={movie.Title} poster={movie.Poster} />
             })
            : <h1 className='text-white'>...</h1>}

         </div> 
        
     </div>
       
    </div>
  )
}

export default GptSeach