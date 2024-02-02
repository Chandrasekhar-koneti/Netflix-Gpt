import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-Us`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailer = json.results.find((video) => video.type === "Trailer");
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
