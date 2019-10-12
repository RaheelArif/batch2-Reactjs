import React, {Component} from 'react';
import {Link } from "react-router-dom"

class Navbar extends Component{
    render(){
        return(
            <div className="header-c">
                <Link to="/"><b>OLX</b></Link>

             
                <Link to="/price">price</Link>
                <Link to="/about">About Us</Link>
            </div>
        )
    }

}
export default Navbar;




