import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//CSS IMPORTS
import { Button, Avatar, Typography, Box, Paper } from '@material-ui/core';
import AvatarSize from './helpers/AvatarSizes';
import CustomTextField from './helpers/CustomTextField';
import feed_icon from '../css/images/feed_icon.png';
import '../css/components/login.css';


const Login = () => {

    const classes = AvatarSize();

    return (
        <Fragment>
            <Box className="login-container">
                <Box className="login-form-container">
                    <Box className="login-avatar-container">
                        <Avatar alt="Remy Sharp" src={feed_icon} className={`login-avatar ${classes.large}`} />
                        <Typography variant="h6">Feed |
                        <span> Login</span>
                        </Typography>
                    </Box>
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
                    <Box className="login-muted">
                        <Typography variant="subtitle1">
                            Dont have an account? Register {` `}
                            <Link to="/register" className="register-link">here</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Fragment>
    )
}

export default Login