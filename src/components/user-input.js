import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const UserInput = (props) => {
  let history = useHistory();
  const [state, setstate] = useState("");
  const validate = () => {
    setstate(true);
    if (props.player1) {
      if (props.player2) {
        history.push("/winner");
      }
    }
  };
  return (
    <>
      <div className="bg_game">
        <h2>Lets Start Game </h2>
        <form>
          <label>Team A</label>
          <br />
          <input
            type="text"
            value={props.player1}
            onChange={props.handleInput1Change}
          />
          {!props.player1 && state && <h3>* Required </h3>}
          <br />
          <label>Team B</label>
          <br />
          <input
            type="text"
            value={props.player2}
            onChange={props.handleInput2Change}
          />
          {!props.player2 && state && <h3>* Required </h3>}
          <br />
          <button onClick={validate}>SUBMIT</button>
        </form>
      </div>
    </>
  );
};
export default UserInput;
