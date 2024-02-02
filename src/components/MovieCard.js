import React from "react";
import { IMGCDNURL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className=" w-36 md:w-48 pr-4">
      <img alt="" src={IMGCDNURL + posterPath} />
    </div>
  );
};

export default MovieCard;
