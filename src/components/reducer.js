const initialState = {
  player1: "",
  player2: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYER1": {
      return {
        ...state,
        player1: action.player1,
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
