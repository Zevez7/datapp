import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import { Container } from "semantic-ui-react";
import About from "./components/About";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import { checkAuthState, getProjects } from "./Actions/Index";
import { connect } from "react-redux";

function App(props) {
  const { getProjectsRx } = props;
  console.log("app page call");

  props.checkAuthStateRx();
  useEffect(() => {
    console.log("app useEffect call");
    getProjectsRx();
  }, [getProjectsRx]);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <ScrollToTop>
          <Switch>
            <>
              <Container>
                <Route exact path="/" render={props => <Home {...props} />} />
                <Route
                  exact
                  path="/about"
                  render={props => <About {...props} />}
                />
                <Route
                  exact
                  path="/login"
                  render={props => <Login {...props} />}
                />
                <Route
                  exact
                  path="/admin"
                  render={props => <Admin {...props} />}
                />
              </Container>
            </>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  checkAuthStateRx: checkAuthState,
  getProjectsRx: getProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
