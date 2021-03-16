import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "src/layout/Header/Header";
import routes from 'src/routes';
import "./App.scss";

const App = () => {

    return (
        <Router>
            <Header />
            <Switch>
                {routes.map((route, i) => <Route key={i} {...route} />)}
            </Switch>
        </Router>
    );
}

export default App;
