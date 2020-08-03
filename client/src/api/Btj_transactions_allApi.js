import Btj_transactions_allApiGenerated from "./generated/Btj_transactions_allApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class Btj_transactions_allApi extends Btj_transactions_allApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Btj_transactions_all List
  static getBtj_transactions_allList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/btj_transactions_alls")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default Btj_transactions_allApi;