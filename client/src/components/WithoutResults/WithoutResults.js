import React from 'react';
import logo from 'assets/images/logo.png';
import './WithoutResults.scss';

const WithoutResults = ({ message }) => {

    return (
        <div className="container main__page">
            <div className="without-results h-100 main__page--empty">
                <img className="logo" src={logo} alt="Logo" />
                <p className="text__color--medium text__font--Roboto-Bold">{'Sin resultados'}</p>
            </div>
        </div>
    )
}

export default WithoutResults;
