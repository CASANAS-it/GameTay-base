// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  btj_transactions_all: {}
};

// Reducer
export default function btj_transactions_allEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_BTJ_TRANSACTIONS_ALL_SUCCESS:
      return { ...state, btj_transactions_all: action.payload };
    case types.UPDATE_BTJ_TRANSACTIONS_ALL_SUCCESS:
      return { ...state, btj_transactions_all: action.payload };
    case types.GET_BTJ_TRANSACTIONS_ALL_SUCCESS:
      return { ...state, btj_transactions_all: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}