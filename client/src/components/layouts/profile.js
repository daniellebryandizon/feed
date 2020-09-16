import React, { Fragment } from 'react';

//CSS IMPORTS
import { Typography, Box, Avatar, Paper, Divider, Button } from '@material-ui/core';
import AvatarSizes from './helpers/AvatarSizes';
import AvatarPlaceholder from '../css/images/squidward.jpg'

import ColoredPatties from '../css/images/colored-patties.png';
import KrabbyPatty from '../css/images/krabby-patty.jpg';
import Pizza from '../css/images/pizza.png';
import Fries from '../css/images/fries.jpg';

import SpongeBob from '../css/images/spongebob.jpg';
import Krabs from '../css/images/mr-krabs.jpg';
import Patrick from '../css/images/patrick.jpg';
import Sandy from '../css/images/sandy.jpg';

import '../css/components/profile.css';

const Profile = () => {

    const classes = AvatarSizes();

    return (
        <Fragment>
            <Box className="profile-container">
                <Box className="profile-header">
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
                                        <Typography>100</Typography>
                                    </Box>
                                </Box>
                                <Box className="statistics-item">
                                    <Box>
                                        <Typography>Recipes</Typography>
                                    </Box>
                                    <Box>
                                        <Typography>25</Typography>
                                    </Box>
                                </Box>
                                <Box className="statistics-item">
                                    <Box>
                                        <Typography>Reviews</Typography>
                                    </Box>
                                    <Box>
                                        <Typography>1,000</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Divider></Divider>
                </Box>
                <Box className="profile-body">
                    <Box className="followers-containers">
                        <Box className="header">
                            <Typography variant="h6">Followers</Typography>
                            <Button>See All</Button>
                        </Box>
                        <Box className="body">
                            <Paper elevation={3} className="body-item">
                                <img src={SpongeBob}></img>
                                <Box>
                                    <Typography>SpongeBob SquarePants</Typography>
                                </Box>
                            </Paper>
                            <Paper elevation={3} className="body-item">
                                <img src={Patrick}></img>
                                <Box>
                                    <Typography>Patrick Star</Typography>
                                </Box>
                            </Paper>
                            <Paper elevation={3} className="body-item">
                                <img src={Sandy}></img>
                                <Box>
                                    <Typography>Sandy Cheeks</Typography>
                                </Box>
                            </Paper>
                            <Paper elevation={3} className="body-item">
                                <img src={Krabs}></img>
                                <Box>
                                    <Typography>Mr. Krabs</Typography>
                                </Box>
                            </Paper>
                        </Box>
                    </Box>
                    <Box className="followers-containers">
                        <Box className="header">
                            <Typography variant="h6">Recipes</Typography>
                            <Button>See All</Button>
                        </Box>
                        <Box className="body">
                            <Paper elevation={3} className="body-item">
                                <img src={ColoredPatties}></img>
                                <Box>
                                    <Typography>Colored Patties</Typography>
                                </Box>
                            </Paper>
                            <Paper elevation={3} className="body-item">
                                <img src={Fries}></img>
                                <Box>
                                    <Typography>Fries</Typography>
                                </Box>
                            </Paper>
                            <Paper elevation={3} className="body-item">
                                <img src={KrabbyPatty}></img>
                                <Box>
                                    <Typography>Krabby Patty</Typography>
                                </Box>
                            </Paper>
                            <Paper elevation={3} className="body-item">
                                <img src={Pizza}></img>
                                <Box>
                                    <Typography>Krabby Pizza</Typography>
                                </Box>
                            </Paper>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Fragment >
    )
}

export default Profile;