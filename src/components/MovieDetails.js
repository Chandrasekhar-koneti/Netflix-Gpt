import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import HeaderMovieDetails from "./HeaderMovieDetails";

const MovieDetails = () => {
  const { id } = useParams();
  const movies = useSelector((store) => store.movies);
  const gptMovies = useSelector((store) => store.gpt.movies);

  const movie = (() => {
    for (const category in movies) {
      if (movies[category] && movies[category].find) {
        const foundMovie = movies[category].find(
          (movie) => movie.id === parseInt(id)
        );
        if (foundMovie) return foundMovie;
      }
    }
    return null;
  })();
  const gptMovie = (() => {
    for (const category in gptMovies) {
      if (gptMovies[category] && gptMovies[category].find) {
        const foundMovie = gptMovies[category].find(
          (movie) => movie.id === parseInt(id)
        );
        if (foundMovie) return foundMovie;
      }
    }
    return null;
  })();

  if (!movie && !gptMovie) {
    return null;
  }

  return (
    <>
      <HeaderMovieDetails className="mt-0" />

      <div className="m-0 px-10 md:mx-56 md:my-12">
        <h1 className="text-xl font-bold my-2">{movie.title}</h1>
        <MovieCard posterPath={movie.poster_path} />
        <p className="my-2 w-3/4 sm:w-3/4 md:w-3/4 text-justify">
          <span className="font-bold">About Movie: </span>
          {movie.overview}
        </p>
        <p>
          <span className="font-bold">Release Date: </span>
          {movie.release_date}
        </p>
      </div>
    </>
  );
};

export default MovieDetails;
