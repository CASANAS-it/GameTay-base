// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import UserModel from "../models/GameTayo_db/UserModel";
import Btj_drawsModel from "../models/GameTayo_db/Btj_drawsModel";
import Btj_game_settingsModel from "../models/GameTayo_db/Btj_game_settingsModel";
import Btj_merchantsModel from "../models/GameTayo_db/Btj_merchantsModel";
import Btj_transactions_allModel from "../models/GameTayo_db/Btj_transactions_allModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.GameTayo_db_dbUrl);

    // Start Init Models

		UserModel.init();
		Btj_drawsModel.init();
		Btj_game_settingsModel.init();
		Btj_merchantsModel.init();
		Btj_transactions_allModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_GameTayo_db = await mongoose.connect(
        "mongodb://" + properties.GameTayo_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_GameTayo_db;
  }
}

export default new Database();
