import React from "react";
import { TOURNAMENT_URL } from "../constants";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

const Sport = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(TOURNAMENT_URL);
    const data = await res.json();

    console.log(data);

    setGames(data);
  };

  return (
    <div className="w-[600px] max-md:w-3/4 max-sm:w-full">
      {games.length > 0 &&
        games.map((game) => (
          <div className="border-2 rounded-lg border-black-600 m-6">
            <h1 className="px-4 py-2 text-xl rounded-sm font-bold bg-slate-400">
              {game.game}
            </h1>
            <Country key={uuidv4()} countries={game.teams} />
          </div>
        ))}
    </div>
  );
};

export default Sport;
