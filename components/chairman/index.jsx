import Image from "next/image";
import React from "react";

const Chairman = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            <Image
              height={200}
              width={200}
              alt="content"
              class="object-cover h-full w-full"
              src="https://i.ibb.co/rdHPQZD/idilpur.jpg"
            />
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                  মো আরিফুজ্জামান উজ্জল
                </h2>
                <div class="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                <p class="text-base">
                  অবসরপ্রাপ্ত ক্যপ্টেন বাংলাদেশ সেনাবাহিনী , সমাজসেবক ও
                  রাজনীতিবিদ
                </p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-lg mb-4">
                খেলা একটি মৌলিক মানবিক ক্ষমতা এবং সমাজের জনপ্রিয় ক্রিয়া যা
                প্রতিটি সমাজের জন্য গুরুত্বপূর্ণ। খেলার মাধ্যমে শারীরিক ও মানসিক
                প্রশাসন, দৃঢ় আত্মবিশ্বাস, প্রতিস্পর্ধার মাধ্যমে জীবনের
                সাম্প্রতিক্ষেপ সম্পন্ন করা যায়। খেলা একটি শিক্ষার উপাদান হিসেবেও
                গুরুত্বপূর্ণ। খেলা শিক্ষার মাধ্যমে নীতি, শ্রদ্ধা, সমর্পণ, দৃড়তা
                এবং দম্পতি জীবনে দক্ষতা অর্জন করতে সাহায্য করে। খেলা একটি জাতীয়
                এবং আন্তর্জাতিক একতা এবং সমাজে সমষ্টি ভাবে একত্রিত করার একটি
                উপাদান হিসেবেও গুরুত্বপূর্ণ। 
              </p>
              <a class="text-blue-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairman;
