import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div className='min-w-screen '>
      <Header/>
      <div className=''>
        <MainContainer/>
        <SecondaryContainer/>
      </div>
    </div>
  )
}

export default Browse