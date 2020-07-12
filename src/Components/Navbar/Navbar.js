import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarLinks: [
        { item: "ABOUT", link: "/about" },
        { item: "SNAP", link: "/snap" },
        { item: "MAP", link: "/map" },
      ],
    };
  }

  render() {
    let navBarLinks = this.state.navBarLinks.map((navBarLink, i) => (
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
          <div className="links">{navBarLinks}</div>
          <NavbarMenu />
        </nav>
      </div>
    );
  }
}

export default Navbar;
