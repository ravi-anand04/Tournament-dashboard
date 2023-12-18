import React from "react";
import { useState } from "react";
import PlayerCard from "./PlayerCard";
import { v4 as uuidv4 } from "uuid";

const Players = ({ players }) => {
  const [data, setData] = useState(players);

  return (
    <div className="m-3">
      {data &&
        data.map((player) => <PlayerCard key={uuidv4()} player={player} />)}
    </div>
  );
};

export default Players;
