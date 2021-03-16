import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import SearchBar from 'src/components/SearchBar/SearchBar';
import './Header.scss';

const Header = () => {

    return (
        <header className="header container">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <SearchBar></SearchBar>
        </header>
    )
}

export default Header;
