import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const Winner = (props) => {
  const [player1Win, setPlayer1Win] = useState(0);
  const [player2Win, setPlayer2Win] = useState(0);

  const difference =
    player1Win > player2Win ? player1Win - player2Win : player2Win - player1Win;
  const win = player1Win > player2Win ? props.player1 : props.player2;

  const handlePlayer1Change = () => {
    setPlayer1Win((preCount) => preCount + 1);
  };

  const handlePlayer2Change = () => {
    setPlayer2Win((preCount) => preCount + 1);
  };

  return (
    <>
      <div className="bg">
        <Typography>Lets Play</Typography>
        <div>
          <Typography>{props.player1}</Typography>
          <button className="btn_win" onClick={handlePlayer1Change}>
            Add Win
          </button>
        </div>
        <Typography>wins : {player1Win}</Typography>
        <div>
          <Typography>{props.player2}</Typography>
          <button className="btn_win" onClick={handlePlayer2Change}>
            Add Win
          </button>
          <br />
          <Typography>wins : {player2Win}</Typography>
        </div>
        <hr />
        {player1Win >= 1 || player2Win >= 1 ? (
          <div>
            <Typography>Current Winner : {win}</Typography>
            <Typography>Win difference : {difference}</Typography>
          </div>
        ) : (
          <div>
            <Typography>Current Winner : </Typography>
            <Typography>Win difference : </Typography>
          </div>
        )}
        <Link to="/">
          <button className="btn_save">Save Game</button>
        </Link>
      </div>
    </>
  );
};

export default Winner;
