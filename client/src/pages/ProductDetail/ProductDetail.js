import React from 'react';
import { useParams } from 'react-router-dom';
import Enpoints from 'src/core/resources/endpoints';
import useAxiosGet from 'src/core/hooks/request';
import { CurrencyFormat } from 'src/core/resources/utils';
import BreadCrumb from 'src/components/BreadCrumb/BreadCrumb';
import Loading from 'src/components/Loading/Loading';
import Error from 'src/components/Error/Error';
import './ProductDetail.scss';

const ProductDetail = (props) => {

    const params = useParams();

    let productRequest = useAxiosGet(`${Enpoints.productDetail}/${params.id}`);
    let product = null;
    let categories = [];
    let containerData = null;

    const getCondition = (condition) => {
        switch (condition) {
            case 'new':
                return 'Nuevo';
            case 'used':
                return 'Usado';
            default:
                return 'No especificado';
        }
    };

    const getDescription = (product) => {
        return product.description.split('\n').map((i, key) => {
            if (i) {
                return <span key={key}>{i} <br /> </span>;
            } else {
                return <br key={key} />;
            }
        });
    };

    if (props.location.state && props.location.state.categories) {
        categories = props.location.state.categories;
    }

    if (productRequest.data) {
        product = productRequest.data;
        containerData = <div className="container main__page">
            <BreadCrumb categories={categories}></BreadCrumb>
            <div className="main__page--body">
                <div className="product">
                    <div className="product__main">
                        <div className="product__main-image">
                            <img src={product.picture} alt={product.title} className="h-100" />
                        </div>
                        <div className="product__main-data">
                            <p className="text__color--ligth">{`${getCondition(product.condition)} - ${product.sold_quantity} vendidos`}</p>
                            <p className="text__color--dark product__main-data-title">{product.title}</p>
                            <div className="product__main-data-price">
                                <span className="text__color--dark">{CurrencyFormat(product.price.amount, product.price.currency)}</span>
                                <span className="product__main-data-decimals">{product.price.decimals}</span>
                            </div>
                            <button className="btn btn--primary">Comprar</button>
                        </div>
                    </div>
                    <div className="product--description text__color--medium">
                        <h2>Descripción del producto</h2>
                        <p>
                            {getDescription(product)}
                        </p>
                    </div>
                </div>
            </div>
        </div>;
    }

    return (
        <>
            {productRequest.loading ? <Loading /> : ''}
            {productRequest.error ? <Error /> : ''}
            {containerData}
        </>
    )
}

export default ProductDetail;
