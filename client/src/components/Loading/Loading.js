import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import './Loading.scss';

const Loading = () => {

    return (
        <div className="container main__page">
            <div className="loading h-100 main__page--empty main__page--body">
                <FaSpinner className="animation-rotate text__color--ligth" />
            </div>
        </div>
    )
}

export default Loading;
