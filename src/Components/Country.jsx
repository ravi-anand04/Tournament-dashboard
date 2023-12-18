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
          <div>
            <Players
              key={uuidv4()}
              players={team.players}
              name={team.team_name}
            />
          </div>
        ))}
    </div>
  );
};

export default Country;
