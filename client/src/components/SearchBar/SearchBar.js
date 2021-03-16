import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.scss';

const SearchBar = () => {

    const [searchProduct, setSearchProduct] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    let history = useHistory();
    const pathProductList = 'productos';

    const onSubmit = (event) => {
        event.preventDefault();

        if (searchValue.trim().length) {
            setSearchQuery(searchValue.trim());
            history.push(`/${pathProductList}/${searchQuery}`);
            setSearchProduct(true);
        }
    };

    return (
        <div className="searchBar">
            { searchProduct ? <Redirect to={{ pathname: `/${pathProductList}/${searchQuery}` }} /> : ''}
            <form className="h-100" onSubmit={onSubmit}>
                <input type="text" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} className="input" placeholder="Nunca dejes de buscar" />
                <button type="submit" className="btn btn__group btn__icon btn__icon--default"><FaSearch /></button>
            </form>

        </div>
    )
}

export default SearchBar;
