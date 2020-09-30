import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//FUNCTIONS
import { login } from '../../actions/login';

//CSS IMPORTS
import { Button, Typography, Box } from '@material-ui/core';
import CustomTextField from './helpers/CustomTextField';

import '../css/components/login.css';

const Login = ({ login }) => {

    return (
        <Fragment>
            <Box className="login-form">
                <form onSubmit="">
                    <CustomTextField
                        id="standard-basic"
                        autoComplete="off"
                        label="Username"
                        type="text"
                        name="username"
                        className="text-field" />
                    <br />
                    <br />
                    <CustomTextField
                        id="standard-basic"
                        autoComplete="off"
                        label="Password"
                        type="password"
                        name="password"
                        className="text-field" />
                    <br />
                    <br />
                    <Button variant="contained" disableElevation className="login-button" onClick={() => login()}>
                        <Typography variant="subtitle2" className="button-text">Login</Typography>
                    </Button>
                </form>
            </Box>
        </Fragment>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null, {login})(Login);