import React, { useEffect } from 'react'
import { API_KEY } from '../utils/constant';
import { useDispatch } from 'react-redux';

const useGptSearchBar = (text="ai") => {
    console.log(text);
    
    const dispatch = useDispatch();

  const getGptSearchedMovies = async () => {
      const data1 = await fetch("https://www.omdbapi.com/?s="+text+"&"+API_KEY+"&page=1");
      const json = await data1.json();
      console.log(json);
      
  }

  useEffect(()=>{
        getGptSearchedMovies();
  }, [])
}

export default useGptSearchBar