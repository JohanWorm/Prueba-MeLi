import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { FaShippingFast } from 'react-icons/fa';
import { CurrencyFormat } from 'src/core/resources/utils';
import './ProductItemList.scss';

const ProductItemList = ({ product, categories }) => {

    const [redirectDetail, setRedirectDetail] = useState(false);
    const pathProductDetail = 'producto';
    let history = useHistory();
    let productContent = null;

    const onClick = () => {
        history.push(`/${pathProductDetail}/${product.id}`);
        setRedirectDetail(true);
    }

    if (product && product.id) {
        productContent = <>
            <div className="product__item--image">
                <img src={product.picture} alt={product.title} className="product--image w-100 h-100" />
            </div>
            <div className="product__item--data">
                <div className="product__item--data-price text__color--medium text__font--Roboto-Medium" onClick={onClick}>
                    <span>{CurrencyFormat(product.price.amount, product.price.currency)}</span>
                    <span>{product.free_shipping ? <div className="icon--free-shipping"><FaShippingFast /></div> : ''}</span>
                </div>
                <div className="product__item--data-title text__color--medium" onClick={onClick}>{product.title}</div>
            </div>
        </>
    }

    return (
        <div className="product__item">
            {redirectDetail ? <Redirect to={{ pathname: `/${pathProductDetail}/${product.id}`, state: { categories: categories } }} /> : ''}
            {productContent}
        </div>
    )
}

export default ProductItemList;
