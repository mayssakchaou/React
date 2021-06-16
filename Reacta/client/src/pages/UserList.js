// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";
import SecurityService from "../security/SecurityService";


// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import UserActions from "../redux/actions/UserActions";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

/** APIs

* UserService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* UserService.list
*	@description CRUD ACTION list
*

**/

class UserList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actions.loadUserList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actions.deleteUser(this.state.idDelete).then(data => {
      this.props.actions.loadUserList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [
      {
        id: "username",
        type: "string",
        label: "Username"
      },
      {
        id: "name",
        type: "string",
        label: "Name"
      },
      {
        id: "surname",
        type: "string",
        label: "Surname"
      },
      {
        id: "mail",
        type: "string",
        label: "Mail"
      },
      {
        id: "roles",
        type: "string",
        label: "Roles"
      }
    ];
    const link = "/users/";


    return (

      <div>
        <h1>User List</h1>

        <EnhancedTable 
        
            data={this.props.list}
            columns={columns}
            link={link}
            onDelete={this.delete.bind(this)}   /> 
        
           <DialogDelete
            open={this.state.openDialogDelete}
            onClose={this.closeDialogDelete.bind(this)}
            onConfirm={this.confirmDialogDelete.bind(this)}
            />
         
        <div className="footer-card">
          <Link to="/users/new">
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
    actions: bindActionCreators(UserActions, dispatch)
  };
};

// Validate types
UserList.propTypes = {
  actions: PropTypes.object.isRequired
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.UserListReducer.listUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);