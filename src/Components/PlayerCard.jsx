import React from "react";
import { useState } from "react";
import { Button } from "flowbite-react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const PlayerCard = ({ player, action, addOrChangePlayer }) => {
  const [name, setName] = useState(player.name);
  const [age, setAge] = useState(player.age);
  const [newPlayer, setNewPlayer] = useState({
    name: "",
    age: 0,
    id: uuidv4(),
  });

  const createNewPlayer = () => {
    addOrChangePlayer("add", newPlayer);
    setNewPlayer({ name: "", age: 0, id: uuidv4() });
  };

  const updateCurrentPlayer = () => {
    addOrChangePlayer("save", { name, age, id: player?.id });
  };

  const updatePlayer = (e) => {
    const { name, age, id } = newPlayer;
    const updatedPlayer = { id, name, age };
    updatedPlayer[e.target.name] =
      e.target.name == "age" ? parseInt(e.target.value) : e.target.value;
    // console.log(e.target.name);
    setNewPlayer(updatedPlayer);
  };

  return (
    <div className="m-4">
      {action === "save" ? (
        <div className="flex gap-9 max-lg:gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="max-md:w-[150px] border-none rounded-md bg-zinc-300"
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-[100px] border-none rounded-md bg-zinc-300"
          />
          <Button color="purple" onClick={updateCurrentPlayer}>
            Save
          </Button>
        </div>
      ) : (
        <div className="flex gap-9 max-lg:gap-3">
          <input
            type="text"
            value={newPlayer.name}
            onChange={(e) => updatePlayer(e)}
            name="name"
            className="max-md:w-[150px] border-none rounded-md bg-zinc-300"
          />
          <input
            type="number"
            value={newPlayer.age}
            onChange={(e) => updatePlayer(e)}
            name="age"
            className="w-[100px] border-none rounded-md bg-zinc-300"
          />
          <Button color="purple" onClick={createNewPlayer}>
            Add
          </Button>
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
