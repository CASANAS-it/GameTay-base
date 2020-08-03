import { combineReducers } from "redux";

// START IMPORT REDUCERS
import HomeReducer from "./HomeReducer";
import Btj_drawsEditReducer from "./Btj_drawsEditReducer";
import Btj_drawsListReducer from "./Btj_drawsListReducer";
import Btj_game_settingsEditReducer from "./Btj_game_settingsEditReducer";
import Btj_game_settingsListReducer from "./Btj_game_settingsListReducer";
import Btj_merchantsEditReducer from "./Btj_merchantsEditReducer";
import Btj_merchantsListReducer from "./Btj_merchantsListReducer";
import Btj_transactions_allEditReducer from "./Btj_transactions_allEditReducer";
import Btj_transactions_allListReducer from "./Btj_transactions_allListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	HomeReducer,
	Btj_drawsEditReducer,
	Btj_drawsListReducer,
	Btj_game_settingsEditReducer,
	Btj_game_settingsListReducer,
	Btj_merchantsEditReducer,
	Btj_merchantsListReducer,
	Btj_transactions_allEditReducer,
	Btj_transactions_allListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
