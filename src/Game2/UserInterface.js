import { useState } from "react";
//import { Link } from "@material-ui/core";
import { connect } from "react-redux";
export const UserInterface = (props) => {
  const [state, setState] = useState("");
  const onsubmit = () => {
    console.log("clicked");
    props.submit(state);
  };

  return (
    <>
      <h2>Guess A Number </h2>
      <form>
        <label>Select a number </label>
        <h4>original number {props.randomvalue}</h4>
        <br />
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <br />
        <button className="btn" onClick={onsubmit}>
          Check
        </button>
      </form>
      <h4>{props.randomvalue}</h4>
      {props.status && <h3>YOU ARE THE WINNER </h3>}
      {!props.status && <h3>NOT MATCH ! PLEASE TRY AGAIN </h3>}
    </>
  );
};

const mapDispatchtoprops = (dispatch) => {
  return {
    submit: (value) => dispatch({ type: "SUBMIT", value: value }),
  };
};
const mapStateToProps = (state) => ({
  status: state.status,
  randomvalue: state.randomvalue,
});
export default connect(mapStateToProps, mapDispatchtoprops)(UserInterface);
