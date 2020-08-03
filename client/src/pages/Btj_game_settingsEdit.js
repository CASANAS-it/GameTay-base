// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import Btj_game_settingsActions from "../redux/actions/Btj_game_settingsActions";

// END IMPORT ACTIONS

/** APIs

* actionsBtj_game_settings.create
*	@description CRUD ACTION create
*
* actionsBtj_game_settings.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsBtj_game_settings.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class Btj_game_settingsEdit extends Component {
  // Init btj_game_settings
  constructor(props) {
    super(props);
    this.state = {
      btj_game_settings: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsBtj_game_settings.loadBtj_game_settings(this.props.match.params.id);
    }
    
  }

  // Insert props btj_game_settings in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      btj_game_settings: props.btj_game_settings
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.btj_game_settings._id) {
      this.props.actionsBtj_game_settings.saveBtj_game_settings(this.state.btj_game_settings).then(data => {
        this.props.history.push("/btj_game_settingses/");
      });
    } else {
      this.props.actionsBtj_game_settings.createBtj_game_settings(this.state.btj_game_settings).then(data => {
        this.props.history.push("/btj_game_settingses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Btj_game_settings Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="amt_per_unit"
            label="Amt_per_unit"
            value={this.state.btj_game_settings.amt_per_unit || ""}
            onChange={Utils.handleChange.bind(this, "btj_game_settings")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.btj_game_settings.amt_per_unit && this.state.btj_game_settings.amt_per_unit === ""
              ? { error: true }
              : {})}
          />
          
          <FormControl fullWidth required
              {...(!this.state.btj_game_settings.no_of_picks && !this.state.btj_game_settings.no_of_picks
                ? { error: true }
                : {})}>
            <InputLabel shrink htmlFor="no_of_picks">
              No_of_picks
            </InputLabel>
            <Select
              value={this.state.btj_game_settings.no_of_picks || ""}
              onChange={Utils.handleChangeSelect.bind(this, "btj_game_settings")}
              inputProps={{
                id: "no_of_picks",
                name: "no_of_picks"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth required
              {...(!this.state.btj_game_settings.status && !this.state.btj_game_settings.status
                ? { error: true }
                : {})}>
            <InputLabel shrink htmlFor="status">
              Status
            </InputLabel>
            <Select
              value={this.state.btj_game_settings.status || ""}
              onChange={Utils.handleChangeSelect.bind(this, "btj_game_settings")}
              inputProps={{
                id: "status",
                name: "status"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Active"}>Active</MenuItem>
              <MenuItem value={"Inactive"}>Inactive</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth required
              {...(!this.state.btj_game_settings.transtype && !this.state.btj_game_settings.transtype
                ? { error: true }
                : {})}>
            <InputLabel shrink htmlFor="transtype">
              Transtype
            </InputLabel>
            <Select
              value={this.state.btj_game_settings.transtype || ""}
              onChange={Utils.handleChangeSelect.bind(this, "btj_game_settings")}
              inputProps={{
                id: "transtype",
                name: "transtype"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"2D"}>2D</MenuItem>
              <MenuItem value={"PAIR"}>PAIR</MenuItem>
              <MenuItem value={"QUADRO"}>QUADRO</MenuItem>
              <MenuItem value={"STL"}>STL</MenuItem>
              <MenuItem value={"SWER3"}>SWER3</MenuItem>
            </Select>
          </FormControl>

          {/* Footer */}
          <div className="footer-card">
            <Link to="/btj_game_settingses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsBtj_game_settings: bindActionCreators(Btj_game_settingsActions, dispatch),
  };
};

// Validate types
Btj_game_settingsEdit.propTypes = { 
  actionsBtj_game_settings: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    btj_game_settings: state.Btj_game_settingsEditReducer.btj_game_settings
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Btj_game_settingsEdit);
