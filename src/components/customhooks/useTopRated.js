import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../../utils/movieSlice";
import { API_OPTIONS } from "../../utils/constants";

const useTopRated = () => {
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRated;
