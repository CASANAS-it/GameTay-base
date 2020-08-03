import Btj_drawsModelGenerated from "./generated/Btj_drawsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = Btj_drawsModelGenerated.init();
  
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
      return await Btj_drawsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Btj_drawsModelGenerated,
  ...customModel
};
