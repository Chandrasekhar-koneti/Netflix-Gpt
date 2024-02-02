import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    <div className="bg-black">
      <div className="mt-0 sm:-mt-30 md:-mt-[20%] pl-4 md:pl-12 relative z-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="TV" movies={movies.Tv} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Up Coming" movies={movies.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
