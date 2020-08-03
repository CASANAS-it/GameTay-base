import Btj_merchantsControllerGenerated from "./generated/Btj_merchantsControllerGenerated";

// Properties
import Properties from "../../properties";

// Database
import Btj_merchantsModel from "../../models/GameTayo_db/Btj_merchantsModel";

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
     const baseUrl = `${Properties.api}/ntj_merchants`;
     
     // custom route
     router.get(baseUrl + "/:id", customControllers.get);
     
     // Init super
     Btj_merchantsControllerGenerated.init(router);
    },

  */

  /**
   * Override here your custom controllers
   * EXAMPLE:
   *
   
    get: async (req, res) => {
      try {
        console.log("This is my custom controller");
        const result = await Btj_merchantsModel.get(req.params.id);
        res.json(result);
      } catch (err) {
        const safeErr = ErrorManager.getSafeError(err);
        res.status(safeErr.status).json(safeErr);
      }
    }

   */
   
};

export default {
  ...Btj_merchantsControllerGenerated,
  ...customControllers
};

