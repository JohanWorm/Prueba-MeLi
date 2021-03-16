import React from 'react';
import { useParams } from 'react-router-dom';
import Enpoints from 'src/core/resources/endpoints';
import useAxiosGet from 'src/core/hooks/request';
import BreadCrumb from 'src/components/BreadCrumb/BreadCrumb';
import Loading from 'src/components/Loading/Loading';
import Error from 'src/components/Error/Error';
import WithoutResults from 'src/components/WithoutResults/WithoutResults';
import ProductItemList from 'src/components/ProductItemList/ProductItemList';

const ProductsList = (props) => {

    const params = useParams();
    const limitItems = 4;

    let productsRequest = useAxiosGet(`${Enpoints.productsList}/${params.query}&limit=${limitItems}`);
    let categoriesList = [];
    let productsList = [];
    let containerData = null;

    if (productsRequest.data) {
        categoriesList = productsRequest.data.categories;
        productsList = productsRequest.data.items;
        if (productsList.length) {
            containerData = <div className="container main__page">
                <div className="products-list">
                    <BreadCrumb categories={categoriesList}></BreadCrumb>
                    <div className="main__page--body">
                        {productsList.map((product, i) => <ProductItemList key={i} product={product} categories={categoriesList}></ProductItemList>)}
                    </div>
                </div>
            </div>
        } else {
            containerData = <WithoutResults />
        }
    }

    return (
        <>
            {productsRequest.loading ? <Loading /> : ''}
            {productsRequest.error ? <Error /> : ''}
            {containerData}
        </>
    )
}

export default ProductsList;
