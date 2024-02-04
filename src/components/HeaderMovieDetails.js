import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Logo } from "../utils/constants";

const HeaderMovieDetails = () => {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearchClick = () => {
    navigate("/browse");
  };

  return (
    <div className=" w-screen px-8 py-2 bg-gradient-to-b   from-black z-10  flex flex-col sm:flex-row sm:justify-between md:flex-row md:justify-between justify-between">
      <img className="w-44 mx-auto sm:mx-0 md:mx-0" src={Logo} alt="logo" />
      {user && (
        <div className="flex justify-between p-2">
          <button
            className="py-2 px-4 my-2 mx-4 bg-purple-800 text-white rounded-md hover:bg-opacity-70"
            onClick={handleGptSearchClick}
          >
            Home
          </button>

          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderMovieDetails;
