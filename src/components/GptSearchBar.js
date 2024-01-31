import React from "react";
import { lang } from "../utils/langConst";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const config = useSelector((store) => store.config.lang);
  console.log(config);
  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[config].gptSearchText}
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-md col-span-3 m-4">
          {lang[config].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
