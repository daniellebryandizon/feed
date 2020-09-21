import React, { Fragment, useState } from 'react';

import ProfileHome from './profile-home';
import ProfileRecipes from './profile-recipes';
import ProfileFollowing from './profile-following';
import ProfileAbout from './profile-about';

//CSS IMPORTS
import { Typography, Box, Avatar, Paper, Divider, Button } from '@material-ui/core';
import AvatarSizes from '../helpers/AvatarSizes';
import AvatarPlaceholder from '../../css/images/squidward.jpg'

import '../../css/components/profile/profile.css';

const Profile = () => {

    const [tab, setTab] = useState({
        isHome: true,
        isRecipes: false,
        isFollowing: false,
        isAbout: false
    });

    const classes = AvatarSizes();

    const { isHome, isRecipes, isFollowing, isAbout } = tab;

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
                                <Box className={isHome ? 'profile-current-tab' : ''} onClick={
                                    () => {
                                        setTab({
                                            isHome: true,
                                            isRecipes: false,
                                            isFollowing: false,
                                            isAbout: false
                                        })
                                    }}>
                                    <Button>Home</Button>
                                </Box>
                                <Box className={isRecipes ? 'profile-current-tab' : ''} onClick={
                                    () => {
                                        setTab({
                                            isHome: false,
                                            isRecipes: true,
                                            isFollowing: false,
                                            isAbout: false
                                        })
                                    }}>
                                    <Button>Recipes</Button>
                                </Box>
                                <Box className={isFollowing ? 'profile-current-tab' : ''} onClick={
                                    () => {
                                        setTab({
                                            isHome: false,
                                            isRecipes: false,
                                            isFollowing: true,
                                            isAbout: false
                                        })
                                    }}>
                                    <Button>Following</Button>
                                </Box>
                                <Box className={isAbout ? 'profile-current-tab' : ''} onClick={
                                    () => {
                                        setTab({
                                            isHome: false,
                                            isRecipes: false,
                                            isFollowing: false,
                                            isAbout: true
                                        })
                                    }}>
                                    <Button>About</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
                {
                    isHome ? (<ProfileHome />) : ''
                }
                {
                    isRecipes ? (<ProfileRecipes />) : ''
                }
                {
                    isFollowing ? (<ProfileFollowing />) : ''
                }
                {
                    isAbout ? (<ProfileAbout />) : ''
                }
            </Box>
        </Fragment >
    )
}

export default Profile;