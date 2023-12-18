import React from "react";
import { useState } from "react";
import { Button } from "flowbite-react";

const PlayerCard = ({ player }) => {
  const [name, setName] = useState(player.name);
  const [age, setAge] = useState(player.age);

  return (
    <div className="m-4">
      <div className="flex gap-9 max-lg:gap-3">
        <input
          type="text"
          value={player.name}
          onChange={(e) => setName(e.target.value)}
          className="max-md:w-[150px]"
        />
        <input
          type="text"
          value={player.age}
          onChange={(e) => setAge(e.target.value)}
          className="w-[100px]"
        />
        <Button color="purple">Save</Button>
      </div>
    </div>
  );
};

export default PlayerCard;
