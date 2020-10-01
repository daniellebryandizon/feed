import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//COMPONENT IMPORTS
import ProtectedRoute from './components/layouts/routes/ProtectedRoute';
import Navigation from './components/layouts/navigation';
import AlertMessage from './components/layouts/alerts/alertMessage';
import LoginRegister from './components/layouts/loginRegister';
import Profile from './components/layouts/profile/profile';

//FUNCTION IMPORTS

//CSS IMPORTS
import { Container } from '@material-ui/core';
import './components/layouts/helpers/CustomTextField.css';
import './components/css/app.css'

const App = ({ alertMessage: { showAlert } }) => {
    return (
        <Router>
            <Switch>
                <Container>
                    <Navigation />
                    {
                        showAlert ? <AlertMessage /> : ''
                    }
                    <ProtectedRoute exact path="/profile" component={Profile}></ProtectedRoute>
                    <Route exact path="/" component={LoginRegister} />
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