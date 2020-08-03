import Btj_transactions_allModelGenerated from "./generated/Btj_transactions_allModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = Btj_transactions_allModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await Btj_transactions_allModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Btj_transactions_allModelGenerated,
  ...customModel
};
