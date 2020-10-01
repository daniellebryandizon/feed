import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ProtectedRoute = ({
    component: Component,
    isAuthenticated,
    ...rest
}) => (
        <Route
            {...rest}
            render={
                props =>
                    !isAuthenticated ?
                        (<Redirect to="/"/>) :
                        (<Component {...props} />)
            }
        />
    )

ProtectedRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.login.isAuthenticated
})

export default connect(mapStateToProps, {})(ProtectedRoute);