import actionsFunction from "./generated/Btj_merchantsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import btj_merchantsApi from "../../api/btj_merchantsApi";
 
 actionsFunction.loadbtj_merchantsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return btj_merchantsApi
     .getbtj_merchantsList()
     .then(list => {
       dispatch(actionsFunction.loadbtj_merchantsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
