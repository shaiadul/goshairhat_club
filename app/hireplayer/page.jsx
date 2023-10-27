import AllPlayer from "@/components/allplayer";
import React from "react";

const players = [
  {
    name: "মো সায়েম হোসেন",
    description: "রক্ষণভাগ , উচ্চতা ৫.৪'",
    teams: [
      "গোসাইরহাট অনূরধ ১৬ একাদশ",
      "ইদিলপুর সুপার ইলেভেন",
      "ইদিলপুর পাইলট উচ্চ বিদ্যালয় একাদশ",
      "হাটুরিয়া একাদশ",
    ],
    image: "https://i.ibb.co/VWdsBqk/sayem.jpg",
    hireLink: "tel:+1234567890",
    date: "2023-10-30",
  },
  {
    name: "মো মাহিন হোসেন আদর",
    description: "রক্ষণভাগ , উচ্চতা ৫.৪'",
    teams: [
      "গোসাইরহাট অনূরধ ১৬ একাদশ",
      "ইদিলপুর সুপার ইলেভেন",
      "ইদিলপুর পাইলট উচ্চ বিদ্যালয় একাদশ",
      "হাটুরিয়া একাদশ",
    ],
    image: "https://i.ibb.co/P6CNTpf/ador.jpg",
    hireLink: "tel:+1234567890",
    date: "2023-10-30",
  },
  {
    name: "মো সাজন মিয়া",
    description: "রক্ষণভাগ , উচ্চতা ৫.৪'",
    teams: [
      "গোসাইরহাট অনূরধ ১৬ একাদশ",
      "ইদিলপুর সুপার ইলেভেন",
      "ইদিলপুর পাইলট উচ্চ বিদ্যালয় একাদশ",
      "হাটুরিয়া একাদশ",
    ],
    image: "https://i.ibb.co/FBcxT49/sajon.jpg",
    hireLink: "tel:+1234567890",
    date: "2023-10-30",
  },
];

const HirePlayer = () => {
  return (
    <section className="container mx-auto px-5 my-10">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-teal-800">
          আমাদের দলের সদস্যদের তালিকা
        </h2>
        <p className="text-gray-600 text-sm">
          আমাদের দলের সদস্যদের তালিকা নিচে দেওয়া হলো। আপনি চাইলে কোন একজনকে নিয়ে
          আলাপ করতে পারেন।
        </p>
      </div>
      <div className="gird justify-between items-center gap-5">
        {players.map((player, i) => (
          <AllPlayer key={i} player={player} />
        ))}
      </div>
    </section>
  );
};

export default HirePlayer;
