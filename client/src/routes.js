// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import Btj_drawsEdit from "./pages/Btj_drawsEdit";
import Btj_drawsList from "./pages/Btj_drawsList";
import Btj_game_settingsEdit from "./pages/Btj_game_settingsEdit";
import Btj_game_settingsList from "./pages/Btj_game_settingsList";
import Btj_merchantsEdit from "./pages/Btj_merchantsEdit";
import Btj_merchantsList from "./pages/Btj_merchantsList";
import Btj_transactions_allEdit from "./pages/Btj_transactions_allEdit";
import Btj_transactions_allList from "./pages/Btj_transactions_allList";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/btj_drawses/:id" component={ Btj_drawsEdit }  />
              <PrivateRoute exact path="/btj_drawses" component={ Btj_drawsList }  />
              <PrivateRoute exact path="/btj_game_settingses/:id" component={ Btj_game_settingsEdit }  />
              <PrivateRoute exact path="/btj_game_settingses" component={ Btj_game_settingsList }  />
              <PrivateRoute exact path="/btj_merchantses/:id" component={ Btj_merchantsEdit }  />
              <PrivateRoute exact path="/btj_merchantses" component={ Btj_merchantsList }  />
              <PrivateRoute exact path="/btj_transactions_alls/:id" component={ Btj_transactions_allEdit }  />
              <PrivateRoute exact path="/btj_transactions_alls" component={ Btj_transactions_allList }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;