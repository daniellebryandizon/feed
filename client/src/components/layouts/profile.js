import React, { Fragment } from 'react';

import Card from './card';
import CardPost from './card-post';

//CSS IMPORTS
import { Typography, Box, Avatar, Paper, Divider, Button } from '@material-ui/core';
import AvatarSizes from './helpers/AvatarSizes';
import AvatarPlaceholder from '../css/images/squidward.jpg'

import ColoredPatties from '../css/images/colored-patties.png';
import Fries from '../css/images/fries.jpg'
import KrabbyPatty from '../css/images/krabby-patty.jpg';
import Patrick from '../css/images/patrick.jpg';

import '../css/components/profile.css';

const Profile = () => {

    const classes = AvatarSizes();

    return (
        <Fragment>
            <Box className="profile-container">
                <Paper className="profile-header">
                    <Box className="profile-avatar">
                        <Avatar src={AvatarPlaceholder} className={classes.profile}></Avatar>
                    </Box>
                    <Box className="profile-info">
                        <Box className="profile-info-name">
                            <Typography variant="h6">Squidward Tentacles</Typography>
                        </Box>
                        <Box className="profile-info-lifestyle">
                            <Box>
                                <Box className="lifestyle-item">Fun</Box>
                                <Box className="lifestyle-item">Healthy</Box>
                                <Box className="lifestyle-item">Energetic</Box>
                                <Box className="lifestyle-item">Organic</Box>
                                <Box className="lifestyle-item">Inspiration</Box>
                            </Box>
                        </Box>
                        <Box className="profile-info-statistics">
                            <Box>
                                <Box className="statistics-item">
                                    <Box>
                                        <Typography>Followers</Typography>
                                    </Box>
                                    <Box >
                                        <Typography>0</Typography>
                                    </Box>
                                </Box>
                                <Box className="statistics-item">
                                    <Box>
                                        <Typography>Recipes</Typography>
                                    </Box>
                                    <Box>
                                        <Typography>0</Typography>
                                    </Box>
                                </Box>
                                <Box className="statistics-item">
                                    <Box>
                                        <Typography>Likes</Typography>
                                    </Box>
                                    <Box>
                                        <Typography>0</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="profile-follow">
                            <Button className="profile-follow-button">Follow</Button>
                        </Box>
                    </Box>
                </Paper>
                <Box className="profile-body">
                    <Box>
                        <Box className="header">
                            <Typography variant="h6">Following</Typography>
                            <Button>See All</Button>
                        </Box>
                        <Box className="body">
                            <Card img={Patrick} title="Patrick Star" />
                            <Card img={Patrick} title="Patrick Star" />
                            <Card img={Patrick} title="Patrick Star" />
                            <Card img={Patrick} title="Patrick Star" />
                        </Box>
                    </Box>
                    <Box>
                        <Box className="header">
                            <Typography variant="h6">Top Recipes</Typography>
                            <Button>See All</Button>
                        </Box>
                        <Box className="body">
                            <Card img={ColoredPatties} title="Colored Patties" />
                            <Card img={ColoredPatties} title="Colored Patties" />
                            <Card img={ColoredPatties} title="Colored Patties" />
                            <Card img={ColoredPatties} title="Colored Patties" />
                        </Box>
                    </Box>
                    <Box>
                        <Box className="header">
                            <Typography variant="h6">Recent Feed</Typography>
                        </Box>
                        <Box className="body">
                            <CardPost img={ColoredPatties}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Fragment >
    )
}

export default Profile;