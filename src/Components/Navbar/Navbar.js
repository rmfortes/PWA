import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Navbar extends Component {
    render() {
        return (
            <div>
               <nav>
                   <Link to="/"><p>ABOUT</p></Link>
                   <Link to="/camera"><p>SNAP</p></Link>
                   <Link to="/map"><p>MAP</p></Link>
               </nav>
            </div>
        );
    }
}

export default Navbar;