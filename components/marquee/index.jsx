import React from "react";

const Marquee = () => {
  return (
    <div className="border-2 py-2">
      <marquee direction="left" behavior="scroll" scrollamount="1">
        <div className="flex justify-between items-center gap-x-10 pt-1 font-mono font-bold text-lg text-teal-300">
          <p>Today Match Report : IdilPur 2 - 2 MadariPur </p>
          <p> NagerPara 2 - 2 GoriberChor </p>
          <p> আগামি ১০/১১/২০২৩ বঙ্গবন্ধু শেখ মুজিব গোল্ডকাপ টুনামেন্ট ২০২৩ শুরু হবে !</p>
          <p>Today Match Report : IdilPur 2 - 2 MadariPur </p>
          <p> NagerPara 2 - 2 GoriberChor </p>
        </div>
      </marquee>
    </div>
  );
};

export default Marquee;
