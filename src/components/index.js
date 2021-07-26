import { Route } from "react-router-dom";
import UserInput from "./user-input";
import Winner from "./winner";
import { connect } from "react-redux";

export const Game = (props) => {
  const handleName1Change = (e) => {
    props.submitPlayer1(e);
    //setName({ ...name, player1: e.target.value });
  };
  const handleName2Change = (e) => {
    props.submitPlayer2(e);
    //setName({ ...name, player2: e.target.value });
  };
  return (
    <>
      <Route exact path="/">
        <UserInput
          handleInput1Change={handleName1Change}
          handleInput2Change={handleName2Change}
          player1={props.player1}
          player2={props.player2}
        />
      </Route>
      <Route path="/winner">
        <Winner player1={props.player1} player2={props.player2} />
      </Route>
    </>
  );
};
const mapDispatchtoprops = (dispatch) => {
  return {
    submitPlayer1: (e) =>
      dispatch({ type: "PLAYER1", player1: e.target.value }),
    submitPlayer2: (e) =>
      dispatch({ type: "PLAYER2", player2: e.target.value }),
  };
};
const mapStateToProps = (state) => ({
  player1: state.player1,
  player2: state.player2,
});
export default connect(mapStateToProps, mapDispatchtoprops)(Game);

//export default Game;
