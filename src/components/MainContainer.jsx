import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector(store=> store.movies?.nowPlayingMovies);
  if(!movies) return;
  
  const mainMovie = movies[0];
  const {Title,Year} = mainMovie;
  console.log(Title,Year);
  
  
  return (
    <div>
        <VideoTitle title={Title} year={Year}/>
        <VideoBackground/>
    </div>
  )
}

export default MainContainer