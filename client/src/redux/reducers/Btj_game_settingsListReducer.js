// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function btj_game_settingsListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_BTJ_GAME_SETTINGS_SUCCESS:
      return { ...state, btj_game_settings: action.payload };
    case types.LIST_BTJ_GAME_SETTINGS_SUCCESS:
      return { ...state, listBtj_game_settings: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}