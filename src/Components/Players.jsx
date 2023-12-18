import React from "react";
import { useState } from "react";
import PlayerCard from "./PlayerCard";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Players = ({ players, name }) => {
  const [count, setCount] = useState(players.length);

  const updatePlayerCount = () => {
    setCount((prev) => prev + 1);
  };

  const formattedPlayers = players.map((player) => {
    return { ...player, id: uuidv4() };
  });

  const [data, setData] = useState(formattedPlayers);

  const addOrChangePlayer = (type, newPlayer) => {
    if (!newPlayer.name || !newPlayer.age) {
      toast.error("Invalid player info!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (newPlayer.age < 1) {
      toast.error("Age cannot be less than 0", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (type === "save") {
      const updatedData = data.map((player) => {
        const { name, age, id } = newPlayer;
        if (player.id === id) {
          return { name, age, id };
        }

        return player;
      });
      console.log("Updated Players", updatedData);
      setData(updatedData);
    } else {
      const updatedData = [newPlayer, ...data];
      setData(updatedData);
    }
    toast.success("Player updated successfully!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="m-3">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1 className="font-semibold text-lg">
        {name} ({count})
      </h1>
      <PlayerCard
        action="add"
        addOrChangePlayer={addOrChangePlayer}
        player={{ name: "", age: "" }}
        updatePlayerCount={updatePlayerCount}
      />

      {data &&
        data.map((player) => (
          <PlayerCard
            key={player.id}
            addOrChangePlayer={addOrChangePlayer}
            action="save"
            player={player}
            updatePlayerCount={updatePlayerCount}
          />
        ))}
    </div>
  );
};

export default Players;
