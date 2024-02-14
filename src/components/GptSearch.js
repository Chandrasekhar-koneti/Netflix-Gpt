import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSugestions from "./GptMovieSugestions";
import mainimage from "./Assets/mainimage.jpg";
import { useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";

const GptSearch = () => {
  const movieSuugestions = useSelector((store) => store.gpt.movieResults);
  const loader = useSelector((store) => store.gpt.loadingState);

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
        {movieSuugestions && !loader && <GptMovieSugestions />}
        {loader && (
          <div className="flex items-center justify-center p-10">
            <ColorRing
              visible={true}
              height="160"
              width="160"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#007bff", "#3498db", "#7fb3d5", "#b8d7e9", "#cfeaf5"]}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default GptSearch;
