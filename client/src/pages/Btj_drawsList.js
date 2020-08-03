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
import Btj_drawsActions from "../redux/actions/Btj_drawsActions";

// END IMPORT ACTIONS

/** APIs

* actionsBtj_draws.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsBtj_draws.list
*	@description CRUD ACTION list
*

**/


class Btj_drawsList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsBtj_draws.loadBtj_drawsList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsBtj_draws.deleteBtj_draws(this.state.idDelete).then(data => {
      this.props.actionsBtj_draws.loadBtj_drawsList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "allocated_percentage",
        type: "number",
        label: "Allocated_percentage"
      }, 
      {
        id: "amount",
        type: "number",
        label: "Amount"
      }, 
      {
        id: "draw_date",
        type: "date",
        label: "Draw_date"
      }, 
      {
        id: "draw_result",
        type: "string",
        label: "Draw_result"
      }, 
      {
        id: "game_type",
        type: "string",
        label: "Game_type"
      }, 
      {
        id: "merchant_percentage",
        type: "number",
        label: "Merchant_percentage"
      },
    ];
    const link = "/btj_drawses/";

    return (
      <div>
        <h1>Btj_draws List</h1>

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
              <TableCell align="right">Allocated_percentage</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Draw_date</TableCell>
              <TableCell align="right">Draw_result</TableCell>
              <TableCell align="right">Game_type</TableCell>
              <TableCell align="right">Merchant_percentage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/btj_drawses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.allocated_percentage }</TableCell>
                <TableCell align="right">{ row.amount }</TableCell>
                <TableCell align="right">{ row.draw_date }</TableCell>
                <TableCell align="right">{ row.draw_result }</TableCell>
                <TableCell align="right">{ row.game_type }</TableCell>
                <TableCell align="right">{ row.merchant_percentage }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/btj_drawses/new">
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
    actionsBtj_draws: bindActionCreators(Btj_drawsActions, dispatch),
  };
};

// Validate types
Btj_drawsList.propTypes = { 
  actionsBtj_draws: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.Btj_drawsListReducer.listBtj_draws
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Btj_drawsList);
