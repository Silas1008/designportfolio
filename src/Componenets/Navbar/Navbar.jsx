import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/"><h1 style={{textDecoration:'none'}}>AR</h1></Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/designers">For Designers</Link></li>
                <li><Link to="/developers">For Developers</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
