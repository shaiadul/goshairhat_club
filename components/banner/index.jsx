import React from "react";

export const Banner = () => {
  return (
    <section className="banner_container bg-red-100">
      <div className="container mx-auto flex flex-col items-center px-5 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-5xl">
        <span className="text-teal-400 text-3xl md:text-5xl font-bold mt-20">
          ইদিলপুর পৌরসভা ফুটবল ক্লাব
        </span>
        <p className="px-8 mt-8 mb-12 text-lg font-semibold">
        চ্যাম্পিয়ন তারা নয় যারা একবার খেলার মাঠে জয়ী হয়েই থেমে যায়। বরং তারাই প্রকৃত চ্যাম্পিয়ন যারা হারের পর হার সহ্য করে শুধুমাত্র খেলায় জেতার জন্য
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-sm md:text-lg font-semibold rounded bg-teal-400 text-white hover:opacity-80 duration-700">
            Donation
          </button>
          <button className="px-8 py-3 m-2 text-sm md:text-lg font-semibold border-2 rounded text-teal-400 hover:text-white border-teal-400 hover:bg-teal-400 duration-700">
            Hire Player
          </button>
        </div>
      </div>
    </section>
  );
};
