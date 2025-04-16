import React from 'react';
import './Header.css'; // link to css file for styling

const Header = () => {
    return (
        <header className="museum-header">
            <h1 className="museum-title-header">KAMSI DURU</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="#experience-room">Experience</a></li>
                    <li><a href="#project-room">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

