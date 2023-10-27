import Link from "next/link";
import React from "react";

export const Banner = () => {
  return (
    <section className="my-10 relative">
      <img
        src="https://m.media-amazon.com/images/I/71rvaUfzByL._AC_SL1500_.jpg"
        alt="banner"
        className="w-64 h-64 md:w-80 md:h-80 object-cover absolute top-[50%] left-[15%] md:top-20 md:left-1/2 animate-bounce duration-1000 -z-10"
      />
      <div className="container mx-auto flex flex-col items-center px-5 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-5xl ">
        <span className="text-blue-400 text-3xl md:text-4xl font-bold mt-20">
          ডিফেন্ডিং স্কোয়াড অব গোসাইরহাট
        </span>
        <p className="px-8 mt-8 mb-12 text-lg font-semibold">
          চ্যাম্পিয়ন তারা নয় যারা একবার খেলার মাঠে জয়ী হয়েই থেমে যায়। বরং তারাই
          প্রকৃত চ্যাম্পিয়ন যারা হারের পর হার সহ্য করে শুধুমাত্র খেলায় জেতার
          জন্য
        </p>
        <div className="flex flex-wrap justify-center">
          <Link
            href="/donation"
            className="px-8 py-3 m-2 text-sm md:text-lg font-semibold rounded bg-blue-400 text-white hover:opacity-80 duration-700"
          >
            Donation
          </Link>
          <Link
            href="/hireplayer"
            className="px-8 py-3 m-2 text-sm md:text-lg font-semibold border-2 rounded F hover:text-white border-blue-400 hover:bg-blue-400 duration-700"
          >
            Hire Player
          </Link>
        </div>
      </div>
    </section>
  );
};
