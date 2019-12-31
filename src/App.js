import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import { Container } from "semantic-ui-react";
import About from "./components/About";
import Auth from "./components/Auth/Auth";
import Admin from "./components/Admin/Admin";

function App() {
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
                />{" "}
                <Route
                  exact
                  path="/login"
                  render={props => <Auth {...props} />}
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

export default App;
