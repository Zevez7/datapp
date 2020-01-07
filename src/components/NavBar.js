import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLogout } from "./../Actions/Index";

const styleNav = {
  menu: {
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: "1.2rem",
    margin: 0
  },
  log: {
    paddingRight: 40
  }
};

const NavBar = props => {
  const handleLogout = () => {
    props.userLogoutRx();
  };

  return (
    <Menu secondary style={styleNav.menu} stackable>
      <Menu.Item as="h2">Dat</Menu.Item>
      <Menu.Item name="Home" as={Link} to="/" />
      <Menu.Item name="About" as={Link} to="/about" />

      {props.user && <Menu.Item name="Admin" as={Link} to="/admin" />}

      <Menu.Menu position="right" style={styleNav.log}>
        {props.user ? (
          <>
            <Menu.Item content={`${props.user}`} />
            <Menu.Item name="Logout" as="a" onClick={handleLogout} />
          </>
        ) : (
          <Menu.Item name="Login" as={Link} to="/login" />
        )}
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = state => {
  let userEmail = null;
  if (state.auth.user != null) {
    userEmail = state.auth.user.email;
  }

  return {
    user: userEmail
  };
};

const mapDispatchToProps = {
  userLogoutRx: userLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
