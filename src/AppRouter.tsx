import React from 'react';
import { Route, BrowserRouter as Router, RouterProvider, Switch } from 'react-router-dom';
import Home from './components/Home';
import Calendar from './Calendar'

const AppRouter: React.FC = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/calendar" component={Calendar}></Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;