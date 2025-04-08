import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies);

    if(movies==null) return "hi";
    
  return (
    <div className='pl-10 pt-2 text-white'>
        <h1 className='mb-3 text-xl font-semibold font-[cursive]'>{title}</h1>
        <div className='flex gap-3 overflow-x-auto  overflow-y-hidden '  style={{
          scrollbarWidth: 'none'
        }}>
         {movies.map((movie)=>{
            return (
                 <MovieCard key={movie.imdbID+Math.random()} title={movie.Title}  poster={movie.Poster} /> 
            )
            })}
        </div>
    </div>
  )
}

export default MovieList