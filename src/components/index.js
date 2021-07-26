import React, { useState } from "react";
import { Route } from "react-router-dom";
import UserInput from "./user-input";
import Winner from "./winner";

const Game = () => {
  const [name, setName] = useState({
    player1: "",
    player2: "",
  });
  const handleNameChange = (e) => {
    setName({ ...name, player1: e.target.value });
  };
  const handleName2Change = (e) => {
    setName({ ...name, player2: e.target.value });
  };
  return (
    <>
      <Route exact path="/">
        <UserInput
          handleInput1Change={handleNameChange}
          handleInput2Change={handleName2Change}
          player1={name.player1}
          player2={name.player2}
        />
      </Route>
      <Route path="/winner">
        <Winner player1={name.player1} player2={name.player2} />
      </Route>
    </>
  );
};
export default Game;
