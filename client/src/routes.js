import Home from "src/pages/Home/Home";
import NotFound from "src/pages/NotFound/NotFound";
import ProductsList from "src/pages/ProductsList/ProductsList";
import ProductDetail from "src/pages/ProductDetail/ProductDetail";

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/productos/:query",
        exact: true,
        component: ProductsList
    },
    {
        path: "/producto/:id",
        exact: true,
        component: ProductDetail
    },
    {
        component: NotFound
    },
];

export default routes;
