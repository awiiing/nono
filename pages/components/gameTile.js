import React, { useState } from "react";

const GameTile = ({ x, y }) => {
  const [on, setOn] = useState(false);

  return (
    <div
      onClick={() => setOn(!on)}
      className={`h-full ${on ? "bg-black" : "bg-white"}`}
    ></div>
  );
};

export default GameTile;
