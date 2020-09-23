import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//COMPONENT IMPORTS
import Navigation from './components/layouts/navigation';
import LoginRegister from './components/layouts/loginRegister';
import Login from './components/layouts/login';
import Register from './components/layouts/register';
import Profile from './components/layouts/profile/profile';

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
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/register" component={Register}></Route>
                    <Route exact path="/profile" component={Profile}></Route>
                    <Route exact path="/" component={LoginRegister} />
                </Container>
            </Switch>
        </Router>
    )
}

export default App;