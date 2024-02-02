import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../../utils/movieSlice";
import { API_OPTIONS } from "../../utils/constants";

const useUpcoming = () => {
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpcoming;
