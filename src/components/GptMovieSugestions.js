import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSugestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  return (
    <div>
      <div className="p-4 my-4 bg-black text-white bg-opacity-90">
        {movieNames?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSugestions;
