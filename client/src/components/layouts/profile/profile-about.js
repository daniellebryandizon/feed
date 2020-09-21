import React from 'react';

import { Box, Typography, Divider } from '@material-ui/core';

import '../../css/components/profile/profile-about.css';

const ProfileAbout = () => {
    return (
        <Box className="profile-about">
            <Box>
                <Box className="profile-about-header">
                    <Typography variant="h6">About</Typography>
                </Box>
                <Divider></Divider>
            </Box>
        </Box>

    )
}

export default ProfileAbout;