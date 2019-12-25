import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const styleNav = {
  menu: {
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10
  }
};

const NavBar = () => {
  return (
    <Menu secondary style={styleNav.menu} stackable>
      <Menu.Item as="h2">Dat</Menu.Item>
      <Menu.Item
        name="Home"
        as={Link}
        to="/" // active={activeItem === "closest"}
        // onClick={this.handleItemClick}
      />
      <Menu.Item
        name="About"
        as={Link}
        to="/about"

        // active={activeItem === "mostComments"}
        // onClick={this.handleItemClick}
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="Login"
          as="h4"

          // active={activeItem === "logout"}
          // onClick={this.handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
