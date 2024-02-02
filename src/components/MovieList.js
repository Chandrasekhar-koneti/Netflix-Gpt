import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>

      <div className="flex overflow-x-scroll">
        <div className="flex">
          {/* {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))} */}
          {movies?.map((movie) => (
            <Link key={movie.id} to={`/movie-details/${movie.id}`}>
              <MovieCard posterPath={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
