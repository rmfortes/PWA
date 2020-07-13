import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";

const navBarLinks = [
  { item: "ABOUT", link: "/ABOUT" },
  { item: "SNAP", link: "/snap" },
  { item: "MAP", link: "/map" },
];

class Navbar extends Component {

  render() {
    let navBar = navBarLinks.map((navBarLink, i) => (
      <NavLink
        exact
        to={navBarLink.link}
        key={i}
        className="link"
        activeStyle={{
          color: "#646161",
          visibility: "visible",
        }}
      >
        {navBarLink.item}
      </NavLink>
    ));

    return (
      <div>
        <nav>
          <div className="links">{navBar}</div>
          <NavbarMenu />
        </nav>
      </div>
    );
  }
}

export default Navbar;
