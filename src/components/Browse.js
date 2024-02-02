import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "./customhooks/useNowPlayingMovies copy";
import usePopularMovies from "./customhooks/usePopularMovies ";
import useTopRated from "./customhooks/useTopRated";
import useUpcoming from "./customhooks/useUpcoming";
import useTv from "./customhooks/useTv";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  useTv();
  return (
    <div>
      <Header />

      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
