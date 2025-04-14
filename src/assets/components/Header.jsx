import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="title-wrapper">
                    <h1 className="title">MI GALERÍA</h1>
                    <div className="title-decoration"></div>
                </div>
                <div className="header-accent"></div>
            </div>
        </header>
    );
};

export default Header;