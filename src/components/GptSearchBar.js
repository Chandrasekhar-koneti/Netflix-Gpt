import React, { useRef } from "react";
import { lang } from "../utils/langConst";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, fetchingResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchTextRef = useRef(null);
  const config = useSelector((store) => store.config.lang);

  const searchMoviesFromTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",

      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchButton = async () => {
    dispatch(fetchingResults(true));
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchTextRef.current.value +
      "only give me names of  6 movies, comma separated like the example result given ahead. Example Result: sahoo,salaar,Kartikeya2,Bahubali1,Bahubali2,RRR";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
    const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMoviesFromTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    if (tmdbResults) {
      dispatch(fetchingResults(false));
    }
  };

  return (
    <div className="pt-[45%] sm:pt-[18%] md:pt-[15%] flex justify-center">
      <form
        className=" w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[config].gptSearchText}
          ref={searchTextRef}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-md col-span-3 m-4"
          onClick={handleGptSearchButton}
        >
          {lang[config].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
