import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//CSS IMPORTS
import { AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Container } from '@material-ui/core';
import feed_icon from '../css/images/feed_icon.png'
import '../css/components/navigation.css';

const Navigation = (props) => {
    return (
        <Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar className="application-bar">
                    <Container>
                        <Toolbar>
                            <Link to="/" className="application-bar-link">
                                <img edge="start" alt="Feed" src={feed_icon} className="application-bar-avatar" />
                            </Link>
                            <Typography className="application-bar-title">
                                <Link to="/" className="application-bar-link">
                                    <span className="logo-accent">|</span> Feed
                                </Link>
                            </Typography>
                            <Link to="/" className="application-bar-link">
                                Login
                            </Link>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </Fragment>
    )
}

const ElevationScroll = (props) => {

    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navigation;

