// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  btj_draws: {}
};

// Reducer
export default function btj_drawsEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_BTJ_DRAWS_SUCCESS:
      return { ...state, btj_draws: action.payload };
    case types.UPDATE_BTJ_DRAWS_SUCCESS:
      return { ...state, btj_draws: action.payload };
    case types.GET_BTJ_DRAWS_SUCCESS:
      return { ...state, btj_draws: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}