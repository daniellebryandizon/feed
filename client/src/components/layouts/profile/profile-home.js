import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Card from '../card';
import CardPost from '../card-post';

import { Typography, Box, Button } from '@material-ui/core';
import ColoredPatties from '../../css/images/colored-patties.png';
import Patrick from '../../css/images/patrick.jpg';

import '../../css/components/profile/profile-home.css';

const ProfileHome = ({ seeAll }) => {
    return (
        <Box className="profile-home">
            <Box>
                <Box className="profile-home-header">
                    <Typography variant="h6">Top Recipes</Typography>
                    {true ? (<Button onClick={() => {seeAll('recipe')}}>See All</Button>) : ''}
                </Box>
                <Box className="profile-home-body">
                    {
                        true ?
                            (
                                <Fragment>
                                    <Card img={ColoredPatties} title="Colored Patties" />
                                    <Card img={ColoredPatties} title="Colored Patties" />
                                    <Card img={ColoredPatties} title="Colored Patties" />
                                    <Card img={ColoredPatties} title="Colored Patties" />
                                </Fragment>
                            )
                            :
                            (
                                <Fragment>
                                    <Typography variant="subtitle1" className="no-recipe-added" style={{ padding: '10px' }}>
                                        <span className="logo-accent">|</span> No recipe added
                                        </Typography>
                                </Fragment>
                            )
                    }

                </Box>
            </Box>
            {

                <Box>
                    <Box className="profile-home-header">
                        <Typography variant="h6">Recent Followers</Typography>
                        {true ? (<Button onClick={() => {seeAll('following')}}>See All</Button>) : ''}
                    </Box>
                    <Box className="profile-home-body">
                        {
                            true ?
                                (
                                    <Fragment>
                                        <Card img={Patrick} title="Patrick Star" />
                                        <Card img={Patrick} title="Colored Patties" />
                                        <Card img={Patrick} title="Colored Patties" />
                                        <Card img={Patrick} title="Colored Patties" />
                                    </Fragment>
                                )
                                :
                                (
                                    <Fragment>
                                        <Typography variant="subtitle1" className="no-recipe-added" style={{ padding: '10px' }}>
                                            <span className="logo-accent">|</span> No followers
                                        </Typography>
                                    </Fragment>
                                )
                        }
                    </Box>
                </Box >

            }

            {
                /*
                    <Box>
                        <Box className="profile-home-header">
                            <Typography variant="h6">Recent Feed</Typography>
                        </Box>
                        <Box className="profile-home-post">
                            <CardPost img={ColoredPatties} />
                            <CardPost img={ColoredPatties} />
                        </Box>
                    </Box>
                */
            }

        </Box >
    )
}

ProfileHome.propTypes = {
    seeAll: PropTypes.func.isRequired
}

export default ProfileHome;