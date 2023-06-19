import { SET_ID, SET_TURN ,SET_RESULTS} from "./actions";

const initialState = {
  id: null,
  turn: null,
  result:null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ID:
      return { ...state, id: action.payload };
    case SET_TURN:
      return { ...state, turn: action.payload };
    case SET_RESULTS:
      return { ...state, result: action.payload };
    default:
      return state;
  }
}
export default rootReducer;


