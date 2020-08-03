// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  btj_merchants: {}
};

// Reducer
export default function btj_merchantsEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_BTJ_MERCHANTS_SUCCESS:
      return { ...state, btj_merchants: action.payload };
    case types.UPDATE_BTJ_MERCHANTS_SUCCESS:
      return { ...state, btj_merchants: action.payload };
    case types.GET_BTJ_MERCHANTS_SUCCESS:
      return { ...state, btj_merchants: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}