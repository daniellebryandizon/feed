import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//CSS IMPORTS
import { Button, Avatar, Typography, Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomTextField from './helpers/CustomTextField';
import feed_icon from '../css/images/feed_icon.png';
import '../css/components/register.css';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));


const Register = () => {

    const classes = useStyles();


    return (
        <Fragment>
            <Box className="register-container">
                <Box className="register-form-container">
                    <Box className="register-avatar-container">
                        <Avatar src={feed_icon} className={`register-avatar ${classes.large}`}></Avatar>
                        <Typography variant="h6">Feed |
                        <span> Account Registration</span>
                        </Typography>
                    </Box>
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
                    <Box className="register-muted">
                        <Typography variant="subtitle1">
                            Already have an account? Login {` `}
                            <Link to="/" className="login-link">here</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Fragment>
    )
}

export default Register;