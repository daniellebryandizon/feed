import React from 'react';

import Card from '../card';
import CardPost from '../card-post';

import { Typography, Box, Button } from '@material-ui/core';
import ColoredPatties from '../../css/images/colored-patties.png';
import Patrick from '../../css/images/patrick.jpg';

import '../../css/components/profile/profile-home.css';

const ProfileHome = () => {
    return (
        <Box className="profile-home">
            <Box>
                <Box className="profile-home-header">
                    <Typography variant="h6">Top Recipes</Typography>
                    <Button>See All</Button>
                </Box>
                <Box className="profile-home-body">
                    <Card img={ColoredPatties} title="Colored Patties" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                </Box>
            </Box>
            <Box>
                <Box className="profile-home-header">
                    <Typography variant="h6">Recent Followers</Typography>
                    <Button>See All</Button>
                </Box>
                <Box className="profile-home-body">
                    <Card img={Patrick} title="Patrick Star" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                </Box>
            </Box>
            <Box>
                <Box className="profile-home-header">
                    <Typography variant="h6">Recent Feed</Typography>
                </Box>
                <Box className="profile-home-post">
                    <CardPost img={ColoredPatties} />
                    <CardPost img={ColoredPatties} />
                </Box>
            </Box>
        </Box>
    )
}

export default ProfileHome;