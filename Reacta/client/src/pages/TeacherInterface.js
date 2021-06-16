// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons/faUserAlt";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table

// Custom Actions

// START IMPORT ACTIONS
import TeacherActions from "../redux/actions/TeacherActions";

// END IMPORT ACTIONS

/** APIs

* actionsTeacher.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsTeacher.list
*	@description CRUD ACTION list
*

**/

class TeacherList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false,
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsTeacher.loadTeacherList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsTeacher
      .deleteTeacher(this.state.idDelete)
      .then((data) => {
        this.props.actionsTeacher.loadTeacherList();
        this.setState({ openDialogDelete: false, idDelete: null });
      });
  }

  // Show content
  render() {
    const columns = [
      {
        id: "lastname",
        type: "string",
        label: "Lastname",
      },
      {
        id: "name",
        type: "string",
        label: "Name",
      },
      {
        id: "cin",
        type: "string",
        label: "cin",
      },
    ];
    const link = "/teachers/";

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card bg-secondary text-white shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Students</h5>
                <p className="card-text">
                  You can add, list, update and delete students.
                </p>
                <Link to="/studentsT" className="btn btn-light">
                  <FontAwesomeIcon className="text-primary" icon={faUserAlt} />{" "}
                  Go to Students
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card bg-secondary text-white shadow-lg">
              <div className="card-body">
                <h5 className="card-title">PFE</h5>
                <p className="card-text">
                  You can view the year-end projects desciptions.
                </p>
                <Link to="/pfeT" className="btn btn-light">
                  <FontAwesomeIcon className="text-primary" icon={faUserAlt} />{" "}
                  Go to PFE
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Lastname</TableCell>
              <TableCell align="right">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/teachers/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.lastname }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function (dispatch) {
  return {
    actionsTeacher: bindActionCreators(TeacherActions, dispatch),
  };
};

// Validate types
TeacherList.propTypes = {
  actionsTeacher: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.TeacherListReducer.listTeacher,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherList);
