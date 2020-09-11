import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//CSS IMPORTS
import { Button, Avatar, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomTextField from './helpers/CustomTextField';
import feed_icon from '../css/images/feed_icon.png';
import '../css/components/login.css';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
}));

const Login = () => {

    const classes = useStyles();

    return (
        <Fragment>
            <Box className="login-container">
                <Box className="login-avatar-container">
                    <Avatar alt="Remy Sharp" src={feed_icon} className={`login-avatar ${classes.large}`} />
                </Box>
                <Box className="login-form-container">
                    <form>
                        <Box className="login-form">
                            <Typography variant="subtitle2">Username</Typography>
                            <CustomTextField
                                id="standard-basic"
                                autoComplete="off"
                                type="text"
                                name="username"
                                className="text-field" />
                            <br />
                            <br />
                            <Typography variant="subtitle2">Pasword</Typography>
                            <CustomTextField
                                id="standard-basic"
                                autoComplete="off"
                                type="password"
                                name="password"
                                className="text-field" />
                            <br />
                            <br />
                            <Button variant="contained" disableElevation className="login-button">
                                <Typography variant="subtitle2" className="button-text">Login</Typography>
                            </Button>
                        </Box>
                    </form>
                    <Box className="login-muted">
                        <Typography variant="subtitle1">
                            Dont have an account? Register {` `}
                            <Link to="/" className="register-link">here</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Fragment>
    )
}

export default Login