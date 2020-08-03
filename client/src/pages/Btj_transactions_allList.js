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
import Btj_transactions_allActions from "../redux/actions/Btj_transactions_allActions";

// END IMPORT ACTIONS

/** APIs

* actionsBtj_transactions_all.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsBtj_transactions_all.list
*	@description CRUD ACTION list
*

**/


class Btj_transactions_allList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsBtj_transactions_all.loadBtj_transactions_allList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsBtj_transactions_all.deleteBtj_transactions_all(this.state.idDelete).then(data => {
      this.props.actionsBtj_transactions_all.loadBtj_transactions_allList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "amount",
        type: "number",
        label: "Amount"
      }, 
      {
        id: "lastupdate",
        type: "date",
        label: "Lastupdate"
      }, 
      {
        id: "lucky",
        type: "boolean",
        label: "Lucky"
      }, 
      {
        id: "merchant_code",
        type: "string",
        label: "Merchant_code"
      }, 
      {
        id: "mobilenum",
        type: "string",
        label: "Mobilenum"
      }, 
      {
        id: "pickno_1",
        type: "number",
        label: "Pickno_1"
      }, 
      {
        id: "pickno_2",
        type: "number",
        label: "Pickno_2"
      }, 
      {
        id: "pickno_3",
        type: "number",
        label: "Pickno_3"
      }, 
      {
        id: "pickno_4",
        type: "number",
        label: "Pickno_4"
      }, 
      {
        id: "refnum",
        type: "string",
        label: "Refnum"
      }, 
      {
        id: "status",
        type: "string",
        label: "Status"
      }, 
      {
        id: "transbody",
        type: "string",
        label: "Transbody"
      }, 
      {
        id: "transdate",
        type: "date",
        label: "Transdate"
      }, 
      {
        id: "transtype",
        type: "string",
        label: "Transtype"
      },
    ];
    const link = "/btj_transactions_alls/";

    return (
      <div>
        <h1>Btj_transactions_all List</h1>

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
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Lastupdate</TableCell>
              <TableCell align="right">Lucky</TableCell>
              <TableCell align="right">Merchant_code</TableCell>
              <TableCell align="right">Mobilenum</TableCell>
              <TableCell align="right">Pickno_1</TableCell>
              <TableCell align="right">Pickno_2</TableCell>
              <TableCell align="right">Pickno_3</TableCell>
              <TableCell align="right">Pickno_4</TableCell>
              <TableCell align="right">Refnum</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Transbody</TableCell>
              <TableCell align="right">Transdate</TableCell>
              <TableCell align="right">Transtype</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/btj_transactions_alls/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.amount }</TableCell>
                <TableCell align="right">{ row.lastupdate }</TableCell>
                <TableCell align="right">{ row.lucky }</TableCell>
                <TableCell align="right">{ row.merchant_code }</TableCell>
                <TableCell align="right">{ row.mobilenum }</TableCell>
                <TableCell align="right">{ row.pickno_1 }</TableCell>
                <TableCell align="right">{ row.pickno_2 }</TableCell>
                <TableCell align="right">{ row.pickno_3 }</TableCell>
                <TableCell align="right">{ row.pickno_4 }</TableCell>
                <TableCell align="right">{ row.refnum }</TableCell>
                <TableCell align="right">{ row.status }</TableCell>
                <TableCell align="right">{ row.transbody }</TableCell>
                <TableCell align="right">{ row.transdate }</TableCell>
                <TableCell align="right">{ row.transtype }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/btj_transactions_alls/new">
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
    actionsBtj_transactions_all: bindActionCreators(Btj_transactions_allActions, dispatch),
  };
};

// Validate types
Btj_transactions_allList.propTypes = { 
  actionsBtj_transactions_all: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.Btj_transactions_allListReducer.listBtj_transactions_all
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Btj_transactions_allList);
