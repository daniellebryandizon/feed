import React from 'react';

import Card from '../card';

import { Typography, Box } from '@material-ui/core';
import Patrick from '../../css/images/patrick.jpg';

import '../../css/components/profile/profile-following.css';

const ProfileFollowing = () => {
    return (
        <Box className="profile-following">
            <Box>
                <Box className="profile-following-header">
                    <Typography variant="h6">Following</Typography>
                </Box>
                <Box className="profile-following-body">
                    <Card img={Patrick} title="Patrick Star" />
                    <Card img={Patrick} title="Patrick Star" />
                    <Card img={Patrick} title="Patrick Star" />
                    <Card img={Patrick} title="Patrick Star" />
                    <Card img={Patrick} title="Patrick Star" />
                    <Card img={Patrick} title="Patrick Star" />
                </Box>
            </Box>
        </Box>
    )
}

export default ProfileFollowing;