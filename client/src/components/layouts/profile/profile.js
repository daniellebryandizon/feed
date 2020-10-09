import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//COMPONENT IMPORTS
import ProfileHome from './profile-home';
import ProfileRecipes from './profile-recipes';
import ProfileFollowing from './profile-following';
import ProfileAbout from './profile-about';
import EditProfile from './edit-profile';

//FUNCTION IMPORTS
import { loadProfile } from '../../../actions/profile';

//CSS IMPORTS
import { Typography, Box, Avatar, Paper, Button } from '@material-ui/core';
import AvatarSizes from '../helpers/AvatarSizes';
import AvatarPlaceholder from '../../css/images/squidward.jpg';

import '../../css/components/profile/profile.css';

const Profile = ({ user: { _id, name, username }, loadProfile, profile }) => {

    useEffect(() => {
        loadProfile({ username });
    }, [])

    const [tab, setTab] = useState({
        isHome: true,
        isRecipes: false,
        isFollowing: false,
        isAbout: false
    });

    const [editProfile, setEditProfile] = useState(false);

    const seeAll = (profileTab) => {
        console.log(profileTab)
        switch (profileTab) {
            case 'recipe':
                setTab({
                    isHome: false,
                    isRecipes: true,
                    isFollowing: false,
                    isAbout: false
                });
                break;
            case 'following':
                setTab({
                    isHome: false,
                    isRecipes: false,
                    isFollowing: true,
                    isAbout: false
                });
                break;
            case 'about':
                setTab({
                    isHome: false,
                    isRecipes: false,
                    isFollowing: false,
                    isAbout: true
                })
                break;
            default:
                setTab({
                    isHome: true,
                    isRecipes: false,
                    isFollowing: false,
                    isAbout: false
                })
        }
    }
    const classes = AvatarSizes();

    const { isHome, isRecipes, isFollowing, isAbout } = tab;

    return (
        <Fragment>
            {
                profile ?
                    (
                        <Box className="profile-container">
                            <Paper className="profile-header">
                                <Box className="profile-avatar">
                                    <Avatar src={AvatarPlaceholder} className={classes.profilePic}></Avatar>
                                </Box>
                                <Box className="profile-info">
                                    <Box className="profile-info-name">
                                        <Typography variant="h6">{name}</Typography>
                                    </Box>
                                    <Box className="profile-info-lifestyle">
                                        <Box>
                                            {
                                                profile.tags.map(tag =>
                                                    (<Box className="lifestyle-item"><span className="logo-accent">|</span> {tag}</Box>)
                                                )
                                            }
                                        </Box>
                                    </Box>
                                    <Box className="profile-info-statistics">
                                        <Box>
                                            <Box className="statistics-item">
                                                <Box>
                                                    <Typography>Recipes</Typography>
                                                </Box>
                                                <Box >
                                                    <Typography>{profile.numOfRecipes ? profile.numOfRecipes : 0}</Typography>
                                                </Box>
                                            </Box>
                                            <Box className="statistics-item">
                                                <Box>
                                                    <Typography>Followers</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography>{profile.numOfFollowers ? profile.numOfFollowers : 0}</Typography>
                                                </Box>
                                            </Box>
                                            <Box className="statistics-item">
                                                <Box>
                                                    <Typography>Likes</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography>{profile.numOfLikes ? profile.numOfLikes : 0}</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="profile-follow">
                                        {
                                            _id === profile.user ?
                                                (<Button className="profile-follow-button" onClick={() => { setEditProfile(true) }}>Edit Profile</Button>)
                                                :
                                                (<Button className="profile-follow-button">Follow</Button>)
                                        }
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
                            <Box className="profile-body">
                                {
                                    isHome ? (<ProfileHome seeAll={seeAll} />) : ''
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
                            <EditProfile open={editProfile} onClose={() => { setEditProfile(false) }} />
                        </Box>
                    ) : ''
            }
        </Fragment >
    )
}

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    loadProfile: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    user: state.login.user,
    profile: state.profile
});

export default connect(mapStateToProps, { loadProfile })(Profile);