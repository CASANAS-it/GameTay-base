// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function btj_transactions_allListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_BTJ_TRANSACTIONS_ALL_SUCCESS:
      return { ...state, btj_transactions_all: action.payload };
    case types.LIST_BTJ_TRANSACTIONS_ALL_SUCCESS:
      return { ...state, listBtj_transactions_all: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}