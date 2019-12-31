import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authLogOut } from "./../Actions/Index";

const styleNav = {
  menu: {
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: "1.2rem"
  },
  log: {
    paddingRight: 40
  }
};

const NavBar = props => {
  //****testing
  console.log("props.user", props.user);

  return (
    <Menu secondary style={styleNav.menu} stackable>
      <Menu.Item as="h2">Dat</Menu.Item>
      <Menu.Item name="Home" as={Link} to="/" />
      <Menu.Item name="About" as={Link} to="/about" />

      {props.user && <Menu.Item name="Admin" as={Link} to="/admin" />}

      <Menu.Menu position="right" style={styleNav.log}>
        {props.user ? (
          <>
            <Menu.Item name={`${props.user}`} />
            <Menu.Item name="Logout" as="a" onClick={props.authLogOutRe} />
          </>
        ) : (
          <Menu.Item name="Login" as={Link} to="/login" />
        )}
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = {
  authLogOutRe: authLogOut
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
