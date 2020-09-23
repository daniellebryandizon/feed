import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//CSS IMPORTS
import { Button, Avatar, Typography, Box, Paper } from '@material-ui/core';
import AvatarSize from './helpers/AvatarSizes';
import CustomTextField from './helpers/CustomTextField';
import feed_icon from '../css/images/feed_icon.png';
import '../css/components/register.css';

const Register = () => {

    const classes = AvatarSize();

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