import React from "react";

const Action = () => {
  return (
    <div
      className="w-full bg-teal-50"
    //   style="background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;"
    >
      <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
        <h1 className="text-3xl antialiased font-semibold text-center text-gray-800">
          Get Our Updates
        </h1>
        <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-800">
          Find out about events and other news going on with us.
        </p>
        <div className="flex justify-center items-center">
         
          <button
            type="button"
            className="w-3/5 p-3 font-semibold rounded-lg sm:w-1/3 bg-teal-400 text-gray-100 hover:opacity-80 duration-700"
          >
            Facebook Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Action;
