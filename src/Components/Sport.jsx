import React from "react";
import { TOURNAMENT_URL } from "../constants";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

const Sport = () => {
  const [games, setGames] = useState([]);
  const [loader, setLoader] = useState(false);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoader(true);
    const res = await fetch(TOURNAMENT_URL);
    const data = await res.json();

    setGames(data);
    setLoader(false);
  };

  return (
    <div className="w-[600px] max-md:w-3/4 max-sm:w-full ">
      {games.length > 0 &&
        games.map((game) => (
          <div className="border-2 rounded-lg border-black-600 m-6">
            <h1 className="px-4 py-3 text-xl rounded-sm font-bold bg-zinc-200">
              {game.game}
            </h1>
            <Country key={uuidv4()} countries={game.teams} />
          </div>
        ))}
      {loader && (
        <div className="loader mt-[200px]">
          <div
            role="status"
            class="max-w-md p-4 m-auto  space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
          >
            <div class="flex items-center justify-between">
              <div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
              <div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
              <div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
              <div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
              <div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sport;
