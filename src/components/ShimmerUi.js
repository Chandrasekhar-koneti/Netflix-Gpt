import React from "react";

const ShimmerUI = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-wrap justify-center">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 w-300 h-500 rounded-md shadow-md mx-4 my-4 animate-pulse"
          >
            {/* Shimmer effect */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerUI;
