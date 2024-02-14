import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  return (
    <div className="px-4 relative">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>

      <div className="flex overflow-x-auto no-scrollbar" ref={scrollRef}>
        {movies?.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 mr-4">
            <Link to={`/movie-details/${movie.id}`}>
              <MovieCard posterPath={movie.poster_path} />
            </Link>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0"
        onClick={scrollLeft}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0"
        onClick={scrollRight}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default MovieList;
