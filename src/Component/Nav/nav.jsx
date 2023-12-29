import React from "react";
import PropTypes from "prop-types";
function Navigation(props){
    return(
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="mr-auto"></div>
        <ul className="navbar-nav my-2 my-lg-0">
    <li className="nav-item active">
          <a className="nav-link" href="#">{props.title}  </a>
        </li>
          <li className="nav-item">
            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-display="static" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {props.Myprofile}
          </a> 
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-display="static" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {props.AboutUs}
          </a> 
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-display="static" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {props.ContactUs}
          </a> 
          </li> 

        </ul>
    
        </div>
    )
}
export default Navigation;

Navigation.prototype = {
    title:PropTypes.string.isRequired,
    Myprofile:PropTypes.string.isRequired
}

Navigation.defaultProps = {
    title:'aaa',
    Myprofile:'bbb'
}