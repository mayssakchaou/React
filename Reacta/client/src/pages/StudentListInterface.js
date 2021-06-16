// Dependencies
import React, { Component } from "react";

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
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions

// START IMPORT ACTIONS
import StudentActions from "../redux/actions/StudentActions";

// END IMPORT ACTIONS

/** APIs

* actionsStudent.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsStudent.list
*	@description CRUD ACTION list
*

**/

class StudentList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false,
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsStudent.loadStudentList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsStudent
      .deleteStudent(this.state.idDelete)
      .then((data) => {
        this.props.actionsStudent.loadStudentList();
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
      {
        id: "classe",
        type: "string",
        label: "classe",
      },
    ];
    const link = "/students/";

    return (
      <div>
        <h1>Student List</h1>

        <EnhancedTable columns={columns} />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">DOB</TableCell>
              <TableCell align="right">Lastname</TableCell>
              <TableCell align="right">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/students/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.DOB }</TableCell>
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
    actionsStudent: bindActionCreators(StudentActions, dispatch),
  };
};

// Validate types
StudentList.propTypes = {
  actionsStudent: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.StudentListReducer.listStudent,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
