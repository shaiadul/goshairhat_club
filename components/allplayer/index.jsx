import React from "react";

const AllPlayer = ({ player }) => {
  const { name, description, teams, image, hireLink, date } = player;
  return (
    <article class="flex bg-white transition shadow-lg hover:shadow-xl my-5">
      <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          datetime="2022-10-10"
          class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>2023</span>
          <span class="w-px flex-1 bg-gray-900/10"></span>
          <span>Oct 30</span>
        </time>
      </div>

      <div class="hidden sm:block sm:basis-56">
        <img
          alt="hireing player"
          src={image}
          class="aspect-square h-full w-full object-cover"
        />
      </div>

      <div class="flex flex-1 flex-col justify-between">
        <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 py-auto">
          <div class="md:hidden block sm:basis-56">
            <img
              alt="hireing player"
              src={image}
              class="aspect-square h-40 w-full object-cover mb-2"
            />
          </div>
          <a href="#">
            <h3 class="font-bold text-lg text-blue-400">{name}</h3>
          </a>
          <p class="font-semibold text-xs text-gray-600 py-2">{description}</p>

          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            {teams.map((team, i) => (
              <span
                key={i}
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
              >
                {team}
              </span>
            ))}
          </p>
        </div>

        <div class="sm:flex sm:items-end sm:justify-end">
          <a
            href={hireLink}
            class="block bg-blue-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-blue-400"
          >
            Hire me
          </a>
        </div>
      </div>
    </article>
  );
};

export default AllPlayer;
