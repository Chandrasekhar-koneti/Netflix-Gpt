import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "./customhooks/useNowPlayingMovies copy";
import usePopularMovies from "./customhooks/usePopularMovies copy";
import useTopRated from "./customhooks/useTopRated";
import useUpcoming from "./customhooks/useUpcoming";
import useTv from "./customhooks/useTv";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  useTv();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
