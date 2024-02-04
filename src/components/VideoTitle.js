import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] sm:pt-[10%] md:pt-[10%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden sm:inline-block sm:text-xs md:inline-block py-6 md:text-lg sm:w-1/2 md:w-1/2">
        {overview}
      </p>
      <div className="my-3 md:my-0">
        <button className="bg-white text-black  py-1 md:py-3 px-5 md:px-14 text-xl  rounded-lg hover:bg-opacity-80 ">
          <p>
            <span className="flex items-center text-center font-bold">
              <FaPlay className="mr-1" />
              Play
            </span>
          </p>
        </button>
        <button className="mx-2 bg-gray-500 text-white py-1 md:py-3 px-4 md:px-12 text-xl bg-opacity-50 rounded-lg ">
          <span className=" flex items-center text-center font-bold">
            <IoIosInformationCircleOutline className="mr-1 " />
            More Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
