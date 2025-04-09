import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSeach from './GptSeach';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  
  useNowPlayingMovies();

  

  return (
    <div className='min-w-screen '>
      <Header/>
      {
        showGptSearch ? <GptSeach/> : <><MainContainer/>
      <SecondaryContainer/></>
      }
      
    </div>
  )
}

export default Browse