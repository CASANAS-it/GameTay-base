import Btj_game_settingsApiGenerated from "./generated/Btj_game_settingsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class Btj_game_settingsApi extends Btj_game_settingsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Btj_game_settings List
  static getBtj_game_settingsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/btj_game_settingss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default Btj_game_settingsApi;