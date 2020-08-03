import React, { Component } from "react";
import { Link } from "react-router-dom";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions
import UserActions from '../redux/actions/UserActions';

// START IMPORT ACTIONS

// END IMPORT ACTIONS

/** APIs

**/

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>

        <h3>Sitemap</h3>
                    
        <div>
          <Link to="/btj_transactions_alls">Link to btj_transactions_allList</Link>
        </div>
        <div>
          <Link to="/btj_game_settingses">Link to btj_game_settingsList</Link>
        </div>
        <div>
          <Link to="/btj_drawses">Link to btj_drawsList</Link>
        </div>
        <div>
          <Link to="/btj_merchantses">Link to btj_merchantsList</Link>
        </div>
        
            
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsUser: bindActionCreators(UserActions, dispatch)
  };
};

// Validate types
Home.propTypes = {
  actionsUser: PropTypes.object.isRequired
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    user: state.LoginReducer.user
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
