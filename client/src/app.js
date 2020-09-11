import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//COMPONENT IMPORTS
import Navigation from './components/layouts/navigation';
import Login from './components/layouts/login';

//CSS IMPORTS
import { Container } from '@material-ui/core';
import './components/layouts/helpers/CustomTextField.css';
import './components/css/app.css'

const App = () => {
    return (
        <Router>
            <Switch>
                <Container>
                    <Navigation />
                    <Route exact path="/" component={Login}></Route>
                </Container>
            </Switch>
        </Router>
    )
}

export default App;