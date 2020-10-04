import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from './store';

//COMPONENT IMPORTS
import ProtectedRoute from './components/layouts/routes/ProtectedRoute';
import Navigation from './components/layouts/navigation';
import AlertMessage from './components/layouts/alerts/alertMessage';
import LoginRegister from './components/layouts/loginRegister';
import Profile from './components/layouts/profile/profile';
import Home from './components/layouts/home/home';

//FUNCTION IMPORTS
import { loadUser } from './actions/login';

//CSS IMPORTS
import { Container } from '@material-ui/core';
import './components/layouts/helpers/CustomTextField.css';
import './components/css/app.css'

const App = ({ alertMessage: { showAlert } }) => {

    useEffect(() => {
        store.dispatch(loadUser());
    }, [])

    return (
        <Router>
            <Switch>
                <Container>
                    <Navigation />
                    {
                        showAlert ? <AlertMessage /> : ''
                    }
                    <Route exact path="/" component={LoginRegister} />
                    <ProtectedRoute exact path="/profile/:username" component={Profile} />
                    <ProtectedRoute exact path="/home" component={Home} />
                </Container>
            </Switch>
        </Router>
    )
}

App.propTypes = {
    alertMessage: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    alertMessage: state.alertMessage
})

export default connect(mapStateToProps, {})(App);