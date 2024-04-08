import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Calendar from './Calendar'


const AppRouter: React.FC = () => {

    return (
        <Router>
            <Route path="" Component={Home}></Route>
            <Route path="/calendar" Component={Calendar}></Route>
        </Router>
    );
};

export default AppRouter;