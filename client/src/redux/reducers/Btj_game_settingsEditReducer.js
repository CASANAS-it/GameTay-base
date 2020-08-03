// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  btj_game_settings: {}
};

// Reducer
export default function btj_game_settingsEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_BTJ_GAME_SETTINGS_SUCCESS:
      return { ...state, btj_game_settings: action.payload };
    case types.UPDATE_BTJ_GAME_SETTINGS_SUCCESS:
      return { ...state, btj_game_settings: action.payload };
    case types.GET_BTJ_GAME_SETTINGS_SUCCESS:
      return { ...state, btj_game_settings: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}