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
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// Custom Actions


// START IMPORT ACTIONS
import Btj_transactions_allActions from "../redux/actions/Btj_transactions_allActions";

// END IMPORT ACTIONS

/** APIs

* actionsBtj_transactions_all.create
*	@description CRUD ACTION create
*
* actionsBtj_transactions_all.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsBtj_transactions_all.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class Btj_transactions_allEdit extends Component {
  // Init btj_transactions_all
  constructor(props) {
    super(props);
    this.state = {
      btj_transactions_all: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsBtj_transactions_all.loadBtj_transactions_all(this.props.match.params.id);
    }
    
  }

  // Insert props btj_transactions_all in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      btj_transactions_all: props.btj_transactions_all
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.btj_transactions_all._id) {
      this.props.actionsBtj_transactions_all.saveBtj_transactions_all(this.state.btj_transactions_all).then(data => {
        this.props.history.push("/btj_transactions_alls/");
      });
    } else {
      this.props.actionsBtj_transactions_all.createBtj_transactions_all(this.state.btj_transactions_all).then(data => {
        this.props.history.push("/btj_transactions_alls/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Btj_transactions_all Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="amount"
            label="Amount"
            value={this.state.btj_transactions_all.amount || ""}
            onChange={Utils.handleChange.bind(this, "btj_transactions_all")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.btj_transactions_all.amount && this.state.btj_transactions_all.amount === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="lastupdate"
            label="Lastupdate"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.btj_transactions_all.lastupdate
                ? new Date(this.state.btj_transactions_all.lastupdate)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "btj_transactions_all", "lastupdate")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <FormControlLabel
            control={
              <Switch
                id="lucky"
                checked={this.state.btj_transactions_all.lucky || false}
                onChange={Utils.handleChangeCheck.bind(this, "btj_transactions_all", "lucky")}
                color="primary"
              />
            }
            label="lucky"
            className="mt-20"
          />
          
          
          <TextField
            id="merchant_code"
            label="Merchant_code"
            value={this.state.btj_transactions_all.merchant_code || ""}
            onChange={Utils.handleChange.bind(this, "btj_transactions_all")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.btj_transactions_all.merchant_code && this.state.btj_transactions_all.merchant_code === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="mobilenum"
            label="Mobilenum"
            value={this.state.btj_transactions_all.mobilenum || ""}
            onChange={Utils.handleChange.bind(this, "btj_transactions_all")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.btj_transactions_all.mobilenum && this.state.btj_transactions_all.mobilenum === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="pickno_1"
            label="Pickno_1"
            value={this.state.btj_transactions_all.pickno_1 || ""}
            onChange={Utils.handleChange.bind(this, "btj_transactions_all")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.btj_transactions_all.pickno_1 && this.state.btj_transactions_all.pickno_1 === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="pickno_2"
            label="Pickno_2"
            value={this.state.btj_transactions_all.pickno_2 || ""}
            onChange={Utils.handleChange.bind(this, "btj_transactions_all")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.btj_transactions_all.pickno_2 && this.state.btj_transactions_all.pickno_2 === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="pickno_3"
            label="Pickno_3"
            value={this.state.btj_transactions_all.pickno_3 || ""}
            onChange={Utils.handleChange.bind(this, "btj_transactions_all")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="pickno_4"
            label="Pickno_4"
            value={this.state.btj_transactions_all.pickno_4 || ""}
            onChange={Utils.handleChange.bind(this, "btj_transactions_all")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="refnum"
            label="Refnum"
            value={this.state.btj_transactions_all.refnum || ""}
            onChange={Utils.handleChange.bind(this, "btj_transactions_all")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="status"
            label="Status"
            value={this.state.btj_transactions_all.status || ""}
            onChange={Utils.handleChange.bind(this, "btj_transactions_all")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="transbody"
            label="Transbody"
            value={this.state.btj_transactions_all.transbody || ""}
            onChange={Utils.handleChange.bind(this, "btj_transactions_all")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="transdate"
            label="Transdate"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.btj_transactions_all.transdate
                ? new Date(this.state.btj_transactions_all.transdate)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "btj_transactions_all", "transdate")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="transtype"
            label="Transtype"
            value={this.state.btj_transactions_all.transtype || ""}
            onChange={Utils.handleChange.bind(this, "btj_transactions_all")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.btj_transactions_all.transtype && this.state.btj_transactions_all.transtype === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/btj_transactions_alls/">Back to list</Link>

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
    actionsBtj_transactions_all: bindActionCreators(Btj_transactions_allActions, dispatch),
  };
};

// Validate types
Btj_transactions_allEdit.propTypes = { 
  actionsBtj_transactions_all: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    btj_transactions_all: state.Btj_transactions_allEditReducer.btj_transactions_all
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Btj_transactions_allEdit);
