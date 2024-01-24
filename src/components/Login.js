import React, { useState } from "react";
import Header from "./Header";
import mainimage from "./Assets/mainimage.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInHandle = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={mainimage} alt="mainimage" />
      </div>
      <form className="p-12 absolute w-3/12  bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <button className="my-4 p-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInHandle}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
