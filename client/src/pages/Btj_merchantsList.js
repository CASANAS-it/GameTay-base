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
import Btj_merchantsActions from "../redux/actions/Btj_merchantsActions";

// END IMPORT ACTIONS

/** APIs

* actionsBtj_merchants.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsBtj_merchants.list
*	@description CRUD ACTION list
*

**/


class Btj_merchantsList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsBtj_merchants.loadBtj_merchantsList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsBtj_merchants.deleteBtj_merchants(this.state.idDelete).then(data => {
      this.props.actionsBtj_merchants.loadBtj_merchantsList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "code",
        type: "string",
        label: "Code"
      }, 
      {
        id: "creation_date",
        type: "date",
        label: "Creation_date"
      }, 
      {
        id: "first_name",
        type: "string",
        label: "First_name"
      }, 
      {
        id: "last_name",
        type: "string",
        label: "Last_name"
      }, 
      {
        id: "middle_initial",
        type: "string",
        label: "Middle_initial"
      }, 
      {
        id: "mobilenum",
        type: "string",
        label: "Mobilenum"
      }, 
      {
        id: "percentage",
        type: "number",
        label: "Percentage"
      }, 
      {
        id: "status",
        type: "string",
        label: "Status"
      },
    ];
    const link = "/btj_merchantses/";

    return (
      <div>
        <h1>Btj_merchants List</h1>

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
              <TableCell align="right">Code</TableCell>
              <TableCell align="right">Creation_date</TableCell>
              <TableCell align="right">First_name</TableCell>
              <TableCell align="right">Last_name</TableCell>
              <TableCell align="right">Middle_initial</TableCell>
              <TableCell align="right">Mobilenum</TableCell>
              <TableCell align="right">Percentage</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/btj_merchantses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.code }</TableCell>
                <TableCell align="right">{ row.creation_date }</TableCell>
                <TableCell align="right">{ row.first_name }</TableCell>
                <TableCell align="right">{ row.last_name }</TableCell>
                <TableCell align="right">{ row.middle_initial }</TableCell>
                <TableCell align="right">{ row.mobilenum }</TableCell>
                <TableCell align="right">{ row.percentage }</TableCell>
                <TableCell align="right">{ row.status }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/btj_merchantses/new">
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
    actionsBtj_merchants: bindActionCreators(Btj_merchantsActions, dispatch),
  };
};

// Validate types
Btj_merchantsList.propTypes = { 
  actionsBtj_merchants: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.Btj_merchantsListReducer.listBtj_merchants
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Btj_merchantsList);
