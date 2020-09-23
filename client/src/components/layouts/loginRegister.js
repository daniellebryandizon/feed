import React, { Fragment, useState } from 'react';
import Login from './login';
import Register from './register';

//CSS IMPORTS
import { Box, Typography, Paper, Avatar, Button, Divider } from '@material-ui/core';
import AvatarSize from './helpers/AvatarSizes';
import feed_icon from '../css/images/feed_icon.png';

import '../css/components/loginRegister.css';

const LoginRegister = () => {

    const [tab, setTab] = useState({
        isLogin: true,
        isRegister: false
    });

    const { isLogin, isRegister } = tab;

    const classes = AvatarSize();

    return (
        <Fragment>
            <Box className="login-register-container">
                <Box className="log-reg-form-container">
                    <Box className="login-reg-avatar-container">
                        <Avatar alt="Feed" src={feed_icon} className={`login-reg-avatar ${classes.large}`} />
                        <Typography variant="h6"><span className="logo-accent">|</span> Feed</Typography>
                    </Box>
                    <Paper className="log-reg-form">
                        <Box className="login-reg-tabs">
                            <Box className={isLogin ? 'login-reg-current-tab' : 'login-reg-other-tab'}>
                                <Button onClick={
                                    () => {
                                        setTab({
                                            isLogin: true,
                                            isRegister: false
                                        })
                                    }}>
                                    <Typography variant="subtitle2">
                                        Login
                                    </Typography>
                                </Button>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                            <Box className={isRegister ? 'login-reg-current-tab' : 'login-reg-other-tab'}>
                                <Button onClick={
                                    () => {
                                        setTab({
                                            isLogin: false,
                                            isRegister: true
                                        })
                                    }}>
                                    <Typography variant="subtitle2">
                                        Register
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                        <Box className="login-reg-current">
                            {
                                isLogin ? (<Login />) : (<Register />)
                            }
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Fragment>
    )
}

export default LoginRegister;