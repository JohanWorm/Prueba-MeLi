import React from 'react';
import './BreadCrumb.scss';

const BreadCrumb = ({ categories }) => {

    let categoriesList = [];

    if (categories && categories.length) {
        categoriesList = categories;
    }

    return (
        <div className="breadCrumb">
            <ul>
                {categoriesList.map((category, key) => <li key={key} className="text__color--ligth">{category}</li>)}
            </ul>
        </div>
    )
}

export default BreadCrumb;
