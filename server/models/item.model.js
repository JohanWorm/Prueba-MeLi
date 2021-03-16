import { global } from '../global.js';
import _ from 'lodash';

const getItem = (dataItem, description) => {

    const getShipping = (shipping) => {
        if (!_.isNil(shipping) && !_.isNil(!shipping.free_shipping)) {
            return shipping.free_shipping;
        }
        return '';
    }

    const getPrice = (onlyDecimals) => {
        if (_.isNumber(dataItem.price)) {
            const price = dataItem.price.toString().split('.');
            return onlyDecimals ? (price.length > 1 ? price[1] : '00') : price[0];
        }
        return 0;
    }

    const item = {
        id: dataItem.id,
        title: dataItem.title,
        price: {
            currency: dataItem.currency_id,
            amount: getPrice(),
            decimals: getPrice(true)
        },
        picture: dataItem.thumbnail,
        condition: dataItem.condition,
        free_shipping: getShipping(dataItem.shipping),
    }
    
    if (description) {
        item.sold_quantity = dataItem.sold_quantity;
        item.description = description.plain_text;
        item.author = global.getAuthor();
        item.picture = dataItem.pictures[0].secure_url
    }

    return item;
}

const getItems = (dataItems) => {
    const items = [];

    if (!_.isNil(dataItems) && dataItems.length) {
        dataItems.map((item) => {
            items.push(getItem(item));
        });
    }

    return items;
}

const getCategories = (filters) => {
    const categories = [];

    if (!_.isNil(filters) && filters.length) {
        if (filters[0].id === 'category' && filters[0].values.length && filters[0].values[0].path_from_root.length) {
            filters[0].values[0].path_from_root.map((filter) => {
                categories.push(filter.name);
            });
        }
    }

    return categories;
}

export { getItem, getItems, getCategories };
