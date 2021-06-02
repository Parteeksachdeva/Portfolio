import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import "./Navbar.css"
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    return (
    <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
            <div className="nav-title">
            <a href="/" className="logo">Sachdeva.</a>
            </div>
        </div>
        <div className="nav-btn">
            <label htmlFor="nav-check">
            <MenuIcon className="menu"/>
            </label>
        </div>
        
        <div className="nav-links">
            <NavLink to="/" className="navlink">Home</NavLink>
            <NavLink to="/About" className="navlink">About</NavLink>   
            <NavLink to="/Skills" className="navlink">Skills</NavLink>
            <NavLink to="/Projects" className="navlink">Projects</NavLink>
            <NavLink to="/Contact" className="navlink">Contact</NavLink>
            
        </div>
    </div>
    )
}

export default Navbar
