import React from "react";
import {NavLink} from "react-router-dom";
import '../../styles/Header.css';

const Header = ({collapsed}) => {
    return (
        <header className={`header ${collapsed ? 'collapsed' : ''}`}>
            <nav className="nav">
                <NavLink to="/" exact activeClassName="active">
                    Home
                </NavLink>
                <NavLink to="/albums" activeClassName="active">
                    Albums
                </NavLink>
                <NavLink to="/contact" activeClassName="active">
                    Contact
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
