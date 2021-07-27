const initialState = {
  status: false,
};

const random = () => Math.floor(Math.random() * (10 - 1)) + 1;
const randomnumber = random();
export const Reducer = (state = initialState, action) => {
  console.log(randomnumber);
  switch (action.type) {
    case "SUBMIT": {
      if (randomnumber === action.value) {
        return {
          ...state,
          status: true,
          randomvalue: randomnumber,
        };
      }
    }
    // eslint-disable-next-line no-fallthrough
    default: {
      return state;
    }
  }
};
