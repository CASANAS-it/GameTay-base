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

// Custom Actions


// START IMPORT ACTIONS
import Btj_drawsActions from "../redux/actions/Btj_drawsActions";

// END IMPORT ACTIONS

/** APIs

* actionsBtj_draws.create
*	@description CRUD ACTION create
*
* actionsBtj_draws.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsBtj_draws.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class Btj_drawsEdit extends Component {
  // Init btj_draws
  constructor(props) {
    super(props);
    this.state = {
      btj_draws: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsBtj_draws.loadBtj_draws(this.props.match.params.id);
    }
    
  }

  // Insert props btj_draws in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      btj_draws: props.btj_draws
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.btj_draws._id) {
      this.props.actionsBtj_draws.saveBtj_draws(this.state.btj_draws).then(data => {
        this.props.history.push("/btj_drawses/");
      });
    } else {
      this.props.actionsBtj_draws.createBtj_draws(this.state.btj_draws).then(data => {
        this.props.history.push("/btj_drawses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Btj_draws Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="allocated_percentage"
            label="Allocated_percentage"
            value={this.state.btj_draws.allocated_percentage || ""}
            onChange={Utils.handleChange.bind(this, "btj_draws")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="amount"
            label="Amount"
            value={this.state.btj_draws.amount || ""}
            onChange={Utils.handleChange.bind(this, "btj_draws")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="draw_date"
            label="Draw_date"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.btj_draws.draw_date
                ? new Date(this.state.btj_draws.draw_date)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "btj_draws", "draw_date")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="draw_result"
            label="Draw_result"
            value={this.state.btj_draws.draw_result || ""}
            onChange={Utils.handleChange.bind(this, "btj_draws")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="game_type"
            label="Game_type"
            value={this.state.btj_draws.game_type || ""}
            onChange={Utils.handleChange.bind(this, "btj_draws")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="merchant_percentage"
            label="Merchant_percentage"
            value={this.state.btj_draws.merchant_percentage || ""}
            onChange={Utils.handleChange.bind(this, "btj_draws")}
            type="number"
            margin="normal"
            fullWidth
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/btj_drawses/">Back to list</Link>

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
    actionsBtj_draws: bindActionCreators(Btj_drawsActions, dispatch),
  };
};

// Validate types
Btj_drawsEdit.propTypes = { 
  actionsBtj_draws: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    btj_draws: state.Btj_drawsEditReducer.btj_draws
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Btj_drawsEdit);
