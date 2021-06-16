import { combineReducers } from "redux";

// START IMPORT REDUCERS
import HomeReducer from "./HomeReducer";
import PfeEditReducer from "./PfeEditReducer";
import PfeListReducer from "./PfeListReducer";
import AnneeEditReducer from "./AnneeEditReducer";
import AnneeListReducer from "./AnneeListReducer";
import StudentEditReducer from "./StudentEditReducer";
import StudentListReducer from "./StudentListReducer";
import TeacherEditReducer from "./TeacherEditReducer";
import TeacherListReducer from "./TeacherListReducer";

// END IMPORT REDUCERS

// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
  HomeReducer,
  PfeEditReducer,
  PfeListReducer,
  AnneeEditReducer,
  AnneeListReducer,
  StudentEditReducer,
  StudentListReducer,
  TeacherEditReducer,
  TeacherListReducer,
  // END COMBINE REDUCERS
});

export default rootReducer;
