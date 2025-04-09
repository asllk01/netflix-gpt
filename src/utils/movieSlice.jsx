import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState:{
        nowPlayingMovies: null,
        gptSearchedMovies: null,
    },
    reducers: {
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addGptSearchedMovies : (state,action)=>{
            state.gptSearchedMovies = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addGptSearchedMovies} = moviesSlice.actions;

export default moviesSlice.reducer;