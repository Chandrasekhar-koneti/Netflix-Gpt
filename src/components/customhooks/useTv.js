import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTv } from "../../utils/movieSlice";
import { API_OPTIONS } from "../../utils/constants";

const useTv = () => {
  const Tv = useSelector((store) => store.movies.Tv);
  const dispatch = useDispatch();
  const getTv = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/tv ",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTv(json.results));
  };
  useEffect(() => {
    !Tv && getTv();
  }, []);
};

export default useTv;
