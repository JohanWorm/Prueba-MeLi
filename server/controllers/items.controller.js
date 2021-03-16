import axios from 'axios';
import _ from 'lodash';
import { global } from '../global.js';
import * as modelItem from './../models/item.model.js';

const meliInstance = axios.create({
    baseURL: `${global.apiMeli.url}`
});

const getListItems = async (value, limitList, res, next) => {
    try {
        const response = await meliInstance.get(`${global.apiMeli.region}/search?q=${value}&limit=${limitList}`);

        if (_.isNil(response)) {
            res.send({ message: 'No hay información' });
        } else {
            res.send({
                author: global.getAuthor(),
                categories: modelItem.getCategories(response.data.filters),
                items: modelItem.getItems(response.data.results)
            });
        }
    } catch (e) {
        res.status(400).send({ message: e.message || 'No hay información' });
    }
};
const getItemDetail = async (value, res, next) => {
    try {
        const [responseId, responseDescription] = await Promise.all([
            meliInstance.get(`items/${value}`),
            meliInstance.get(`items/${value}/description`)
        ]);

        if (_.isNil(responseId) && _.isNil(responseDescription)) {
            res.status(400).send({ message: 'No hay información' });
        } else {
            res.send(modelItem.getItem(responseId.data, responseDescription.data));
        }
    } catch (e) {
        res.status(400).send({ message: e.message || 'No hay información' });
    }
};

export { getListItems, getItemDetail }