import Btj_drawsApiGenerated from "./generated/Btj_drawsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class Btj_drawsApi extends Btj_drawsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Btj_draws List
  static getBtj_drawsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/btj_drawss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default Btj_drawsApi;