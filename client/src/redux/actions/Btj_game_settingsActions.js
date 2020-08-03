import actionsFunction from "./generated/Btj_game_settingsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import btj_game_settingsApi from "../../api/btj_game_settingsApi";
 
 actionsFunction.loadbtj_game_settingsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return btj_game_settingsApi
     .getbtj_game_settingsList()
     .then(list => {
       dispatch(actionsFunction.loadbtj_game_settingsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
