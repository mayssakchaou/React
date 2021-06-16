import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons/faUserAlt";
import "./Home.css";
import SecurityService from "../security/SecurityService";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions
import UserActions from "../redux/actions/UserActions";

// START IMPORT ACTIONS

// END IMPORT ACTIONS

/** APIs

**/

class Home extends Component {
  render() {
    return (
      <div>
        {SecurityService.hasRole("Student") && <Link to="/students"></Link>}
        {/* <h2>Home</h2> */}

        <h3>Welcome</h3>

        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row px-2">
              <div className="col-sm-4 p-sm-2">
                <div className="card bg-secondary text-white shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title">Students</h5>
                    <p className="card-text">
                      You can add, list, update and delete students.
                    </p>
                    <Link to="/students" className="btn btn-light">
                      <FontAwesomeIcon
                        className="text-primary"
                        icon={faUserAlt}
                      />{" "}
                      Go to Students
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 p-sm-2">
                <div className="card bg-secondary text-white shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title">Teachers</h5>
                    <p className="card-text">
                      You can add, list, update and delete teachers.
                    </p>
                    <Link to="/teachers" className="btn btn-light">
                      <FontAwesomeIcon
                        className="text-primary"
                        icon={faUserAlt}
                      />{" "}
                      Go to Teachers
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 p-sm-2">
                <div className="card bg-secondary text-white shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title">PFE</h5>
                    <p className="card-text">
                      You can view the year-end projects desciptions.
                    </p>
                    <Link to="/PfeListadmin" className="btn btn-light">
                      <FontAwesomeIcon
                        className="text-primary"
                        icon={faUserAlt}
                      />{" "}
                      Go to PFE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function (dispatch) {
  return {
    actionsUser: bindActionCreators(UserActions, dispatch),
  };
};

// Validate types
Home.propTypes = {
  actionsUser: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    user: state.LoginReducer.user,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
