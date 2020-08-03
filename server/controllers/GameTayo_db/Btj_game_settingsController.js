import Btj_game_settingsControllerGenerated from "./generated/Btj_game_settingsControllerGenerated";

// Properties
import Properties from "../../properties";

// Database
import Btj_game_settingsModel from "../../models/GameTayo_db/Btj_game_settingsModel";

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
     const baseUrl = `${Properties.api}/btj_game_settings`;
     
     // custom route
     router.get(baseUrl + "/:id", customControllers.get);
     
     // Init super
     Btj_game_settingsControllerGenerated.init(router);
    },

  */

  /**
   * Override here your custom controllers
   * EXAMPLE:
   *
   
    get: async (req, res) => {
      try {
        console.log("This is my custom controller");
        const result = await Btj_game_settingsModel.get(req.params.id);
        res.json(result);
      } catch (err) {
        const safeErr = ErrorManager.getSafeError(err);
        res.status(safeErr.status).json(safeErr);
      }
    }

   */
   
};

export default {
  ...Btj_game_settingsControllerGenerated,
  ...customControllers
};

