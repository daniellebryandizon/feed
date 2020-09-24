import React, { Fragment } from 'react';

//CSS IMPORTS
import { Button, Typography, Box } from '@material-ui/core';
import CustomTextField from './helpers/CustomTextField';

import '../css/components/register.css';

const Register = () => {

    return (
        <Fragment>
            <Box className="register-form">
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
                        label="Email"
                        type="email"
                        name="email"
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
                    <CustomTextField
                        id="standard-basic"
                        autoComplete="off"
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        className="text-field" />
                    <br />
                    <br />
                    <Button variant="contained" disableElevation className="register-button">
                        <Typography variant="subtitle2" className="button-text">Register</Typography>
                    </Button>
                </form>
            </Box>
        </Fragment>
    )
}

export default Register;