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

// Custom Actions

// START IMPORT ACTIONS
import PfeActions from "../redux/actions/PfeActions";
import AnneeActions from "../redux/actions/AnneeActions";
import TeacherActions from "../redux/actions/TeacherActions";
import StudentActions from "../redux/actions/StudentActions";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// END IMPORT ACTIONS

/** APIs

* actionsCourse.create
*	@description CRUD ACTION create
*
* actionsCourse.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsCourse.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsExam.findBy_course
*	@description CRUD ACTION findBy_course
*	@param Objectid key - Id of model to search for
*
* actionsTeacher.findBy_courses
*	@description CRUD ACTION findBy_courses
*	@param Objectid key - Id of model to search for
*
* actionsStudent.findBy_courses
*	@description CRUD ACTION findBy_courses
*	@param Objectid key - Id of model to search for
*

**/

class CourseEdit extends Component {
  // Init course
  constructor(props) {
    super(props);
    this.state = {
      course: {},
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsCourse.loadCourse(this.props.match.params.id);
      this.props.actionsExam.findBy_course(this.props.match.params.id);
      this.props.actionsStudent.findBy_courses(this.props.match.params.id);
      this.props.actionsTeacher.findBy_courses(this.props.match.params.id);
    }
  }

  // Insert props course in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      course: props.course,
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.course._id) {
      this.props.actionsCourse.saveCourse(this.state.course).then((data) => {
        this.props.history.push("/pfeList/");
      });
    } else {
      this.props.actionsCourse.createCourse(this.state.course).then((data) => {
        this.props.history.push("/pfeList/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>PFE Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>
          <TextField
            id="title"
            label="Title"
            value={this.state.course.title || ""}
            onChange={Utils.handleChange.bind(this, "course")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.course.title && this.state.course.title === ""
              ? { error: true }
              : {})}
          />
          <TextField
            rows="5"
            cols="33"
            id="description"
            label="Description"
            value={this.state.course.description || ""}
            onChange={Utils.handleChange.bind(this, "course")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.course.description &&
            this.state.course.description === ""
              ? { error: true }
              : {})}
          />

          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}

          {/* External relation with exam */}

          {/* External relation with student */}

          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_teacher">Encadrant Associé</InputLabel>
            <Select
              multiple
              value={this.state.listTeacher || []}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
              input={<Input id="_teacher" name="_teacher" />}
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listTeacher &&
                this.props.listTeacher.map((item) => (
                  <MenuItem
                    key={item._id}
                    value={item._id}
                    style={{
                      fontWeight:
                        this.state.listTeacher &&
                        this.state.listTeacher.indexOf(item._id) === -1
                          ? "regular"
                          : "bold",
                    }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          {/* External relation with teacher
          
          <h3>Teacher</h3>
          {(!this.props.listTeacher || this.props.listTeacher.length === 0) && 
            <div>No Teacher associated</div>
          }
          {this.props.listTeacher &&
            this.props.listTeacher.map((item, i) => {
              return (
                <Link to={"/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })} */}

          {/* Footer */}
          <div className="footer-card">
            <Link to="/pfeList/">Back to list</Link>

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
const mapDispatchToProps = function (dispatch) {
  return {
    actionsCourse: bindActionCreators(PfeActions, dispatch),
    actionsExam: bindActionCreators(AnneeActions, dispatch),
    actionsTeacher: bindActionCreators(TeacherActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
  };
};

// Validate types
CourseEdit.propTypes = {
  actionsCourse: PropTypes.object.isRequired,
  actionsExam: PropTypes.object.isRequired,
  actionsTeacher: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    course: state.PfeEditReducer.course,
    listExam: state.PfeEditReducer.listExam,
    listStudent: state.PfeEditReducer.listStudent,
    listTeacher: state.PfeEditReducer.listTeacher,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseEdit);
