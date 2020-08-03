import Btj_transactions_allControllerGenerated from "./generated/Btj_transactions_allControllerGenerated";

// Properties
import Properties from "../../properties";

// Database
import Btj_transactions_allModel from "../../models/GameTayo_db/Btj_transactions_allModel";

// Security
import { authorize } from "../../security/SecurityManager";

// Errors
import Errors from "../../classes/Errors";
import ErrorManager from "../../classes/ErrorManager";

const customControllers = {
  
  /**
   * Override here your custom routes
   * EXAMPLE:
   *
    
   init: router => {
     const baseUrl = `${Properties.api}/btj_transactions_all`;
     
     // custom route
     router.get(baseUrl + "/:id", customControllers.get);
     
     // Init super
     Btj_transactions_allControllerGenerated.init(router);
    },

  */

  /**
   * Override here your custom controllers
   * EXAMPLE:
   *
   
    get: async (req, res) => {
      try {
        console.log("This is my custom controller");
        const result = await Btj_transactions_allModel.get(req.params.id);
        res.json(result);
      } catch (err) {
        const safeErr = ErrorManager.getSafeError(err);
        res.status(safeErr.status).json(safeErr);
      }
    }

   */
   
};

export default {
  ...Btj_transactions_allControllerGenerated,
  ...customControllers
};

