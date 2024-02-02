import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSugestions from "./GptMovieSugestions";
import mainimage from "./Assets/mainimage.jpg";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const movieSuugestions = useSelector((store) => store.gpt.movieResults);
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          className="h-screen object-cover md:h-screen md:w-screen"
          src={mainimage}
          alt="mainimage"
        />
      </div>
      <div className=" ">
        <GptSearchBar />
        {movieSuugestions && <GptMovieSugestions />}
      </div>
    </>
  );
};

export default GptSearch;
