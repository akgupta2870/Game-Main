const initialState = {
  player1: "",
  player2: "",
  player1Win: 0,
  player2Win: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYER1": {
      return {
        ...state,
        player1: action.player1,
      };
    }
    case "PLAYER1WIN": {
      return {
        ...state,
        player1Win: state.player1Win + 1,
      };
    }
    case "PLAYER2WIN": {
      return {
        ...state,
        player2Win: state.player2Win + 1,
      };
    }
    case "PLAYER2": {
      return {
        ...state,
        player2: action.player2,
      };
    }
    default: {
      return state;
    }
  }
};
