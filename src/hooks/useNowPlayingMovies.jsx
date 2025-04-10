import { useEffect } from "react";
import { API_KEY} from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import {addNowPlayingMovies} from "../utils/movieSlice"




const useNowPlayingMovies = ()=>{
     // fetch data from omdb api and update store
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

  const getNowPlayingMovies = async () => {
    const data1 = await fetch("https://www.omdbapi.com/?s=marvel&"+API_KEY+"&page=1");
    const json = await data1.json();
    const datam = await fetch("https://www.omdbapi.com/?s=money heist&"+API_KEY+"&page=1");
    const jsonm = await datam.json();
    const data2 = await fetch(
      "https://www.omdbapi.com/?s=spider&"+API_KEY+"&page=1"
    )
    const json2 = await data2.json();
    const allMovie = [];
    allMovie.push(...json.Search);
    console.log(jsonm.Search.slice(0,4));
    
    allMovie.splice(2,0,...jsonm.Search.slice(0,4));
    if(json2.Response=="True"){allMovie.push(...json2.Search)}
    const data3 = await fetch(
      "https://www.omdbapi.com/?s=dead&"+API_KEY+"&page=1"
    )
    const json3 = await data3.json();
    if( json3.Response=="True"){allMovie.push(...json3.Search)}
    console.log(allMovie);
    dispatch(addNowPlayingMovies(allMovie));
  };
  
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;