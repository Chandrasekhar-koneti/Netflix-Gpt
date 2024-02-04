import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    loadingState: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    fetchingResults: (state, action) => {
      state.loadingState = action.payload;
    },
  },
});
export const { toggleGptSearchView, addGptMovieResult, fetchingResults } =
  gptSlice.actions;
export default gptSlice.reducer;
