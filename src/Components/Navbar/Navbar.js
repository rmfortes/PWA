import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarLinks: [
        { item: "ABOUT", link: "/" },
        { item: "SNAP", link: "/camera" },
        { item: "MAP", link: "/map" }
      ],
    };
  }

  render() {
    let navBarLinks = this.state.navBarLinks.map((navBarLink, i) => (

      <Link to={navBarLink.link} key = {i}>{navBarLink.item}</Link>
  
    ));

    return (
      <div>
        <nav>
          {navBarLinks}
        </nav>
      </div>
    );
  }
}

export default Navbar;
