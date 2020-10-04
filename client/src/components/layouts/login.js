import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//FUNCTIONS
import { login } from '../../actions/login';

//CSS IMPORTS
import { Button, Typography, Box } from '@material-ui/core';
import CustomTextField from './helpers/CustomTextField';

import '../css/components/login.css';

const Login = ({ login }) => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const { username, password } = credentials;

    const onChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;

        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        login({ username, password });
    }

    return (
        <Fragment>
            <Box className="login-form">
                <form onSubmit={onSubmit}>
                    <CustomTextField
                        autoComplete="off"
                        label="Username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                        className="text-field" />
                    <br />
                    <br />
                    <CustomTextField
                        autoComplete="off"
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        className="text-field" />
                    <br />
                    <br />
                    <Button variant="contained" disableElevation className="login-button" type="submit">
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

export default connect(null, { login })(Login);