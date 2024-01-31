import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSugestions from "./GptMovieSugestions";
import mainimage from "./Assets/mainimage.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 ">
        <img src={mainimage} alt="mainimage" />
      </div>
      <GptSearchBar />
      <GptMovieSugestions />
    </div>
  );
};

export default GptSearch;
