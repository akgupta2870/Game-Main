import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
export const Winner = (props) => {
  const [differencestate, setDifferencestate] = useState("");
  const [winnerstate, setWinnerstate] = useState("");
  const difference = () => {
    console.log("start");
    if (props.players.player1Win > props.players.player2Win) {
      console.log("player1");
      const diff = props.players.player1Win - props.players.player2Win;
      setDifferencestate(diff);
    } else {
      console.log("player2");
      const diff = props.players.player2Win - props.players.player1Win;
      setDifferencestate(diff);
    }
  };

  const win = () => {
    if (props.players.player1Win === props.players.player2Win) {
      console.log("tie");
      setWinnerstate(<h3>Match is Tie Play Again</h3>);
    } else if (props.players.player1Win > props.players.player2Win) {
      console.log("p1");
      setWinnerstate(<h3>{props.player1} is the winner </h3>);
    } else if (props.players.player1Win < props.players.player2Win) {
      console.log("P2");
      setWinnerstate(<h3>{props.player2} is the winner</h3>);
    }
  };

  const handlePlayer1Change = () => {
    console.log("player1");
    props.player1Win();
  };

  const handlePlayer2Change = () => {
    console.log("player2");
    props.player2Win();
  };

  return (
    <>
      <div>
        <Typography>Lets Play</Typography>
        <div>
          <Typography>player1 Name :- {props.player1}</Typography>
          <button onClick={handlePlayer1Change}>Score</button>
          <h4>SCORE :- {props.players.player1Win}</h4>
        </div>
        <div>
          <Typography>player2 Name :- {props.player2}</Typography>
          <button onClick={handlePlayer2Change}>Score</button>
          <h4>SCORE :- {props.players.player2Win}</h4>
          <br />
        </div>
        <hr />
        <div>
          <button onClick={win}>winner </button>
          <Typography>Current Winner :{winnerstate} </Typography>
        </div>
        <div>
          <button onClick={difference}>difference</button>
          <Typography>Win difference : {differencestate}</Typography>
        </div>
        <Link to="/">
          <button className="btn_save">Save Game</button>
        </Link>
      </div>
    </>
  );
};
const mapDispatchtoprops = (dispatch) => {
  return {
    player1Win: () => dispatch({ type: "PLAYER1WIN" }),
    player2Win: () => dispatch({ type: "PLAYER2WIN" }),
  };
};
const mapStateToProps = (state) => ({
  players: state,
  // player1: state.player1,
  // player2: state.player2,
  // player1Win: state.player1Win,
  // player2Win: state.player2Win,
});
export default connect(mapStateToProps, mapDispatchtoprops)(Winner);
