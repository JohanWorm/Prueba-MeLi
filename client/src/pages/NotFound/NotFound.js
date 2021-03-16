import React from 'react';
import logo from 'assets/images/logo.png';
import './NotFound.scss';

const NotFound = () => {

    return (
        <div className="container main__page">
            <div className="not-found h-100 main__page--empty">
                <img className="logo" src={logo} alt="Logo" />
                <p className="text__color--medium text__font--Roboto-Bold">¡Ups! Página no encontrada.</p>
            </div>
        </div>
    )
}

export default NotFound;
