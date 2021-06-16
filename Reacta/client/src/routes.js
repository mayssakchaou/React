// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import PfeEditadmin from "./pages/PfeEditadmin";
import PfeListadmin from "./pages/PfeListadmin";
import AnneeUniveritaireE from "./pages/AnneeUniversitaireE";
import AnneeUniversitaireL from "./pages/AnneeUbiversitaireL";
import StudentEdit from "./pages/StudentEdit";
import StudentList from "./pages/StudentList";
import TeacherEdit from "./pages/TeacherEdit";
import TeacherList from "./pages/TeacherList";
import StudentEditInterface from "./pages/StudentEditInterface";
import StudentListInterface from "./pages/StudentListInterface";
import studentsT from "./pages/StudentsT";

import pfeEdit from "./pages/pfeEdit";
import pfeList from "./pages/pfeList";
/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";
import TeacherInterface from "./pages/TeacherInterface";
import StudentsT from "./pages/StudentsT";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute
                exact
                path="/users/:id"
                component={UserEdit}
                roles={["ADMIN"]}
              />
              <PrivateRoute
                exact
                path="/users"
                component={UserList}
                roles={["ADMIN"]}
              />

              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute
                exact
                path="/PfeListadmin/:id"
                component={PfeEditadmin}
              />
              <PrivateRoute
                exact
                path="/PfeListadmin"
                component={PfeListadmin}
              />
              <PrivateRoute
                exact
                path="/AnneeUniversitaire/:id"
                component={AnneeUniveritaireE}
              />
              <PrivateRoute
                exact
                path="/AnneeUniversitaire"
                component={AnneeUniversitaireL}
              />
              <PrivateRoute
                exact
                path="/students/:id"
                component={StudentEdit}
              />
              <PrivateRoute exact path="/students" component={StudentList} />
              <PrivateRoute
                exact
                path="/teachers/:id"
                component={TeacherEdit}
              />
              <PrivateRoute exact path="/teachers" component={TeacherList} />
              <PrivateRoute
                exact
                path="/studentsInterface/:id"
                component={StudentEditInterface}
              />
              <PrivateRoute
                exact
                path="/studentsInterface"
                component={StudentListInterface}
              />
              <PrivateRoute exact path="/pfeList/:id" component={pfeEdit} />
              <PrivateRoute exact path="/pfeList" component={pfeList} />
              <PrivateRoute
                exact
                path="/TeacherInterface"
                component={TeacherInterface}
              />
              <PrivateRoute exact path="/studentsT" component={StudentsT} />

              {/* END MY VIEWS */}
            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;
