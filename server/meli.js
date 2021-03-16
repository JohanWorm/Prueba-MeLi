import express from 'express';
import { global } from './global.js';
import routerItem from './routes/items.router.js';
import cors from 'cors';

var corsOptions = {
    origin: ['http://localhost:3001', 'http://localhost'],
    optionsSuccessStatus: 200
}

const app = express();

app.use(cors(corsOptions));

app.use('/api/items', routerItem);

app.listen(global.port, global.host, (a) => {
    console.log(`Server running in port ${global.host}/${global.port}`);
});

export default app;
