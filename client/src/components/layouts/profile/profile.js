import React, { Fragment } from 'react';

import ProfileHome from './profile-home';

//CSS IMPORTS
import { Typography, Box, Avatar, Paper, Divider, Button } from '@material-ui/core';
import AvatarSizes from '../helpers/AvatarSizes';
import AvatarPlaceholder from '../../css/images/squidward.jpg'

import '../../css/components/profile/profile.css';

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
                                        <Typography>Recipes</Typography>
                                    </Box>
                                    <Box >
                                        <Typography>0</Typography>
                                    </Box>
                                </Box>
                                <Box className="statistics-item">
                                    <Box>
                                        <Typography>Followers</Typography>
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
                        <Box className="profile-menu">
                            <Box>
                                <Box className="">
                                    <Button>Home</Button>
                                </Box>
                                <Box className="profile-current-tab">
                                    <Button>Recipes</Button>
                                </Box>
                                <Box className="">
                                    <Button>About</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
                {
                    /*
                        <ProfileHome />
                    */
                    <ProfileHome />
                }
                {
                    /*
                        <ProfileHome />
                    */

                }
                {
                    /*
                        <ProfileHome />
                    */

                }

            </Box>
        </Fragment >
    )
}

export default Profile;