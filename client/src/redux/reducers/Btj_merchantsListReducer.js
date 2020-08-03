// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function btj_merchantsListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_BTJ_MERCHANTS_SUCCESS:
      return { ...state, btj_merchants: action.payload };
    case types.LIST_BTJ_MERCHANTS_SUCCESS:
      return { ...state, listBtj_merchants: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}