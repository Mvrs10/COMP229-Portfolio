//File: Nav Bar
//Student: Minh Khoi Phan
//ID: 301278135;
//Date: Sept. 28, 2024
import React from 'react';
import './navbar.css';
import logo from '../../assets/logo2.png';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div classname="mainMenu">
                <Link to="/" className="mainMenuList" style={{textDecoration:'inherit', color: 'inherit'}}>Home</Link>
                <Link to="/About" className="mainMenuList" style={{textDecoration:'inherit', color: 'inherit'}}>About</Link>
                <Link to="/Service" className="mainMenuList" style={{textDecoration:'inherit', color: 'inherit'}}>Service</Link>
                <Link to="/Project" className="mainMenuList" style={{textDecoration:'inherit', color: 'inherit'}}>Projects</Link>
            </div>
            <Link to="/Contact" className="contactMe"><button className="mainMenuBtn" style={{textDecoration:'inherit', color: 'red'}}> Contact Me</button></Link>
        </nav>
    )
}
export default Navbar