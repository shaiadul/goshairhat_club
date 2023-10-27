import Image from "next/image";
import React from "react";

const Members = () => {
  return (
    <section id="members" className="py-6">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
        <p className="p-2 text-sm font-medium tracki text-center uppercase">
          ক্লাব পরিচালকগণ
        </p>
        <h1 className="text-2xl text-blue-400 font-bold text-center sm:text-3xl">
          সার্বিক পরিচালক ও প্রশিক্ষক সদস্য
        </h1>
        <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://i.ibb.co/KzJ3CdZ/photo-1633332755192-727a05c4013d-removebg-preview.png"
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold leadi">মো মাহিন হোসেন</p>
              <p>প্রশিক্ষক</p>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://i.ibb.co/KzJ3CdZ/photo-1633332755192-727a05c4013d-removebg-preview.png"
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold leadi">মো জুয়েল সরদার</p>
              <p>প্রশিক্ষক</p>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://i.ibb.co/KzJ3CdZ/photo-1633332755192-727a05c4013d-removebg-preview.png"
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold leadi">মো ওসমান গনি</p>
              <p>প্রশিক্ষক</p>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://i.ibb.co/KzJ3CdZ/photo-1633332755192-727a05c4013d-removebg-preview.png"
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold leadi">মো লাল মিয়া সরদার</p>
              <p>প্রশিক্ষক</p>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://i.ibb.co/KzJ3CdZ/photo-1633332755192-727a05c4013d-removebg-preview.png"
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold leadi">মো মহাসিন সরদার</p>
              <p>প্ররিচালক</p>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://i.ibb.co/KzJ3CdZ/photo-1633332755192-727a05c4013d-removebg-preview.png"
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold leadi">মো কমল সরদার</p>
              <p>পরিচালক</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
