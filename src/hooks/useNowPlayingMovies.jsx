import { useEffect } from "react";
import { API_KEY, API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import {addNowPlayingMovies} from "../utils/movieSlice"




const useNowPlayingMovies = ()=>{
     // fetch data from omdb api and update store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data1 = await fetch("https://www.omdbapi.com/?s=marvel&"+API_KEY+"&page=1", API_OPTIONS );
    const json = await data1.json();
    const data2 = await fetch(
      "https://www.omdbapi.com/?s=marvel&"+API_KEY+"&page=2"
    )
    const json2 = await data2.json();
    const allMovie = [];
    allMovie.push(...json.Search);
    if(json2.Response=="True"){allMovie.push(...json2.Search)}
    console.log(allMovie);
    dispatch(addNowPlayingMovies(allMovie));
  };
  
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;