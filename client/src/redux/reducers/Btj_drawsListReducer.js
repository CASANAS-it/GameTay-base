// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function btj_drawsListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_BTJ_DRAWS_SUCCESS:
      return { ...state, btj_draws: action.payload };
    case types.LIST_BTJ_DRAWS_SUCCESS:
      return { ...state, listBtj_draws: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}