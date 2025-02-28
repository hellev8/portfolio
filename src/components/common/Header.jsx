import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../../styles/Header.css';

const Header = ({ collapsed, onLanguageChange }) => {
    const [language, setLanguage] = useState("en");

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        if (onLanguageChange) {
            onLanguageChange(selectedLanguage);
        }
    };

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
{/*                <select value={language} onChange={handleLanguageChange} className="language-selector">
                    <option value="en">English</option>
                    <option value="it">Italiano</option>
                </select>*/}
            </nav>
        </header>
    );
};

export default Header;
