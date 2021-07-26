import React from "react";
import { Link } from "react-router-dom";
//import { Typography } from "@material-ui/core";

const UserInput = (props) => {
  return (
    <>
      <div className="bg_game">
        <h2>Lets Start Game </h2>
        {/* <h2> GUESS AN NUMBER </h2> */}
        <form>
          <label>Team A</label>
          <br />
          <input
            type="text"
            value={props.player1}
            onChange={props.handleInput1Change}
          />
          <br />
          <label>Team B</label>
          <br />
          <input
            type="text"
            value={props.player2}
            onChange={props.handleInput2Change}
          />
          <br />
          <Link
            to={{
              pathname: "/winner",
              state: "",
            }}
          >
            <button className="btn">Continue</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default UserInput;
