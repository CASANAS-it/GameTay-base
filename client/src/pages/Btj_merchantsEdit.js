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
import { DateTimePicker } from "material-ui-pickers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import Btj_merchantsActions from "../redux/actions/Btj_merchantsActions";

// END IMPORT ACTIONS

/** APIs

* actionsBtj_merchants.create
*	@description CRUD ACTION create
*
* actionsBtj_merchants.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsBtj_merchants.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class Btj_merchantsEdit extends Component {
  // Init btj_merchants
  constructor(props) {
    super(props);
    this.state = {
      btj_merchants: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsBtj_merchants.loadBtj_merchants(this.props.match.params.id);
    }
    
  }

  // Insert props btj_merchants in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      btj_merchants: props.btj_merchants
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.btj_merchants._id) {
      this.props.actionsBtj_merchants.saveBtj_merchants(this.state.btj_merchants).then(data => {
        this.props.history.push("/btj_merchantses/");
      });
    } else {
      this.props.actionsBtj_merchants.createBtj_merchants(this.state.btj_merchants).then(data => {
        this.props.history.push("/btj_merchantses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Btj_merchants Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="code"
            label="Code"
            value={this.state.btj_merchants.code || ""}
            onChange={Utils.handleChange.bind(this, "btj_merchants")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.btj_merchants.code && this.state.btj_merchants.code === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="creation_date"
            label="Creation_date"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.btj_merchants.creation_date
                ? new Date(this.state.btj_merchants.creation_date)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "btj_merchants", "creation_date")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.btj_merchants.creation_date && this.state.btj_merchants.creation_date === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="first_name"
            label="First_name"
            value={this.state.btj_merchants.first_name || ""}
            onChange={Utils.handleChange.bind(this, "btj_merchants")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.btj_merchants.first_name && this.state.btj_merchants.first_name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="last_name"
            label="Last_name"
            value={this.state.btj_merchants.last_name || ""}
            onChange={Utils.handleChange.bind(this, "btj_merchants")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.btj_merchants.last_name && this.state.btj_merchants.last_name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="middle_initial"
            label="Middle_initial"
            value={this.state.btj_merchants.middle_initial || ""}
            onChange={Utils.handleChange.bind(this, "btj_merchants")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.btj_merchants.middle_initial && this.state.btj_merchants.middle_initial === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="mobilenum"
            label="Mobilenum"
            value={this.state.btj_merchants.mobilenum || ""}
            onChange={Utils.handleChange.bind(this, "btj_merchants")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.btj_merchants.mobilenum && this.state.btj_merchants.mobilenum === ""
              ? { error: true }
              : {})}
          />
          
          <FormControl fullWidth required
              {...(!this.state.btj_merchants.percentage && !this.state.btj_merchants.percentage
                ? { error: true }
                : {})}>
            <InputLabel shrink htmlFor="percentage">
              Percentage
            </InputLabel>
            <Select
              value={this.state.btj_merchants.percentage || ""}
              onChange={Utils.handleChangeSelect.bind(this, "btj_merchants")}
              inputProps={{
                id: "percentage",
                name: "percentage"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
              <MenuItem value={"12"}>12</MenuItem>
              <MenuItem value={"15"}>15</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth required
              {...(!this.state.btj_merchants.status && !this.state.btj_merchants.status
                ? { error: true }
                : {})}>
            <InputLabel shrink htmlFor="status">
              Status
            </InputLabel>
            <Select
              value={this.state.btj_merchants.status || ""}
              onChange={Utils.handleChangeSelect.bind(this, "btj_merchants")}
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

          {/* Footer */}
          <div className="footer-card">
            <Link to="/btj_merchantses/">Back to list</Link>

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
    actionsBtj_merchants: bindActionCreators(Btj_merchantsActions, dispatch),
  };
};

// Validate types
Btj_merchantsEdit.propTypes = { 
  actionsBtj_merchants: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    btj_merchants: state.Btj_merchantsEditReducer.btj_merchants
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Btj_merchantsEdit);
