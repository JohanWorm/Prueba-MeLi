import React from 'react';
import './Home.scss';
import logo from 'assets/images/logo.png';

const Home = () => {

    return (
        <div className="container main__page">
            <div className="home h-100 main__page--empty">
                <img className="logo" src={logo} alt="Logo" />
                <p className="text__color--medium text__font--Roboto-Bold">Inicie una búsqueda</p>
            </div>
        </div>
    )
}

export default Home;
