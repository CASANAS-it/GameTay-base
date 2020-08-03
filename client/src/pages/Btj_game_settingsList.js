// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import Btj_game_settingsActions from "../redux/actions/Btj_game_settingsActions";

// END IMPORT ACTIONS

/** APIs

* actionsBtj_game_settings.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsBtj_game_settings.list
*	@description CRUD ACTION list
*

**/


class Btj_game_settingsList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsBtj_game_settings.loadBtj_game_settingsList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsBtj_game_settings.deleteBtj_game_settings(this.state.idDelete).then(data => {
      this.props.actionsBtj_game_settings.loadBtj_game_settingsList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "amt_per_unit",
        type: "number",
        label: "Amt_per_unit"
      }, 
      {
        id: "no_of_picks",
        type: "integer",
        label: "No_of_picks"
      }, 
      {
        id: "status",
        type: "string",
        label: "Status"
      }, 
      {
        id: "transtype",
        type: "string",
        label: "Transtype"
      },
    ];
    const link = "/btj_game_settingses/";

    return (
      <div>
        <h1>Btj_game_settings List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Amt_per_unit</TableCell>
              <TableCell align="right">No_of_picks</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Transtype</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/btj_game_settingses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.amt_per_unit }</TableCell>
                <TableCell align="right">{ row.no_of_picks }</TableCell>
                <TableCell align="right">{ row.status }</TableCell>
                <TableCell align="right">{ row.transtype }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/btj_game_settingses/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
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
Btj_game_settingsList.propTypes = { 
  actionsBtj_game_settings: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.Btj_game_settingsListReducer.listBtj_game_settings
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Btj_game_settingsList);
