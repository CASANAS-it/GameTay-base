import Btj_merchantsApiGenerated from "./generated/Btj_merchantsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class Btj_merchantsApi extends Btj_merchantsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Btj_merchants List
  static getBtj_merchantsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/btj_merchantss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default Btj_merchantsApi;