
import React, { useEffect, useState } from 'react'
import SidebarNav from './components/sidebar/Sidebar';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { connect } from 'react-redux';

import 'bootstrap-daterangepicker/daterangepicker.css';
import Dashboard from './pages/dashboard/Dashboard';
import Employees from './pages/employees/Employees';
import Students from './pages/students/Students';
import Auth from './pages/authPages/Auth';

const App = ( props ) => {

    const loggedIn = props.loggedIn
    const [sidenavToggle, setSidenavToggle] = useState(false)

    useEffect(() => {
        if (loggedIn) {
            if (window.location.pathname !== "/login" && window.location.pathname !== "/signup" && window.location.pathname !== "/forgot-password" ) return
            window.location.replace("/dashboard");
        }
        else {
            if (window.location.pathname === "/login" || window.location.pathname === "/signup" || window.location.pathname === "/forgot-password" ) return
            window.location.replace("/login");
        };
    }, [])

  return (
    <div>
      { loggedIn 
      ?
      <div id="main-app">
        <Router>
            <SidebarNav sidenavToggle={sidenavToggle} setSidenavToggle={setSidenavToggle}/>
            <NavBar sidenavToggle={sidenavToggle} setSidenavToggle={setSidenavToggle}/>
            <div id="main-app-page">
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/employees">
                        <Employees />
                    </Route>
                    <Route exact path="/students">
                        <Students />
                    </Route>
                </Switch>
            </div>
        </Router>
      </div>
      :
      <Router>
          <Switch>
              <Route exact path="/login">
                  <Auth />
              </Route>
              <Route exact path="/signup">
                  <Auth />
              </Route>
              <Route exact path="/forgot-password">
                  <Auth />
              </Route>
          </Switch>
      </Router>
      } 
    </div>
  )
}

const mapStateToProps = (state) => ({
  loggedIn: state.login
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)