import React, { useRef } from 'react'
// import openai from '../utils/openai';
import useGptSearchBar from '../hooks/useGptSearchBar';
import { API_KEY } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addGptSearchedMovies } from '../utils/movieSlice';

const GptSearchBar = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();


    // this is for open ai api 
    // const handleGptSearchClick = async ()=>{
    //     console.log(searchText.current.value);
    //     // make api call to get movie result 

    //     const gptQuery = "Act as a Movie Recomendation system and sugges some movie for the query" + searchText.current.value + ". only give me names of 5 movies , comma seperated like the examle result given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya"

    //     const gptResults = await openai.chat.completions.create({
    //         messages: [{role: "user", content: gptQuery}],
    //         model: "gpt-3.5-turbo"
    //     })

    //     console.log(gptResults.choices);    
    // }

    const handleGptSearchClick = async(search='don') =>{

        const data1 = await fetch("https://www.omdbapi.com/?s="+searchText?.current?.value+"&"+API_KEY+"&page=1&type=movie");
              const json = await data1.json();
              console.log(json.Search);
              dispatch(addGptSearchedMovies(json?.Search));
        searchText.current.value="";

              
    }

  return (
    <div className='flex pt-29 justify-center '>
        <div className=' bg-black  py-5 pl-5 w-full sm:w-[90%]  md:w-2/4 text-white'>
            <form onSubmit={(e)=> e.preventDefault()}>
             <input ref={searchText} className='px-3 py-1 w-[63%] md:w-[80%] md:px-3 md:py-3 text-black bg-white/90 rounded' type="text" placeholder='What would you like to watch today:?' />
             <button className='bg-red-700 px-3 py-1  md:px-7 md:py-3  rounded ml-5 cursor-pointer' onClick={handleGptSearchClick}>Search</button>
            </form>
        </div>
    </div>
  )
}

export default GptSearchBar