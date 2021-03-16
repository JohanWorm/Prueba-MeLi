import React from 'react';
import logo from 'assets/images/logo.png';
import './Error.scss';

const Error = ({ message }) => {

    return (
        <div className="container main__page">
            <div className="error h-100 main__page--empty">
                <img className="logo" src={logo} alt="Logo" />
                <p className="text__color--medium text__font--Roboto-Bold">{message || '¡Ups! Algo salió mal...'}</p>
            </div>
        </div>
    )
}

export default Error;
