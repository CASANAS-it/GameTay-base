import Btj_game_settingsModelGenerated from "./generated/Btj_game_settingsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = Btj_game_settingsModelGenerated.init();
  
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
      return await Btj_game_settingsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Btj_game_settingsModelGenerated,
  ...customModel
};
