import React, { Fragment } from 'react';

//CSS IMPORTS
import { Button, Typography, Box } from '@material-ui/core';
import CustomTextField from './helpers/CustomTextField';

import '../css/components/login.css';

const Login = () => {

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
                    <Button variant="contained" disableElevation className="login-button">
                        <Typography variant="subtitle2" className="button-text">Login</Typography>
                    </Button>
                </form>
            </Box>
        </Fragment>
    )
}

export default Login