import Btj_merchantsModelGenerated from "./generated/Btj_merchantsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = Btj_merchantsModelGenerated.init();
  
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
      return await Btj_merchantsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Btj_merchantsModelGenerated,
  ...customModel
};
