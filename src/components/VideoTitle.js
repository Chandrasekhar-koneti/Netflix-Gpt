import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black py-3 px-14 text-xl  rounded-lg hover:bg-opacity-80 ">
          <p>
            <span className="flex items-center text-center font-bold">
              <FaPlay className="mr-1" />
              Play
            </span>
          </p>
        </button>
        <button className="mx-2 bg-gray-500 text-white py-3 px-12 text-xl bg-opacity-50 rounded-lg ">
          <span className="flex items-center text-center font-bold">
            <IoIosInformationCircleOutline className="mr-1 " />
            More Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
