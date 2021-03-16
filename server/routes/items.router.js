
import express from 'express';
import { getListItems, getItemDetail } from './../controllers/items.controller.js';

const routerItem = express.Router();

export default routerItem;

routerItem.get('/', (req, res, next) => {
    const query = req.query.q;
    const limit = req.query.limit || 4;
    if (!!query) {
        getListItems(query, limit, res, next);
    } else {
        res.status(400).send({
            error: 'Búsqueda incorrecta'
        });
    }
});

routerItem.get('/:id', (req, res, next) => {
    const id = req.params.id;
    if (!!id) {
        getItemDetail(id, res, next);
    } else {
        res.status(400).send({
            error: 'Producto incorrecto'
        });
    }
});
