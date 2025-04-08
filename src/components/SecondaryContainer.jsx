import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className=' bg-black/96 '>
     <div className='-mt-38 relative z-30'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies?.slice(0,13)} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies?.slice(10,24)} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies?.slice(20)} />
     </div>
    </div>
  )
}

export default SecondaryContainer