import actionsFunction from "./generated/Btj_transactions_allActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import btj_transactions_allApi from "../../api/btj_transactions_allApi";
 
 actionsFunction.loadbtj_transactions_allList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return btj_transactions_allApi
     .getbtj_transactions_allList()
     .then(list => {
       dispatch(actionsFunction.loadbtj_transactions_allSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
