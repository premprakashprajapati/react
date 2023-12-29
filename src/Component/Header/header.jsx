import React from "react"; 
import './header.css';
import logo from '../../logo.svg';
import Search from "../Logo/logo.jsx";
import Navigation from "../../Component/Nav/nav";
function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
        <img src={logo} className="App-logo" width="120" height="60" alt="logo" />
        </a>
       <Search />
      
       <Navigation title={"My Home"} Myprofile="My Profile" ContactUs="Contact US" AboutUs="ABout Us"/>
      </nav>
    )
}


export default Header;