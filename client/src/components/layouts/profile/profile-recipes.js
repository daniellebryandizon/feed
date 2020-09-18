import React from 'react';

import Card from '../card';

import { Typography, Box } from '@material-ui/core';
import ColoredPatties from '../../css/images/colored-patties.png';

import '../../css/components/profile/profile-recipes.css';

const ProfileRecipes = () => {
    return (
        <Box className="profile-recipes">
            <Box>
                <Box className="profile-recipes-header">
                    <Typography variant="h6">Recipes</Typography>
                </Box>
                <Box className="profile-recipes-body">
                    <Card img={ColoredPatties} title="Colored Patties" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                    <Card img={ColoredPatties} title="Colored Patties" />
                </Box>
            </Box>
        </Box>
    )
}

export default ProfileRecipes;