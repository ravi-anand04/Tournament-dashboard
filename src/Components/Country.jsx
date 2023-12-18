import React from "react";
import { useState } from "react";
import Players from "./Players";
import { v4 as uuidv4 } from "uuid";

const Country = ({ countries }) => {
  const [teams, setTeams] = useState(countries);

  return (
    <div className="p-6">
      {teams &&
        teams.map((team) => (
          <div className="">
            <h1>{team.team_name}</h1>
            <Players key={uuidv4()} players={team.players} />
          </div>
        ))}
    </div>
  );
};

export default Country;
