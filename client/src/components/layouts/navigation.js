import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//FUNCTION IMPORTS
import { logout } from '../../actions/login';

//CSS IMPORTS
import { AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Container, Box } from '@material-ui/core';
import feed_icon from '../css/images/feed_icon.png'
import '../css/components/navigation.css';

const Navigation = (props) => {

    const { isAuthenticated, logout } = props;
    return (
        <Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar className="application-bar">
                    <Container>
                        <Toolbar>
                            <Link to="/">
                                <img edge="start" alt="Feed" src={feed_icon} className="application-bar-avatar" />
                            </Link>
                            <Typography className="application-bar-title">
                                <Link to="/">
                                    <span className="logo-accent">|</span> Feed
                                </Link>
                            </Typography>
                            {
                                isAuthenticated ?
                                    (
                                        <Box>
                                            <Link to="/" className="application-bar-link">
                                                Home
                                        </Link>
                                            <Link onClick={() => logout()} className="application-bar-link">
                                                Logout
                                        </Link>
                                        </Box>

                                    ) :
                                    ''
                            }
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </Fragment >
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

Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.login.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navigation);

