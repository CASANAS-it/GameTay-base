import actionsFunction from "./generated/Btj_drawsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import btj_drawsApi from "../../api/btj_drawsApi";
 
 actionsFunction.loadbtj_drawsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return btj_drawsApi
     .getbtj_drawsList()
     .then(list => {
       dispatch(actionsFunction.loadbtj_drawsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
